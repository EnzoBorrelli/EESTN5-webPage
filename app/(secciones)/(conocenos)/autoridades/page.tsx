import AutoridadCard from "@/components/secciones/conocenos/autoridades/autoridadCard";
import Link from "next/link";
import React from "react";
import { FaPersonWalkingArrowRight, FaUserTie } from "react-icons/fa6";

export default function Autoridades() {
  return (
    <main className="size-full">
      <h1 className="flex items-center justify-center w-full gap-2 my-8 text-lg font-bold uppercase md:text-2xl">
        Autoridades de la institución
        <FaUserTie size={24} />
      </h1>
      <section className="flex justify-center">
        <AutoridadCard
          src="/imgs/autoridades/director.jpg"
          nombre="Hector DeLuca"
          cargo="director"
        />
      </section>
      <section className="flex flex-col items-center justify-center gap-8 my-4 md:flex-row">
        <AutoridadCard
          src="/imgs/autoridades/vicedirector.jpg"
          nombre="Sandro Amiel"
          cargo="vicedirector"
        />
        <AutoridadCard
          src="/imgs/autoridades/vicedirectora.jpg"
          nombre="Clara Sack"
          cargo="vicedirectora"
        />
      </section>
      <section className="flex flex-col items-center justify-center gap-8 my-4 md:flex-row">
        <AutoridadCard
          src="/imgs/autoridades/jefeDeTaller.jpg"
          nombre="Nombre Apellido"
          cargo="jefe de taller"
        />
        <AutoridadCard
          src="/imgs/autoridades/jefaSecretaria.jpg"
          nombre="Nombre Apellido"
          cargo="jefa de secretaria"
        />
      </section>
      <section className="flex flex-col items-center justify-center gap-8 my-4 md:flex-row">
        <AutoridadCard
          src="/imgs/autoridades/jefeDeEspecialidad.jpg"
          nombre="Nombre Apellido"
          cargo="Electronica"
        />
        <AutoridadCard
          src="/imgs/autoridades/jefeDeEspecialidad.jpg"
          nombre="Nombre Apellido"
          cargo="Electromecanica"
        />
        <AutoridadCard
          src="/imgs/autoridades/jefeDeEspecialidad.jpg"
          nombre="Nombre Apellido"
          cargo="Automotor"
        />
      </section>
      <Link
        className="flex items-center justify-center gap-2 my-8 text-lg font-bold underline text-tone-200 md:text-xl group hover:text-accent-2"
        href="/profesores"
      >
        Conoce a nuestros profesores
        <i className="transition-transform duration-200 ease-in group-hover:translate-x-2">
          <FaPersonWalkingArrowRight size={30} />
        </i>
      </Link>
    </main>
  );
}
