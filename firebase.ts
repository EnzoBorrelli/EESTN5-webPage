import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "eestn5-web.firebaseapp.com",
  projectId: "eestn5-web",
  storageBucket: "eestn5-web.appspot.com",
  messagingSenderId: "824953245872",
  appId: "1:824953245872:web:fb479720593339cb7e6b75",
  measurementId: "G-68SFDRRRKR",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const messaging = async () => {
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
};

export const fetchToken = async () => {
  try {
    const fcmMessaging = await messaging();
    if (fcmMessaging) {
      const token = await getToken(fcmMessaging, {
        vapidKey: process.env.NEXTH_PUBLIC_FIREBASE_FCM_VAPID_KEY,
      });
      return token;
    }
    return null;
  } catch (err) {
    console.error("un error ocurrio con el token", err);
    return null;
  }
};

export { app, messaging };
