import { options } from "@/app/api/auth/[...nextauth]/options";
import EventBadge from "@/components/calendar/eventBadge";
import NotificationHeader from "@/components/calendar/notificationHeader";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Recordatorios() {
  const session = await getServerSession(options);
  const events = await db.reminder.findMany({
    where: { userId: session?.user?.email },
    include: { event: true },
  });
  return (
    <main className="flex flex-col items-center w-full gap-4 p-5 md:p-10 md:px-20">
      <NotificationHeader userID={session?.user?.email}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
      {events.map((event) => (
        <EventBadge
          key={event.id}
          event={event.event}
          reminders={events.map((reminder) => reminder.event)}
          showDate={true}
        /> 
      ))}
      </div>
    </main>
  );
}
