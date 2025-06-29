import EventBadge from "@/components/calendar/eventBadge";
import NotificationHeader from "@/components/calendar/notificationHeader";
import { exampleEvents } from "@/data/events";
import React from "react";

export default async function Recordatorios() {
  return (
    <main className="flex flex-col items-center w-full gap-4 p-5 md:p-10 md:px-20">
      <NotificationHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
      {exampleEvents.splice(0,3).map((event) => (
        <EventBadge
          key={event.id}
          event={event}
          showDate={true}
        /> 
      ))}
      </div>
    </main>
  );
}
