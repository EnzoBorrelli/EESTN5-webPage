import Calendar from "@/components/calendar/calendar";
import React from "react";
/*
TODO: a date picker
TODO: a time picker
TODO: update forms
? might need to simplify the forms


*/
export default async function Calendario() {
  return (
    <main className="flex flex-col items-center w-full gap-4 p-5 md:p-10 md:px-20">
      <Calendar />
    </main>
  );
}
