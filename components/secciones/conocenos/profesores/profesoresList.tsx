"use client";
import React, { useState } from "react";
import ProfesorCards from "@/components/secciones/conocenos/profesores/profesorCard";
import {
  profesoresAutomotor,
  profesoresBasico,
  profesoresElectromecanica,
  profesoresElectronica,
  todosLosProfesores,
} from "./profesores";

export default function ProfesoresList() {
  const [profesores, setProfesores] = useState(todosLosProfesores);

  function comparadorAleatorio() {
    return Math.random() - 0.5;
  }

  function FiltrarProfesores(filtro: string) {
    switch (filtro) {
      case "electronica": {
        setProfesores(profesoresElectronica);
        break;
      }
      case "electromecanica": {
        setProfesores(profesoresElectromecanica);
        break;
      }
      case "automotor": {
        setProfesores(profesoresAutomotor);
        break;
      }
      case "basico": {
        setProfesores(profesoresBasico);
        break;
      }
      default: {
        setProfesores(todosLosProfesores);
        break;
      }
    }
    profesores.sort(comparadorAleatorio);
  }

  return (
    <>
      <div className="flex justify-center w-full gap-2 my-4 text-xl font-bold">
        <button className="px-4 py-2 text-bg-100 rounded-s-xl bg-accent-1" onClick={() => FiltrarProfesores("todos")}>todos</button>
        <button className="px-4 py-2 text-bg-100 bg-accent-1" onClick={() => FiltrarProfesores("electronica")}>
          electronica
        </button>
        <button className="px-4 py-2 text-bg-100 bg-accent-1" onClick={() => FiltrarProfesores("electromecanica")}>
          electromecanica
        </button>
        <button className="px-4 py-2 text-bg-100 bg-accent-1" onClick={() => FiltrarProfesores("automotor")}>
          automotor
        </button>
        <button className="px-4 py-2 text-bg-100 rounded-e-xl bg-accent-1" onClick={() => FiltrarProfesores("basico")}>basico</button>
      </div>
      <ProfesorCards profesores={profesores} />
    </>
  );
}
