"use client";

import { useEffect, useRef, useState } from "react";
import { onMessage, Unsubscribe } from "firebase/messaging";
import { fetchToken, messaging } from "@/firebase";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useSession } from "next-auth/react";

//step 0, token to database functions

// Save a new token to the database
const saveNewToken = async ({
  token,
  userID,
}: {
  token: string;
  userID: string | undefined;
}) => {
  console.log("savedtoken | not error:", userID);
  try {
    const response = await fetch("/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userID,
        token: token,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to save new token");
    }
  } catch (error) {
    console.error("Error saving new token:", error);
    console.error("savedtoken:", userID);
  }
};

// Update the existing token in the database
const updateToken = async ({
  token,
  userID,
}: {
  token: string;
  userID: string | undefined;
}) => {
  console.log("updatetoken | not error:", userID);
  try {
    const response = await fetch("/api/token", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userID,
        token: token,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update token");
    }
  } catch (error) {
    console.error("Error updating token:", error);
    console.error("updatetoken:", userID);
  }
};

// Function to save or update token in the database
async function tokenToDB({
  token,
  userID,
}: {
  token: string;
  userID: string | undefined;
}) {
  console.log("tokenToDb | not error:", userID);
  try {
    // Check if a token already exists for this user
    const response = await fetch("/api/token", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { tokens } = await response.json();

    const existingToken = tokens.find(
      (t: { userId: string; token: string }) =>
        t.userId === userID && t.token === token
    );

    if (!existingToken) {
      // No existing token, save a new one
      await saveNewToken({ userID: userID, token: token });
    } else if (existingToken.token !== token) {
      // If the token is different, update it
      await updateToken({ userID: userID, token: token });
    }
  } catch (error) {
    console.error("Error checking or saving token:", error);
    console.error("tokenToDB:", userID);
  }
}

async function getNotificationPermissionAndToken() {
  // Step 1: Check if Notifications are supported in the browser.
  if (!("Notification" in window)) {
    console.info("This browser does not support desktop notification");
    return null;
  }

  // Step 2: Check if permission is already granted.
  if (Notification.permission === "granted") {
    return await fetchToken();
  }

  // Step 3: If permission is not denied, request permission from the user.
  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      return await fetchToken();
    }
  }

  console.log("Notification permission not granted.");
  return null;
}

const useFcmToken = ({ userMail }: { userMail: string | undefined }) => {
  console.log("fcmToken:", userMail);
  const { toast } = useToast();
  const router = useRouter(); // Initialize the router for navigation.
  const [notificationPermissionStatus, setNotificationPermissionStatus] =
    useState<NotificationPermission | null>(null); // State to store the notification permission status.
  const [token, setToken] = useState<string | null>(null); // State to store the FCM token.
  const retryLoadToken = useRef(0); // Ref to keep track of retry attempts.
  const isLoading = useRef(false); // Ref to keep track if a token fetch is currently in progress.

  const loadToken = async () => {
    // Step 4: Prevent multiple fetches if already fetched or in progress.
    if (isLoading.current) return;

    isLoading.current = true; // Mark loading as in progress.
    const token = await getNotificationPermissionAndToken(); // Fetch the token.

    // Step 5: Handle the case where permission is denied.
    if (Notification.permission === "denied") {
      setNotificationPermissionStatus("denied");
      console.info(
        "%cPush Notifications issue - permission denied",
        "color: green; background: #c7c7c7; padding: 8px; font-size: 20px"
      );
      isLoading.current = false;
      return;
    }

    // Step 6: Retry fetching the token if necessary. (up to 3 times)
    // This step is typical initially as the service worker may not be ready/installed yet.
    if (!token) {
      if (retryLoadToken.current >= 3) {
        alert("Unable to load token, refresh the browser");
        console.info(
          "%cPush Notifications issue - unable to load token after 3 retries",
          "color: green; background: #c7c7c7; padding: 8px; font-size: 20px"
        );
        isLoading.current = false;
        return;
      }

      retryLoadToken.current += 1;
      console.error("An error occurred while retrieving token. Retrying...");
      isLoading.current = false;
      await loadToken();
      return;
    }

    // Step 7: Set the fetched token and mark as fetched.
    setNotificationPermissionStatus(Notification.permission);
    setToken(token);
    //@ts-ignore
    await tokenToDB({ token: token, userID: userMail });
    isLoading.current = false;
  };

  useEffect(() => {
    // Step 8: Initialize token loading when the component mounts.
    if ("Notification" in window) {
      loadToken();
    }
  }, []);

  useEffect(() => {
    const setupListener = async () => {
      if (!token) return; // Exit if no token is available.

      console.log(`onMessage registered with token ${token}`);
      const m = await messaging();
      if (!m) return;

      // Step 9: Register a listener for incoming FCM messages.
      const unsubscribe = onMessage(m, (payload) => {
        if (Notification.permission !== "granted") return;

        console.log("Foreground push notification received:", payload);
        const link = payload.fcmOptions?.link || payload.data?.link;

        if (link) {
          toast({
            title: `${payload.notification?.title}`,
            description: `${payload.notification?.body}`,
            action: (
              <ToastAction
                onClick={() => {
                  const link = payload.fcmOptions?.link || payload.data?.link;
                  if (link) {
                    router.push(link);
                  }
                }}
                altText="visit"
              >
                visit
              </ToastAction>
            ),
          });
        } else {
          toast({
            title: `${payload.notification?.title}`,
            description: `${payload.notification?.body}`,
          });
        }

        // --------------------------------------------
        // Disable this if you only want toast notifications.
        const n = new Notification(
          payload.notification?.title || "New message",
          {
            body: payload.notification?.body || "This is a new message",
            data: link ? { url: link } : undefined,
          }
        );

        // Step 10: Handle notification click event to navigate to a link if present.
        n.onclick = (event) => {
          event.preventDefault();
          const link = (event.target as any)?.data?.url;
          if (link) {
            router.push(link);
          } else {
            console.log("No link found in the notification payload");
          }
        };
        // --------------------------------------------
      });

      return unsubscribe;
    };

    let unsubscribe: Unsubscribe | null = null;

    setupListener().then((unsub) => {
      if (unsub) {
        unsubscribe = unsub;
      }
    });

    // Step 11: Cleanup the listener when the component unmounts.
    return () => unsubscribe?.();
  }, [token, router, toast]);

  return { token, notificationPermissionStatus }; // Return the token and permission status.
};

export default useFcmToken;
