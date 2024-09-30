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
          src="/imgs/teacherDefault.jpg"
          nombre="nombre apellido"
          cargo="director"
        />
      </section>
      <section className="flex flex-col items-center justify-center gap-8 my-4 md:flex-row">
        <AutoridadCard
          src="/imgs/teacherDefault.jpg"
          nombre="nombre apellido"
          cargo="vicedirector"
        />
        <AutoridadCard
           src="/imgs/teacherDefault.jpg"
          nombre="nombre apellido"
          cargo="vicedirectora"
        />
      </section>
      <section className="flex flex-col items-center justify-center gap-8 my-4 md:flex-row">
        <AutoridadCard
          src="/imgs/teacherDefault.jpg"
          nombre="nombre apellido"
          cargo="jefe de taller"
        />
        <AutoridadCard
         src="/imgs/teacherDefault.jpg"
          nombre="nombre apellido"
          cargo="jefa de secretaria"
        />
      </section>
      <section className="flex flex-col items-center justify-center gap-8 my-4 md:flex-row">
        <AutoridadCard
           src="/imgs/teacherDefault.jpg"
          nombre="nombre apellido"
          cargo="Electronica"
        />
        <AutoridadCard
           src="/imgs/teacherDefault.jpg"
          nombre="nombre apellido"
          cargo="Electromecanica"
        />
        <AutoridadCard
          src="/imgs/teacherDefault.jpg"
          nombre="nombre apellido"
          cargo="Automotor"
        />
      </section>
      <ToNextPage label="Conoce a nuestros profesores" href="/profesores"/>
    </main>
  );
}
