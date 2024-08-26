import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { FaGear } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { db } from "@/lib/db";
import EventUpdate from "./eventUpdate";
import EventDelete from "./eventDelete";

export default async function EventList() {
  const Events = await db.event.findMany()
  return (
    <section className="flex flex-col items-center gap-4">
      <p className="max-w-md my-2 text-center">
        Edita Eventos, o eliminalos del calendario.
        {" (refresecar la pagina si no perciben los cambios aplicados)"}
      </p>
    <ScrollArea className="w-full p-2 rounded shadow-md h-60 bg-bg-100 dark:bg-bg-600 dark:ring-bg-500 ring-1 ring-bg-200 ring-opacity-50 shadow-bg-200 dark:shadow-bg-500">
      {Events.map((event) => (
        <div className="my-2" key={event.id}>
          <span className="flex items-center justify-between gap-2 px-2">
            <h2>{event.title}</h2>
            <div className="flex items-center gap-4">
              <h3
                className="flex items-center tracking-widest justify-center px-2 py-0 text-sm rounded shadow-md dark:bg-bg-500 bg-bg-200 dark:ring-bg-400 ring-bg-300 shadow-bg-300 dark:shadow-bg-400 ring-1 ring-opacity-50"
              >
                {event.date.replace(/-/g,`/`)}
              </h3>
              <Dialog>
                <DialogTrigger className="group">
                  <FaGear
                    className="text-text-600 dark:text-text-100 group-hover:text-blue-400 dark:group-hover:text-amber-500"
                    size={20}
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Editar evento: {event.title}</DialogTitle>
                    <DialogDescription>
                      Estos campos podran ser editados en cualquier momento
                    </DialogDescription>
                  </DialogHeader>
                  <EventUpdate event={event}/>
                </DialogContent>
              </Dialog>
              <EventDelete eventID={event.id}/>
            </div>
          </span>
          <Separator />
        </div>
      ))}
    </ScrollArea>
    </section>
  );
}