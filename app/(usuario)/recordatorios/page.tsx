import { options } from "@/app/api/auth/[...nextauth]/options";
import EventBadge from "@/components/calendar/eventBadge";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Recordatorios() {
  const session = await getServerSession(options);
  const user = await db.user.findUnique({
    where: { name: session?.user.name },
  });
  const events = await db.reminder.findMany({
    where: { userId: user?.id },
    include: { event: true },
  });
  return <div>{events.map((event)=>(<EventBadge key={event.id} event={event.event} userID={user?.id}/>))}</div>;
}
