import ProfesoresList from "@/components/secciones/conocenos/profesores/profesoresList";
import React, { Suspense } from "react";

export default function Profesores() {
  
  return (
    <main className="py-4 sm:px-4 lg:px-10 size-full">
      <h2 className="my-4 text-2xl font-bold text-center uppercase">
        profesores
      </h2>
      <Suspense>
      <ProfesoresList/>
      </Suspense>
    </main>
  );
}
