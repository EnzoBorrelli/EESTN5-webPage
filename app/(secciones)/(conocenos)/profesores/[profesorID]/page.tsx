import {
  profesoresAutomotor,
  profesoresBasico,
  profesoresElectromecanica,
  profesoresElectronica,
} from "@/components/secciones/conocenos/profesores/profesores";
import Image from "next/image";
import React from "react";

interface Profesor {
  nombre: string;
  img: string;
  carrera: string;
  linkedin: string;
  descripcion: string;
  contacto: string;
}

export default function Profesor({
  params,
}: {
  params: { profesorID: string };
}) {
  const profesores = profesoresAutomotor.concat(
    profesoresBasico,
    profesoresElectromecanica,
    profesoresElectronica
  );
  const profesor = profesores.filter(
    (profesor) => profesor.nombre === params.profesorID.replace(/%20/g, " ")
  );
  return (
    <main className="px-10 py-4 size-full">
      {profesor.map((profe) => (
        <>
          <Image
            className="rounded-md"
            src={profe.img}
            alt={profe.nombre}
            width={150}
            height={150}
          />
          <h3 className="text-lg font-semibold text-center text-text-200">
            {profe.nombre}
          </h3>
          <h4 className="text-center text-md text-text-200">{profe.carrera}</h4>
        </>
      ))}
    </main>
  );
}
