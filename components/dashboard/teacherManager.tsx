'use client'
import React, { useState } from "react";
import TeacherList from "./teacherList";
import { Profesor } from "@/types/profesor";

export default function TeacherManager({ teachers }: { teachers: Profesor[] }) {
    const [filtro, setFiltro] = useState(teachers);
  const [especialidad, setEspecialidad] = useState('todos');

  function filtroTeachers(especialidad: string) {
    if (especialidad !== "todos") {
      setFiltro(
        teachers.filter(
          (teacher) => teacher.specialization === especialidad
        )
      );
      setEspecialidad(especialidad);
    } else {
      setFiltro(teachers);
      setEspecialidad('todos');
    }
  }
  return (
    <section className="flex flex-col items-center gap-4">
      <p className="max-w-md my-2 text-center">
        Edita los perfiles de profesores, o eliminalos de la lista.
        {" (refresecar la pagina si no percibe los cambios aplicados)"}
      </p>
      <div className="grid w-full grid-cols-2 gap-1 px-4 font-bold">
        <button
        onClick={()=>filtroTeachers('basico')}
          className={`py-1 ransition-all duration-150 ease-in-out text-text-100 rounded-ss-xl hover:bg-blue-500 dark:hover:bg-amber-400 ${
            especialidad === "basico" ? "bg-blue-500 dark:bg-amber-400" : "bg-blue-700 dark:bg-amber-600"
          } `}
        >
          basico
        </button>
        <button
        onClick={()=>filtroTeachers('electronica')}
          className={`py-1 transition-all duration-150 ease-in-out text-text-100 rounded-se-xl hover:bg-blue-500 dark:hover:bg-amber-400 ${
            especialidad === "electronica" ? "bg-blue-500 dark:bg-amber-400" : "bg-blue-700 dark:bg-amber-600"
          }`}
        >
          electronica
        </button>
        <button
        onClick={()=>filtroTeachers('electromecanica')}
          className={`py-1 transition-all duration-150 ease-in-out text-text-100 hover:bg-blue-500 dark:hover:bg-amber-400 ${
            especialidad === "electromecanica" ? "bg-blue-500 dark:bg-amber-400" : "bg-blue-700 dark:bg-amber-600"
          }`}
        >
          electromecanica
        </button>
        <button
        onClick={()=>filtroTeachers('automotor')}
          className={`py-1 transition-all duration-150 ease-in-out text-text-100 hover:bg-blue-500 dark:hover:bg-amber-400 ${
            especialidad === "automotor" ? "bg-blue-500 dark:bg-amber-400" : "bg-blue-700 dark:bg-amber-600"
          }`}
        >
          automotor
        </button>
        <button
        onClick={()=>filtroTeachers('todos')}
          className={`py-1 col-span-2 transition-all duration-150 ease-in-out text-text-100 rounded-b-xl hover:bg-blue-500 dark:hover:bg-amber-400 ${
            especialidad === "todos" ? "bg-blue-500 dark:bg-amber-400" : "bg-blue-700 dark:bg-amber-600"
          }`}
        >
          todos
        </button>
      </div>
      <TeacherList teachers={filtro} />
    </section>
  );
}
