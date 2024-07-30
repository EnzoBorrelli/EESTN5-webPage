"use client";
import React, { useState } from "react";
import ProfesorCard from "@/components/secciones/conocenos/profesores/profesorCard";
import { Profesor } from "@/types/profesor";

export default function ProfesoresList({
  profesores,
}: {
  profesores: Profesor[];
}) {
  const [filtro, setFiltro] = useState(profesores);
  const [especialidad, setEspecialidad] = useState('todos');

  function filtroProfesores(especialidad: string) {
    if (especialidad !== "todos") {
      setFiltro(
        profesores.filter(
          (profesor) => profesor.specialization === especialidad
        )
      );
      setEspecialidad(especialidad);
    } else {
      setFiltro(profesores);
      setEspecialidad('todos');
    }
  }
  return (
    <>
      <div className="grid w-full grid-cols-2 gap-2 px-4 my-4 font-bold md:px-0 md:justify-center md:flex text-md sm:text-lg md:text-xl">
        <button
        onClick={()=>filtroProfesores('todos')}
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-bg-100 rounded-ss-xl md:rounded-s-xl hover:rounded-xl ${
            especialidad === "todos" ? "bg-accent-2" : "bg-accent-1"
          } `}
        >
          todos
        </button>
        <button
        onClick={()=>filtroProfesores('electronica')}
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-bg-100 rounded-se-xl md:rounded-se-none hover:rounded-xl ${
            especialidad === "electronica" ? "bg-accent-2" : "bg-accent-1"
          }`}
        >
          electronica
        </button>
        <button
        onClick={()=>filtroProfesores('electromecanica')}
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-bg-100 hover:rounded-xl ${
            especialidad === "electromecanica" ? "bg-accent-2" : "bg-accent-1"
          }`}
        >
          electromecanica
        </button>
        <button
        onClick={()=>filtroProfesores('automotor')}
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-bg-100 hover:rounded-xl ${
            especialidad === "automotor" ? "bg-accent-2" : "bg-accent-1"
          }`}
        >
          automotor
        </button>
        <button
        onClick={()=>filtroProfesores('basico')}
          className={`px-4 py-2 col-span-2 transition-all duration-150 ease-in-out text-bg-100 rounded-b-xl md:rounded-l-none md:rounded-e-xl hover:rounded-xl ${
            especialidad === "basico" ? "bg-accent-2" : "bg-accent-1"
          }`}
        >
          basico
        </button>
      </div>
      <ProfesorCard profesores={filtro} />
    </>
  );
}
