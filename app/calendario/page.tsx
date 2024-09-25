import Calendar from "@/components/calendar/calendar";
import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import NotificationHeader from "@/components/calendar/notificationHeader";
/*
TODO: a date picker
TODO: a time picker
TODO: update forms
? might need to simplify the forms


*/
export default async function Calendario() {
  const session = await getServerSession(options)
  const userMail = session?.user.email
  return (
    <main className="flex flex-col items-center w-full gap-4 p-5 md:p-10 md:px-20">
      <NotificationHeader userID={userMail}/>
      <Calendar />
    </main>
  );
}
