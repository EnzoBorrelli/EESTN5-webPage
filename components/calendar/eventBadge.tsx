import React from "react";
import { LuCalendarClock } from "react-icons/lu";
import { Event } from "@/types/event";
import EventReminder from "./eventReminder";

export default function EventBadge({
  event,
  userID,
}: {
  event: Event;
  userID: string | undefined;
}) {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-1 rounded-md bg-bg-200 dark:bg-bg-500 ring-1 dark:ring-bg-400 ring-bg-300">
      <h3 className="text-lg font-bold">{event.title}</h3>
      <div className="flex items-center justify-between w-full gap-6 px-6">
        <span className="flex items-center gap-1">
          <LuCalendarClock size={22} />
          <h4>
            {event.startTime.slice(0, 2) + ":" + event.startTime.slice(2)} -{" "}
            {event.finishTime.slice(0, 2) + ":" + event.finishTime.slice(2)}
          </h4>
        </span>
        <EventReminder eventId={event.id} userId={userID} />
      </div>
    </div>
  );
}
