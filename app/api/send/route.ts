import  EmailTemplate  from "@/components//Email/emailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const test = {
  id: 'aaaaa',
  title: 'Project Kickoff',
  date: '2024-8-17',
  startTime: '1000',
  finishTime: '1100',
};

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["enzoborrellidev@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ event:test }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}