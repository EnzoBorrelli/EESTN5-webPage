import {
  profesoresAutomotor,
  profesoresBasico,
  profesoresElectromecanica,
  profesoresElectronica,
} from "@/components/secciones/conocenos/profesores/profesores";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

export default function Profesores() {
  const profesores = profesoresAutomotor.concat(
    profesoresBasico,
    profesoresElectromecanica,
    profesoresElectronica
  );
  function comparadorAleatorio() {
    return Math.random() - 0.5;
  }
  profesores.sort(comparadorAleatorio);
  return (
    <main className="px-10 py-4 size-full">
      <h2 className="my-4 text-2xl font-bold text-center uppercase">
        profesores
      </h2>
      <section className="grid grid-cols-5 px-40 gap-y-6 justify-items-center">
        {profesores.map((profesor) => (
          <div
            className="flex flex-col items-center justify-between p-2 rounded-lg bg-bg-200 w-44"
            key={profesor.nombre}
          >
            <>
              <Image
                className="rounded-md"
                src={profesor.img}
                alt={profesor.nombre}
                width={150}
                height={150}
              />
              <h3 className="text-lg font-semibold text-center text-text-200">
                {profesor.nombre}
              </h3>
              <h4 className="text-center text-md text-text-200">
                {profesor.carrera}
              </h4>
            </>
            <Link
              href={`/profesores/${profesor.nombre}`}
              className="flex items-center justify-center gap-2 px-2 mt-6 rounded-md bg-bg-300 hover:bg-accent-2"
            >
              saber más
              <FaCirclePlus />
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
