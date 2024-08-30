import ToNextPage from "@/components/ui/linkButtons/toNextPage";
import Image from "next/image";
import React from "react";
import { GiBigGear } from "react-icons/gi";

export default function Electromecanica() {
  return (
    <main className="p-4 size-full">
      <h1 className="flex items-center justify-center gap-2 text-2xl font-bold uppercase">
        Electromecanica
        <GiBigGear className="animate-spin-slow" size={30} />
      </h1>
      <section className="p-2 my-4">
        <article className="flex flex-col gap-2 indent-2">
          <p className="text-justify">
            La especialidad de Electromecánica en la Escuela Secundaria Técnica
            &quot;2 de Abril&quot;, ofrece una formación integral desde el
            cuarto hasta el séptimo año. Este programa combina teoría y
            práctica, brindando a los estudiantes las habilidades necesarias en
            el diseño, mantenimiento y reparación de sistemas eléctricos y
            mecánicos. Así, se preparan para enfrentar los desafíos del mundo
            tecnológico actual.
          </p>
        </article>
        <hr className="my-4 border-t-2 border-bg-200 dark:border-bg-500" />
        <article className="flex flex-col gap-2 divide-y-2 indent-2 divide-bg-300 dark:divide-bg-500">
          <div className="flex flex-col items-center gap-2 mb-4">
            <p className="text-justify">
              Durante el ciclo de Electromecánica, los estudiantes se
              familiarizan con conceptos básicos en <strong>Mecánica</strong> y{" "}
              <strong>Máquinas Eléctricas</strong>. Estas materias les permiten
              adquirir habilidades fundamentales en el diseño, mantenimiento y
              reparación de sistemas eléctricos y mecánicos, así como en la
              representación gráfica de proyectos y diseños.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Image
                src="/imgs/especialidades/electromecanica/maquina.jpg"
                alt=""
                width={320}
                height={180}
              />
              <Image
                src="/imgs/especialidades/electromecanica/mecanica.jpg"
                alt=""
                width={320}
                height={180}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <p className="text-justify">
              En el ciclo de Electromecánica, los estudiantes profundizan en
              <strong> Automatización</strong> y <strong>Control</strong>, donde
              aprenden a diseñar y gestionar sistemas automáticos que optimizan
              procesos industriales. A través de esta materia, adquieren
              habilidades en la programación de controladores y en la
              implementación de sistemas de monitoreo.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Image
                src="/imgs/especialidades/electromecanica/automatizacion.jpg"
                alt=""
                width={320}
                height={180}
              />
              <Image
                src="/imgs/especialidades/electromecanica/control.jpg"
                alt=""
                width={320}
                height={180}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4 py-4">
            <p className="text-center md:text-justify md:w-1/2 lg:w-1/3">
              Las pasantías o prácticas profesionalizantes en la especialidad de
              Electromecánica son una oportunidad invaluable para que los
              estudiantes apliquen los conocimientos adquiridos en el aula en
              entornos reales de trabajo. Durante estas experiencias, los
              alumnos trabajan en proyectos que involucran el diseño,
              mantenimiento y reparación de sistemas eléctricos y mecánicos.
            </p>
            <Image
              src="/imgs/especialidades/basico/tallerElectronica.jpg"
              alt=""
              width={320}
              height={180}
            />
          </div>
        </article>
        <hr className="mt-4 border-t-2 border-bg-200 dark:border-bg-500" />
      </section>
      <ToNextPage label="Ver Automotor" href="/automotor" />
    </main>
  );
}
