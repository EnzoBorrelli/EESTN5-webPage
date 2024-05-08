import SeccionHistoria from "@/components/secciones/conocenos/institucion/seccionHistoria";
import SeccionStats from "@/components/secciones/conocenos/institucion/seccionStats";
import Link from "next/link";
import React from "react";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";

export default function Institucion() {
  return (
    <main className="px-4 py-4 size-full">
      <h1 className="flex items-center justify-center gap-2 my-2 text-2xl font-bold uppercase">
        Sobre la institución <MdSchool size={30} />
      </h1>
      <SeccionHistoria />
      <SeccionStats />
      <Link
        className="flex items-center justify-center gap-2 my-8 text-lg font-bold underline text-tone-200 md:text-xl group hover:text-accent-2"
        href="/autoridades"
      >
        Conoce a nuestras autoridades
        <i className="transition-transform duration-200 ease-in group-hover:translate-x-2">
          <FaPersonWalkingArrowRight size={30} />
        </i>
      </Link>
    </main>
  );
}
