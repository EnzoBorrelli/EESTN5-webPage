import { options } from "@/app/api/auth/[...nextauth]/options";
import EventBadge from "@/components/calendar/eventBadge";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Recordatorios() {
  const session = await getServerSession(options);
  const user = await db.user.findUnique({
    where: { name: session?.user.name },
  });
  const events = await db.reminder.findMany({
    where: { userId: user?.id },
    include: { event: true },
  });
  return (
    <main className="flex flex-col items-center w-full gap-4 p-5 md:p-10 md:px-20">
      {events.map((event) => (
        <EventBadge
          key={event.id}
          event={event.event}
          userID={user?.id}
          reminders={events.map((reminder) => reminder.event)}
          showDate={true}
        />
      ))}
    </main>
  );
}
