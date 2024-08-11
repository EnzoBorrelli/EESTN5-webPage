import React from "react";
import { Separator } from "../ui/separator"
import MonthDays from "./monthDays";

const days = [
  "DOMINGO",
  "LUNES",
  "MARTES",
  "MIERCOLES",
  "JUEVES",
  "VIERNES",
  "SABADO",
];

export default function MonthView() {
  return (
    <section className="flex flex-col gap-1 items-center px-6 py-2 size-full">
      <div className="grid grid-cols-7 grid-rows-1 gap-1 divide-x-2 divide-bg-200 rounded-t">
        {days.map((day, index) => (
            <h4 className="px-4 text-center w-16 font-bold" key={index}>{day.substring(0, 3)}</h4>
        ))}
      </div>
      <MonthDays/>
    </section>
  );
}
