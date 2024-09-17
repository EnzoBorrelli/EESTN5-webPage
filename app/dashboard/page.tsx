import TeacherManager from "@/components/dashboard/teacherManager";
import UserSelector from "@/components/dashboard/userSelector";
import TeacherForm from "@/components/form/TeacherForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import EventAdd from "@/components/dashboard/eventAdd";
import EventList from "@/components/dashboard/eventList";

export default async function dashboard() {
  return (
    <main className="flex flex-col items-center w-full gap-4 p-5 md:p-10 md:px-20">
      <article className="flex flex-col items-center w-full gap-4">
        <h1 className="text-xl font-bold text-center underline uppercase md:text-2xl">
          Bienvenid@ al panel de control
        </h1>
        <h2 className="font-semibold text-center text-md md:text-lg">
          En este lugar podras editar informacion de profesores, asignar roles a
          usuarios y más
        </h2>
        <Tabs defaultValue="users" className="flex flex-col items-center w-full">
          <TabsList className="flex flex-col h-full md:flex-row md:h-10">
            <TabsTrigger value="users">Editar usuarios</TabsTrigger>
            <TabsTrigger value="addTeachers">Agregar profesores</TabsTrigger>
            <TabsTrigger value="editTeachers">Editar profesores</TabsTrigger>
            <TabsTrigger value="addEvents">Agregar eventos</TabsTrigger>
            <TabsTrigger value="editEvents">Editar eventos</TabsTrigger>
          </TabsList>
          <TabsContent value="users">
            <UserSelector />
          </TabsContent>
          <TabsContent value="addTeachers">
            <TeacherForm />
          </TabsContent>
          <TabsContent value="editTeachers">
            <TeacherManager/>
          </TabsContent>
          <TabsContent value="addEvents">
            <EventAdd/>
          </TabsContent>
          <TabsContent value="editEvents">
            <EventList/>
          </TabsContent>
        </Tabs>
      </article>
    </main>
  );
}
