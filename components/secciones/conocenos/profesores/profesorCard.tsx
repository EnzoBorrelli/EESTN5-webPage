import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaCirclePlus } from "react-icons/fa6";


interface Profesor {
  nombre: string;
  img: string;
  carrera: string;
  linkedin: string;
  descripcion: string;
  contacto: string;
}
//interfaz que recibe los datos del objeto profesor, proveniente del array pasado en profesoresList.tsx

export default function ProfesorCards({
  profesores,
}: {
  profesores: Profesor[];
}) {
  
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 xl:px-32 gap-y-2 sm:gap-y-6 justify-items-center">
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
  );
}
