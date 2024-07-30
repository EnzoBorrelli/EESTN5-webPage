import ProfesoresList from "@/components/secciones/conocenos/profesores/profesoresList";
import ToNextPage from "@/components/ui/linkButtons/toNextPage";
import { db } from "@/lib/db";
import React, { Suspense } from "react";

export default async function Profesores() {
  const profesores = await db.teacher.findMany();

  return (
    <main className="py-4 sm:px-4 lg:px-10 size-full">
      <h2 className="my-4 text-2xl font-bold text-center uppercase">
        profesores
      </h2>
      <Suspense>
        <ProfesoresList profesores={profesores} />
      </Suspense>
      <ToNextPage label="Aprende sobre nuestras pasantias" href="/pasantias" />
    </main>
  );
}
