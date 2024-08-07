import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import { FaGear } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import UserRoleManager from "./userRoleManager";

export default async function UserSelector() {
  const users = await db.user.findMany();
  return (
    <section className="flex flex-col items-center gap-4">
      <p className="my-2 text-center">
        Edita los roles de los usuarios. Brindale permisos de administrador a
        una persona... o quitaselos.
      </p>
      <ScrollArea className="w-full h-60 md:w-1/2 bg-bg-100 rounded ring-1 ring-bg-200 ring-opacity-50 shadow-md shadow-bg-200 p-2">
        {users
          .slice() //reordena los usuarios para colocar a los admin en la cima
          .sort((a, b) => {
            if (a.role === "admin" && b.role !== "admin") return -1;
            if (a.role !== "admin" && b.role === "admin") return 1;
            return 0;
          })
          .map((user) => (
            <div className="my-2" key={user.id}>
              <span className="flex justify-between items-center gap-2 px-2">
                <h2>{user.name}</h2>
                <div className="flex gap-4 items-center">
                  <h3
                    className={`text-sm flex items-center justify-center rounded ${
                      user.role === "admin"
                        ? "bg-accent-2 ring-accent-1 shadow-accent-1"
                        : "bg-bg-200 ring-bg-300 shadow-bg-300"
                    } ring-1  ring-opacity-50 shadow-md  px-2 py-0`}
                  >
                    {user.role}
                  </h3>
                  <Dialog>
                    <DialogTrigger className="group">
                      <FaGear
                        className="text-text-100 group-hover:text-accent-2"
                        size={20}
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar rol de {user.name}</DialogTitle>
                        <DialogDescription>
                          No se preocupe, este campo podra ser editado nuevamente más adelante
                        </DialogDescription>
                      </DialogHeader>
                      <UserRoleManager userID={user.id} />
                    </DialogContent>
                  </Dialog>
                </div>
              </span>
              <Separator />
            </div>
          ))}
      </ScrollArea>
    </section>
  );
}
