import React from "react";
import EventBadge from "../calendar/eventBadge";
import dayjs from "dayjs";
import { exampleEvents } from "@/data/events";

export default async function UpcomingEvents() {
  const today = dayjs().startOf("day");
  const upcomingEvents = exampleEvents.filter(
    (event) =>
      dayjs(event.date).isSame(today) || dayjs(event.date).isAfter(today)
  );
  const sortedEvents = upcomingEvents.sort((a, b) =>
    dayjs(a.date).diff(dayjs(b.date))
  );
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {sortedEvents.slice(0, 3).map((event) => (
        <EventBadge key={event.id} event={event} showDate={true} />
      ))}
    </div>
  );
}
