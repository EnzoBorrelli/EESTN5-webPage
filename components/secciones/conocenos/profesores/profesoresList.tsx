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
  const [btnActivo, setBtnActivo] = useState("todos");

  function comparadorAleatorio() {
    return Math.random() - 0.5;
  }

  function FiltrarProfesores(filtro: string) {
    switch (filtro) {
      case "electronica": {
        setProfesores(profesoresElectronica);
        setBtnActivo("electronica");
        break;
      }
      case "electromecanica": {
        setProfesores(profesoresElectromecanica);
        setBtnActivo("electromecanica");
        break;
      }
      case "automotor": {
        setProfesores(profesoresAutomotor);
        setBtnActivo("automotor");
        break;
      }
      case "basico": {
        setProfesores(profesoresBasico);
        setBtnActivo("basico");
        break;
      }
      default: {
        setProfesores(todosLosProfesores);
        setBtnActivo("todos");
        break;
      }
    }
    profesores.sort(comparadorAleatorio);
  }

  return (
    <>
      <div className="grid w-full grid-cols-2 gap-2 px-4 my-4 font-bold md:px-0 md:justify-center md:flex text-md sm:text-lg md:text-xl">
        <button
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-bg-100 rounded-ss-xl md:rounded-s-xl hover:rounded-xl ${
            btnActivo === "todos" ? "bg-accent-2" : "bg-accent-1"
          } `}
          onClick={() => FiltrarProfesores("todos")}
        >
          todos
        </button>
        <button
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-bg-100 rounded-se-xl md:rounded-se-none hover:rounded-xl ${
            btnActivo === "electronica" ? "bg-accent-2" : "bg-accent-1"
          }`}
          onClick={() => FiltrarProfesores("electronica")}
        >
          electronica
        </button>
        <button
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-bg-100 hover:rounded-xl ${
            btnActivo === "electromecanica" ? "bg-accent-2" : "bg-accent-1"
          }`}
          onClick={() => FiltrarProfesores("electromecanica")}
        >
          electromecanica
        </button>
        <button
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-bg-100 hover:rounded-xl ${
            btnActivo === "automotor" ? "bg-accent-2" : "bg-accent-1"
          }`}
          onClick={() => FiltrarProfesores("automotor")}
        >
          automotor
        </button>
        <button
          className={`px-4 py-2 col-span-2 transition-all duration-150 ease-in-out text-bg-100 rounded-b-xl md:rounded-l-none md:rounded-e-xl hover:rounded-xl ${
            btnActivo === "basico" ? "bg-accent-2" : "bg-accent-1"
          }`}
          onClick={() => FiltrarProfesores("basico")}
        >
          basico
        </button>
      </div>
      <ProfesorCards profesores={profesores} />
    </>
  );
}
