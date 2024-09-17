"use client";
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

import UserRoleManager from "./userRoleManager";
import { UserType } from "@/types/usertype";
import useSWR from "swr";

const fetcher = async (url: string): Promise<{ users: UserType[] }> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  return response.json();
};

export default function UserSelector() {
  const { data, error } = useSWR("/api/user", fetcher); // Use SWR to fetch events

  if (error) return <div>No se pudieron cargar los usuarios.</div>; // Handle loading and error states
  if (!data) return <div>Cargando usuarios...</div>;

  const { users } = data;
  return (
    <section className="flex flex-col items-center gap-4">
      <p className="my-2 text-center">
        Edita los roles de los usuarios. Brindale permisos de administrador a
        una persona... o quitaselos.
      </p>
      <ScrollArea className="w-full p-2 rounded shadow-md h-60 md:w-1/2 bg-bg-100 dark:bg-bg-600 ring-1 ring-bg-200 dark:ring-bg-500 ring-opacity-50 shadow-bg-200 dark:shadow-bg-500">
        {users
          .slice() //reordena los usuarios para colocar a los admin en la cima
          .sort((a, b) => {
            if (a.role === "admin" && b.role !== "admin") return -1;
            if (a.role !== "admin" && b.role === "admin") return 1;
            return 0;
          })
          .map((user) => (
            <div className="my-2" key={user.id}>
              <span className="flex items-center justify-between gap-2 px-2">
                <h2>{user.name}</h2>
                <div className="flex items-center gap-4">
                  <h3
                    className={`text-sm flex items-center justify-center rounded ${
                      user.role === "admin"
                        ? "dark:bg-amber-600 bg-amber-400 dark:ring-amber-400 ring-amber-600 shadow-amber-600 dark:shadow-amber-400"
                        : "bg-bg-200 dark:bg-bg-500 dark:ring-bg-400 dark:shadow-bg-400 ring-bg-300 shadow-bg-300"
                    } ring-1  ring-opacity-50 shadow-md  px-2 py-0`}
                  >
                    {user.role}
                  </h3>
                  <Dialog>
                    <DialogTrigger className="group">
                      <FaGear
                        className="text-text-600 dark:text-text-100 hover:text-blue-400 dark:hover:text-amber-500"
                        size={20}
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar rol de {user.name}</DialogTitle>
                        <DialogDescription>
                          No se preocupe, este campo podra ser editado
                          nuevamente más adelante
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
