"use client";
import React, { useEffect, useState } from "react";
import ProfesorCard from "@/components/secciones/conocenos/profesores/profesorCard";
import { iTeacher } from "@/types/interfaces";
import { exampleTeachers } from "@/data/teachers";

export default function ProfesoresList() {
  // Define state and hooks before any conditional returns
  const [filtro, setFiltro] = useState<iTeacher[]>([]); // Explicitly type as Profesor[]
  const [especialidad, setEspecialidad] = useState("todos");

  // Use useEffect to update the state when profesores data is available
  useEffect(() => {
    if (exampleTeachers) {
      // Ensure data and teachers exist before updating the state
      setFiltro(exampleTeachers); // Populate filtro state when teachers are fetched
    }
  }, [exampleTeachers]);

  function filtroProfesores(especialidad: string) {
    if (exampleTeachers) {
      // Ensure exampleTeachers is available before filtering
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
    <>
      <div className="grid w-full grid-cols-2 gap-2 px-4 my-4 font-bold md:px-0 md:justify-center md:flex text-md sm:text-lg md:text-xl">
        <button
          onClick={() => filtroProfesores("todos")}
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-text-100 rounded-ss-xl md:rounded-s-xl hover:rounded-xl ${
            especialidad === "todos"
              ? "bg-blue-500 dark:bg-amber-500"
              : "bg-blue-700 dark:bg-amber-700"
          } `}
        >
          todos
        </button>
        <button
          onClick={() => filtroProfesores("electronica")}
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-text-100 rounded-se-xl md:rounded-se-none hover:rounded-xl ${
            especialidad === "electronica"
              ? "bg-blue-500 dark:bg-amber-500"
              : "bg-blue-700 dark:bg-amber-700"
          }`}
        >
          electronica
        </button>
        <button
          onClick={() => filtroProfesores("electromecanica")}
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-text-100 hover:rounded-xl ${
            especialidad === "electromecanica"
              ? "bg-blue-500 dark:bg-amber-500"
              : "bg-blue-700 dark:bg-amber-700"
          }`}
        >
          electromecanica
        </button>
        <button
          onClick={() => filtroProfesores("automotor")}
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-text-100 hover:rounded-xl ${
            especialidad === "automotor"
              ? "bg-blue-500 dark:bg-amber-500"
              : "bg-blue-700 dark:bg-amber-700"
          }`}
        >
          automotor
        </button>
        <button
          onClick={() => filtroProfesores("basico")}
          className={`px-4 py-2 col-span-2 transition-all duration-150 ease-in-out text-text-100 rounded-b-xl md:rounded-l-none md:rounded-e-xl hover:rounded-xl ${
            especialidad === "basico"
              ? "bg-blue-500 dark:bg-amber-500"
              : "bg-blue-700 dark:bg-amber-700"
          }`}
        >
          basico
        </button>
      </div>
      <ProfesorCard profesores={filtro} />
    </>
  );
}
