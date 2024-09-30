import ToNextPage from "@/components/ui/linkButtons/toNextPage";
import Image from "next/image";
import React from "react";
import { BiSolidCarMechanic } from "react-icons/bi";

export default function Automotor() {
  return (
    <main className="p-4 size-full">
      <h1 className="flex items-center justify-center gap-2 text-2xl font-bold uppercase">
        Automotor
        <BiSolidCarMechanic size={30} />
      </h1>
      <section className="p-2 my-4">
        <article className="flex flex-col gap-2 indent-2">
          <p className="text-justify">
            La especialidad de Automotor en la Escuela Secundaria Técnica
            &quot;2 de Abril&quot;, ofrece a los estudiantes una formación
            integral en el ámbito de la mecánica automotriz. Desde el cuarto
            hasta el séptimo año, los alumnos adquieren conocimientos teóricos y
            prácticos sobre el funcionamiento, mantenimiento y reparación de
            vehículos, preparándolos para enfrentar los desafíos del sector
            automotriz.
          </p>
        </article>
        <hr className="my-4 border-t-2 border-bg-200 dark:border-bg-500" />
        <article className="flex flex-col gap-2 divide-y-2 indent-2 divide-bg-300 dark:divide-bg-500">
          <div className="flex flex-col items-center gap-2 mb-4">
            <p className="text-justify">
              Durante el ciclo de Automotor, los estudiantes se enfocan en
              <strong> Mecánica de Fluidos</strong> y{" "}
              <strong>Sistemas de Transmisión</strong>. En Mecánica de Fluidos,
              aprenden sobre el comportamiento de los fluidos y su aplicación en
              sistemas automotrices. Por otro lado, en Sistemas de Transmisión,
              se centran en el análisis y mantenimiento de transmisiones y
              trenes motrices, adquiriendo habilidades prácticas que les
              permiten diagnosticar y reparar fallas en estos componentes
              críticos de los vehículos.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Image
                src="/imgs/especialidades/automotor/fluido.jpg"
                alt=""
                width={320}
                height={180}
              />
              <Image
                src="/imgs/especialidades/automotor/transmision.jpg"
                alt=""
                width={320}
                height={180}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <p className="text-justify">
              En el ciclo de Automotor, los estudiantes profundizan en
              <strong> Electrónica Automotriz</strong> y{" "}
              <strong>Motor de Combustión Interna</strong>. En Electrónica
              Automotriz, adquieren conocimientos sobre los sistemas
              electrónicos que controlan diversas funciones del vehículo, desde
              la gestión del motor hasta la seguridad y el confort. Por otro
              lado, en Motor de Combustión Interna, los alumnos estudian el
              funcionamiento y la reparación de motores, explorando su diseño,
              ciclo de trabajo y sistemas de inyección.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Image
                src="/imgs/especialidades/automotor/motor.jpg"
                alt=""
                width={320}
                height={180}
                className="object-contain"
              />
              <Image
                src="/imgs/especialidades/automotor/auto.jpg"
                alt=""
                width={320}
                height={180}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4 py-4">
            <p className="text-center md:text-justify md:w-1/2 lg:w-1/3">
              Las prácticas profesionalizantes en la especialidad de Automotor
              brindan a los estudiantes la oportunidad de aplicar sus
              conocimientos en un entorno laboral real. Durante estas
              experiencias, los alumnos participan en actividades de
              mantenimiento, reparación y diagnóstico de vehículos en talleres y
              centros de servicio. Estas prácticas les permiten desarrollar
              habilidades técnicas y trabajar en equipo, además de fomentar la
              resolución de problemas y la adaptabilidad ante situaciones
              diversas.
            </p>
            <Image
              src="/imgs/especialidades/basico/tallerAutomotor.jpg"
              alt=""
              width={320}
              height={180}
            />
          </div>
        </article>
        <hr className="mt-4 border-t-2 border-bg-200 dark:border-bg-500" />
      </section>
      <ToNextPage label="Ver Cursos" href="/cursos" />
    </main>
  );
}
