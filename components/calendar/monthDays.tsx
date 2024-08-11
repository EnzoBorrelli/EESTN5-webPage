"use client";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useCalendar } from "@/providers/calendarProvider";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdAddAlert } from "react-icons/md";
import { months } from "./calendarConst";

export default function MonthDays() {
  const { displayMonth, displayYear } = useCalendar(); // se traen el mes y año del calendarProvider
  const [daysInDisplay, setDaysInDisplay] = useState<number[]>([]); // se guardan los dias a mostrar en el calendario
  const firstDayOfMonth = dayjs(`${displayYear}-${displayMonth + 1}`).day(); // se guarda un numero que equivale al dia de la semana que fue primero de ese mes

  const daysInMonth = dayjs(`${displayYear}-${displayMonth + 1}`).daysInMonth(); // se guarda la cantidad de dias que tiene el mes

  const test = ["2024-8-11","2024-8-24","2024-8-1","2024-8-18","2024-8-14"];

  useEffect(() => {
    const daysInPrevMonth = dayjs(
      `${displayYear}-${displayMonth}`
    ).daysInMonth(); // se guarda la cantidad de dias que tiene el mes anterior

    const daysFromPrevMonth = firstDayOfMonth === 0 ? 0 : firstDayOfMonth;
    const lastDaysPrevMonth = Array.from(
      { length: daysFromPrevMonth },
      (_, i) => daysInPrevMonth - daysFromPrevMonth + i + 1
    );

    // Calcular los días del mes actual
    const days = [
      ...lastDaysPrevMonth,
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];

    const totalDays = days.length; //se guarda la cantidad de dias que tiene el array
    const extraDays = (7 - (totalDays % 7)) % 7; // '%' significa modulo, que devuelve el resto de una division
    /*La línea completa const extraDays = (7 - (totalDays % 7)) % 7; 
  calcula el número de días adicionales necesarios para que el número total de días 
  en la vista de calendario sea un múltiplo exacto de 7, 
  lo que garantiza que la vista del calendario se vea completa y bien estructurada, 
  con cada semana teniendo exactamente 7 días.*/

    // Calcular los días del mes siguiente a mostrar
    const daysFromNextMonth = Array.from(
      { length: extraDays },
      (_, i) => i + 1
    );

    // Completar el calendario
    const completeCalendar = [...days, ...daysFromNextMonth];

    setDaysInDisplay(completeCalendar);
  }, [displayMonth, displayYear]);

  return (
    <div className="grid grid-cols-7 grid-rows-1 gap-1">
      {daysInDisplay.map((day, index) => (
        <Sheet key={index}>
          <SheetTrigger
            className={`${
              test.includes(`${displayYear}-${displayMonth + 1}-${day}`)
                ? "bg-accent-2 rounded-lg text-bg-100 hover:scale-125 transition-transform duration-150 ease-in flex items-center justify-center gap-1"
                : "md:px-4"
            } w-12 md:w-16`}
            disabled={!test.includes(`${displayYear}-${displayMonth + 1}-${day}`)}
          >
            <h4
              className={` text-center text-sm md:text-lg font-bold ${
                  day > 1 && index < firstDayOfMonth ? "text-bg-300" : ""
                } ${
                    day < daysInMonth && index > firstDayOfMonth + daysInMonth - 1
                    ? "text-bg-300"
                    : ""
                } `}
            >
              {day === 0 ? "" : day}
            </h4>
                <i className={`${
                   test.includes(`${displayYear}-${displayMonth + 1}-${day}`)?'':'hidden'}`}> <MdAddAlert /></i>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{`${day} de ${months[displayMonth]} de ${displayYear}`}</SheetTitle>
              <SheetDescription>
                aqui irian los eventos, si hubieran
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
