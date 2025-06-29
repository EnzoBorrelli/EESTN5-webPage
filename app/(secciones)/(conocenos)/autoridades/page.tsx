import AutoridadCard from "@/components/secciones/conocenos/autoridades/autoridadCard";
import ToNextPage from "@/components/ui/linkButtons/toNextPage";
import React from "react";
import { FaUserTie } from "react-icons/fa6";

export default function Autoridades() {
  return (
    <main className="size-full">
      <h1 className="flex items-center justify-center w-full gap-2 my-8 text-lg font-bold uppercase md:text-2xl">
        Autoridades de la institución
        <FaUserTie size={24} />
      </h1>
      <section className="flex justify-center">
        <AutoridadCard
          src="/imgs/placeholders/maleDirective.jpg"
          nombre="Santiago Díaz"
          cargo="Director"
        />
      </section>
      <section className="flex flex-col items-center justify-center gap-8 my-4 md:flex-row">
        <AutoridadCard
          src="/imgs/placeholders/femaleDirective.jpg"
          nombre="Valentina Rojas"
          cargo="Vicedirectora"
        />
        <AutoridadCard
          src="/imgs/placeholders/femaleDirective.jpg"
          nombre="Lucía Fernández"
          cargo="Vicedirectora"
        />
      </section>
      <section className="flex flex-col items-center justify-center gap-8 my-4 md:flex-row">
        <AutoridadCard
          src="/imgs/placeholders/maleDirective.jpg"
          nombre="Tomás Álvarez"
          cargo="Jefe de taller"
        />
        <AutoridadCard
          src="/imgs/placeholders/femaleDirective.jpg"
          nombre="Camila Torres"
          cargo="Jefa de secretaría"
        />
      </section>
      <section className="flex flex-col items-center justify-center gap-8 my-4 md:flex-row">
        <AutoridadCard
          src="/imgs/placeholders/maleDirective.jpg"
          nombre="Ignacio Pérez"
          cargo="Electrónica"
        />
        <AutoridadCard
          src="/imgs/placeholders/maleDirective.jpg"
          nombre="Mateo González"
          cargo="Electromecánica"
        />
        <AutoridadCard
          src="/imgs/placeholders/maleDirective.jpg"
          nombre="Julián Herrera"
          cargo="Automotor"
        />
      </section>
      <ToNextPage label="Conoce a nuestros profesores" href="/profesores" />
    </main>
  );
}
