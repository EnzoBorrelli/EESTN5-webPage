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
      <p className="my-2 text-center">
        Edita los perfiles de profesores, o eliminalos de la lista.
      </p>
      <div className="grid w-full grid-cols-2 gap-1 px-4 font-bold">
        <button
        onClick={()=>filtroTeachers('basico')}
          className={`py-1 ransition-all duration-150 ease-in-out text-bg-100 rounded-ss-xl hover:rounded-xl ${
            especialidad === "basico" ? "bg-accent-2" : "bg-accent-1"
          } `}
        >
          basico
        </button>
        <button
        onClick={()=>filtroTeachers('electronica')}
          className={`py-1 transition-all duration-150 ease-in-out text-bg-100 rounded-se-xl hover:rounded-xl ${
            especialidad === "electronica" ? "bg-accent-2" : "bg-accent-1"
          }`}
        >
          electronica
        </button>
        <button
        onClick={()=>filtroTeachers('electromecanica')}
          className={`py-1 transition-all duration-150 ease-in-out text-bg-100 hover:rounded-xl ${
            especialidad === "electromecanica" ? "bg-accent-2" : "bg-accent-1"
          }`}
        >
          electromecanica
        </button>
        <button
        onClick={()=>filtroTeachers('automotor')}
          className={`py-1 transition-all duration-150 ease-in-out text-bg-100 hover:rounded-xl ${
            especialidad === "automotor" ? "bg-accent-2" : "bg-accent-1"
          }`}
        >
          automotor
        </button>
        <button
        onClick={()=>filtroTeachers('todos')}
          className={`py-1 col-span-2 transition-all duration-150 ease-in-out text-bg-100 rounded-b-xl hover:rounded-xl ${
            especialidad === "todos" ? "bg-accent-2" : "bg-accent-1"
          }`}
        >
          todos
        </button>
      </div>
      <TeacherList teachers={filtro} />
    </section>
  );
}
