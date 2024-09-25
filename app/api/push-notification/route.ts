import admin from "firebase-admin";
import { Message } from "firebase-admin/messaging";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getServiceAccount() {
  const { data, error } = await supabase
    .storage
    .from('service_key') // Replace with your bucket name
    .download('service_key.json'); // Replace with correct path

  if (error) {
    console.error("Error fetching service account:", error);
    throw new Error("Failed to fetch service account.");
  }

  const fileContent = await data.text(); // Convert file to text (JSON string)
  console.log(fileContent)
  return JSON.parse(fileContent); // Parse JSON string into an object
}

if (!admin.apps.length) {
  try {
    const serviceAccount = await getServiceAccount();

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    console.log("Firebase initialized successfully.");
  } catch (error) {
    console.error("Error initializing Firebase:", error);
    throw new Error("Failed to initialize Firebase Admin SDK.");
  }
}

export async function POST(request: NextRequest) {
  const { token, title, message, link } = await request.json();

  const payload: Message = {
    token,
    notification: { title: title, body: message },
    webpush: link && { fcmOptions: { link } },
  };

  try {
    await admin.messaging().send(payload);
    return NextResponse.json({ success: true, message: "Notification sent!" });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
