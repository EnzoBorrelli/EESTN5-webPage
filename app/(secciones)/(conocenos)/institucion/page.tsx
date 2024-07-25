import SeccionHistoria from "@/components/secciones/conocenos/institucion/seccionHistoria";
import SeccionStats from "@/components/secciones/conocenos/institucion/seccionStats";
import ToNextPage from "@/components/ui/linkButtons/toNextPage";
import React from "react";
import { MdSchool } from "react-icons/md";

export default function Institucion() {
  return (
    <main className="px-4 py-4 size-full">
      <h1 className="flex items-center justify-center gap-2 my-2 text-2xl font-bold uppercase">
        Sobre la institución <MdSchool size={30} />
      </h1>
      <SeccionHistoria />
      <SeccionStats />
      <ToNextPage label="Conoce a nuestras autoridades" href="/autoridades" />
    </main>
  );
}
