import React from "react";
import EventBadge from "../calendar/eventBadge";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import dayjs from "dayjs";

export default async function UpcomingEvents() {
  const session = await getServerSession(options);
  const reminders = await db.reminder.findMany({
    where: { userId: session?.user?.email },
    include: { event: true },
  });
  const events = await db.event.findMany();

  const today = dayjs().startOf("day");
  const upcomingEvents = events.filter(
    (event) =>
      dayjs(event.date).isSame(today) || dayjs(event.date).isAfter(today)
  );
  const sortedEvents = upcomingEvents.sort((a, b) =>
    dayjs(a.date).diff(dayjs(b.date))
  );
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {sortedEvents.slice(0,3).map((event) => (
        <EventBadge
          key={event.id}
          event={event}
          reminders={reminders.map((reminder) => reminder.event)}
          showDate={true}
        />
      ))}
    </div>
  );
}
