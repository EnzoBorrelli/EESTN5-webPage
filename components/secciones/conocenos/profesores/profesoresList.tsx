"use client";
import React, { Suspense } from "react";
import ProfesorCards from "@/components/secciones/conocenos/profesores/profesorCard";
import {
  profesoresAutomotor,
  profesoresBasico,
  profesoresElectromecanica,
  profesoresElectronica,
  todosLosProfesores,
} from "./profesores";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ProfesoresList() {
  const searchParams = useSearchParams();
  const profesores = searchParams.get("profesores");

  return (
    <>
    <Suspense>
      <div className="grid w-full grid-cols-2 gap-2 px-4 my-4 font-bold md:px-0 md:justify-center md:flex text-md sm:text-lg md:text-xl">
        <Link
        href={'/profesores?profesores=todos'}
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-bg-100 rounded-ss-xl md:rounded-s-xl hover:rounded-xl ${
            profesores === "todos" ? "bg-accent-2" : "bg-accent-1"
          } `}
          
        >
          todos
        </Link>
        <Link
        href={'/profesores?profesores=electronica'}
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-bg-100 rounded-se-xl md:rounded-se-none hover:rounded-xl ${
            profesores === "electronica" ? "bg-accent-2" : "bg-accent-1"
          }`}
          
        >
          electronica
        </Link>
        <Link
        href={'/profesores?profesores=electromecanica'}
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-bg-100 hover:rounded-xl ${
            profesores === "electromecanica" ? "bg-accent-2" : "bg-accent-1"
          }`}
          
        >
          electromecanica
        </Link>
        <Link
        href={'/profesores?profesores=automotor'}
          className={`px-4 py-2 transition-all duration-150 ease-in-out text-bg-100 hover:rounded-xl ${
            profesores === "automotor" ? "bg-accent-2" : "bg-accent-1"
          }`}
          
        >
          automotor
        </Link>
        <Link
        href={'/profesores?profesores=basico'}
          className={`px-4 py-2 col-span-2 transition-all duration-150 ease-in-out text-bg-100 rounded-b-xl md:rounded-l-none md:rounded-e-xl hover:rounded-xl ${
            profesores === "basico" ? "bg-accent-2" : "bg-accent-1"
          }`}
          
        >
          basico
        </Link>
      </div>
      {(() => {
        switch (profesores) {
          case "electronica": {
            return <ProfesorCards profesores={profesoresElectronica} />;
            break;
          }
          case "electromecanica": {
            return <ProfesorCards profesores={profesoresElectromecanica} />;
            break;
          }
          case "automotor": {
            return <ProfesorCards profesores={profesoresAutomotor} />;
            break;
          }
          case "basico": {
            return <ProfesorCards profesores={profesoresBasico} />;
            break;
          }
          default: {
            return <ProfesorCards profesores={todosLosProfesores} />;
            break;
          }
        }
      })()}
      </Suspense>
    </>
  );
}
