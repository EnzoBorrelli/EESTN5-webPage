import UserSelector from "@/components/dashboard/userSelector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default function dashboard() {
  return (
    <main className="w-full flex flex-col gap-4 items-center px-10 md:px-20 py-10">
      <article className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-xl text-center md:text-2xl uppercase underline">
          Bienvenid@ al panel de control
        </h1>
        <h2 className="font-semibold text-center text-lg">
          En este lugar podras editar informacion de profesores, asignar roles a
          usuarios y más
        </h2>
        <Tabs defaultValue="users" className="flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="users">Editar usuarios</TabsTrigger>
            <TabsTrigger value="teachers">Editar profesores</TabsTrigger>
          </TabsList>
          <TabsContent value="teachers">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="users">
            <UserSelector />
          </TabsContent>
        </Tabs>
      </article>
    </main>
  );
}
