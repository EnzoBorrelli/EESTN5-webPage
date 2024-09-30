import ToNextPage from "@/components/ui/linkButtons/toNextPage";
import Image from "next/image";
import React from "react";
import { GrResources } from "react-icons/gr";

export default function Recursos() {
  return (
    <main className="p-4 size-full">
      <h1 className="flex items-center justify-center gap-2 text-2xl font-bold uppercase">
        Recursos para estudiantes
        <GrResources size={30} />
      </h1>
      <section className="p-2 my-4">
        <article className="flex flex-col gap-2 indent-2">
          <p className="text-center">
            En la Escuela Secundaria Técnica &quot;2 de Abril&quot;, Se les
            ofrece a los alumnos recursos para su cursada educativa. Los
            espacios de la escuela se destacan sobre el resto en este tema: La
            biblioteca y La Fotocopiadora.
          </p>
        </article>
        <hr className="my-4 border-t-2 border-bg-200 dark:border-bg-500" />
        <article className="flex flex-col gap-2 divide-y-2 indent-2 divide-bg-300 dark:divide-bg-500">
          <div className="flex flex-col items-center gap-2 mb-4">
            <p className="text-center">
              En la biblioteca se pueden encontrar decenas de obras literarias,
              libros educativos y material de actividades. Ademas, Ofrecemos
              distintos juegos de mesa para cuando los alumnos tengan tieempo de
              ocio, como UNO® o ajedrez.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Image
                src="/imgs/especialidades/automotor/placeholder.png"
                alt=""
                width={180}
                height={180}
              />
              <Image
                src="/imgs/especialidades/automotor/placeholder.png"
                alt=""
                width={180}
                height={180}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <p className="text-center">
              En la fotocopiadora se encuentran distintos materiales de
              actividad, guias y documentos para taller. Asi como tambien
              materiales para la parte practiva, como maderas, metales, hojas
              para imprimir, entre otros.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Image
                src="/imgs/especialidades/automotor/placeholder.png"
                alt=""
                width={180}
                height={180}
                className="object-contain"
              />
              <Image
                src="/imgs/especialidades/automotor/placeholder.png"
                alt=""
                width={180}
                height={180}
              />
            </div>
          </div>
        </article>
        <hr className="mt-4 border-t-2 border-bg-200 dark:border-bg-500" />
      </section>
      <ToNextPage label="Ver Calendario" href="/calendario" />
    </main>
  );
}
