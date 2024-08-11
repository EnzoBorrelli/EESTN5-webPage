import React from "react";
import MonthDays from "./monthDays";
import { days } from "./calendarConst";



export default function MonthView() {
  return (
    <section className="flex flex-col gap-1 items-center md:px-6 md:py-2 size-full">
      <div className="grid grid-cols-7 grid-rows-1 gap-1">
        {days.map((day, index) => (
            <h4 className="md:px-4 text-sm md:text-lg px-1 text-center w-12 md:w-16 font-bold" key={index}>{day.substring(0, 3)}</h4>
        ))}
      </div>
      <MonthDays/>
    </section>
  );
}
