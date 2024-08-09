import React from "react";
import { Separator } from "../ui/separator";
import dayjs from "dayjs";

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
  const test1 = dayjs().date(); //dia del mes
  const test2 = dayjs().day(); // dia de la semana

  console.log(`${test1} | ${test2}`);
  return (
    <section className="flex flex-col items-center px-6 py-2 size-full">
      <div className="flex justify-center w-full gap-2 rounded-t">
        {days.map((day, index) => (
          <span className="flex gap-2" key={index}>
            <h4 className="px-4 py-2 font-bold">{day.substring(0, 3)}</h4>
            <Separator
              className={`${index === 6 ? "hidden" : ""}`}
              orientation="vertical"
            />
          </span>
        ))}
      </div>
    </section>
  );
}
