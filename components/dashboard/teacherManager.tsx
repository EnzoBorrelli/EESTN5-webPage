"use client";
import React, { useEffect, useState } from "react";
import TeacherList from "./teacherList";
import { iTeacher } from "@/types/interfaces";
import { exampleTeachers } from "@/data/teachers";

export default function TeacherManager() {
  const [filtro, setFiltro] = useState<iTeacher[]>([]);
  const [especialidad, setEspecialidad] = useState("todos");

  // Use useEffect to update the state when teachers data is available
  useEffect(() => {
    if (exampleTeachers) {
      // Ensure data and teachers exist before updating the state
      setFiltro(exampleTeachers); // Populate filtro state when teachers are fetched
    }
  }, [exampleTeachers]);

  function filtroTeachers(especialidad: string) {
    if (exampleTeachers) {
      if (especialidad !== "todos") {
        setFiltro(
          exampleTeachers.filter(
            (teacher) => teacher.specialization === especialidad
          )
        );
      } else {
        setFiltro(exampleTeachers);
      }
      setEspecialidad(especialidad);
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
          onClick={() => filtroTeachers("basico")}
          className={`py-1 ransition-all duration-150 ease-in-out text-text-100 rounded-ss-xl hover:bg-blue-500 dark:hover:bg-amber-400 ${
            especialidad === "basico"
              ? "bg-blue-500 dark:bg-amber-400"
              : "bg-blue-700 dark:bg-amber-600"
          } `}
        >
          basico
        </button>
        <button
          onClick={() => filtroTeachers("electronica")}
          className={`py-1 transition-all duration-150 ease-in-out text-text-100 rounded-se-xl hover:bg-blue-500 dark:hover:bg-amber-400 ${
            especialidad === "electronica"
              ? "bg-blue-500 dark:bg-amber-400"
              : "bg-blue-700 dark:bg-amber-600"
          }`}
        >
          electronica
        </button>
        <button
          onClick={() => filtroTeachers("electromecanica")}
          className={`py-1 transition-all duration-150 ease-in-out text-text-100 hover:bg-blue-500 dark:hover:bg-amber-400 ${
            especialidad === "electromecanica"
              ? "bg-blue-500 dark:bg-amber-400"
              : "bg-blue-700 dark:bg-amber-600"
          }`}
        >
          electromecanica
        </button>
        <button
          onClick={() => filtroTeachers("automotor")}
          className={`py-1 transition-all duration-150 ease-in-out text-text-100 hover:bg-blue-500 dark:hover:bg-amber-400 ${
            especialidad === "automotor"
              ? "bg-blue-500 dark:bg-amber-400"
              : "bg-blue-700 dark:bg-amber-600"
          }`}
        >
          automotor
        </button>
        <button
          onClick={() => filtroTeachers("todos")}
          className={`py-1 col-span-2 transition-all duration-150 ease-in-out text-text-100 rounded-b-xl hover:bg-blue-500 dark:hover:bg-amber-400 ${
            especialidad === "todos"
              ? "bg-blue-500 dark:bg-amber-400"
              : "bg-blue-700 dark:bg-amber-600"
          }`}
        >
          todos
        </button>
      </div>
      <TeacherList teachers={filtro} />
    </section>
  );
}
