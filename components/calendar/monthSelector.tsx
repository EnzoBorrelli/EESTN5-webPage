'use client'
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useCalendar } from "@/providers/calendarProvider";

// array de meses
const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export default function MonthSelector() {
  const { displayMonth, displayYear, handleNextMonth, handlePreviousMonth } =
    useCalendar();

  return (
    <div className="flex items-center justify-between gap-2 w-60 text-text-100">
      <button className="hover:animate-hop-left" onClick={handlePreviousMonth}>
        <FaAngleLeft size={24} />
      </button>
      <h3 className="text-xl font-bold">
        {months[displayMonth]} {displayYear}
      </h3>
      <button className="hover:animate-hop-right" onClick={handleNextMonth}>
        <FaAngleRight size={24} />
      </button>
    </div>
  );
}
