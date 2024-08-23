import React from "react";
import MonthDays from "./monthDays";
import { days } from "./calendarConst";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";



export default async function MonthView() {
const session = await getServerSession(options)
  const events = await db.event.findMany()
  const user = await db.user.findUnique({where:{name : session?.user.name}})
  return (
    <section className="flex flex-col gap-1 items-center md:px-6 md:py-2 size-full">
      <div className="grid grid-cols-7 grid-rows-1 gap-1">
        {days.map((day, index) => (
            <h4 className="md:px-4 text-sm md:text-lg px-1 text-center w-12 md:w-16 font-bold" key={index}>{day.substring(0, 3)}</h4>
        ))}
      </div>
      <MonthDays events={events} userID={user?.id}/>
    </section>
  );
}
