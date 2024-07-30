import Image from "next/image";
import React from "react";
import { Profesor } from "@/types/profesor";
import ProfesorExtra from "./profesorExtra";

//interfaz que recibe los datos del objeto profesor, proveniente del array pasado en profesoresList.tsx

export default function ProfesorCard({
  profesores,
}: {
  profesores: Profesor[];
}) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 xl:px-32 gap-y-2 sm:gap-y-6 justify-items-center">
      {profesores.map((profesor) => (
        <div
          className="flex flex-col items-center justify-between p-2 rounded-lg bg-bg-200 w-44"
          key={profesor.name}
        >
          <>
            <Image
              className="rounded-md"
              src="/imgs/teacherDefault.jpg"
              alt={profesor.name}
              width={150}
              height={150}
            />
            <h3 className="text-lg font-semibold text-center text-text-200">
              {profesor.name}
            </h3>
            <h4 className="text-center text-md text-text-200">
              {profesor.career}
            </h4>
          </>
          <ProfesorExtra name={profesor.name} description={profesor.description} contact={profesor.contact}/>
        </div>
      ))}
    </section>
  );
}
