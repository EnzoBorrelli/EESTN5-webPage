import Calendar from "@/components/calendar/calendar";
import EventAdd from "@/components/calendar/eventAdd";
import React from "react";

export default function Calendario() {
  return (
    <main className="flex flex-col items-center w-full gap-4 p-5 md:p-10 md:px-20">
      <Calendar />
      <EventAdd/>
    </main>
  );
}
