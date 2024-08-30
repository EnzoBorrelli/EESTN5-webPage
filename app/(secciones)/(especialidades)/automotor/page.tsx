import ToNextPage from "@/components/ui/linkButtons/toNextPage";
import Image from "next/image";
import React from "react";
import { GiMechanicalArm } from "react-icons/gi";

export default function Automotor() {
  return (
    <main className="p-4 size-full">
      <h1 className="flex items-center justify-center gap-2 text-2xl font-bold uppercase">
        Automotor
        <GiMechanicalArm size={30} />
      </h1>
      <section className="p-2 my-4">
        <article className="flex flex-col gap-2 indent-2">
          <p className="text-justify">
            La especialidad de Electrónica en la Escuela Secundaria Técnica
            &quot;2 de Abril&quot;, brinda a los estudiantes una formación
            sólida y práctica en el ámbito de los sistemas electrónicos. Desde
            el cuarto hasta el séptimo año, los alumnos adquieren conocimientos
            esenciales en el diseño, construcción y mantenimiento de circuitos
            eléctricos y dispositivos electrónicos, preparándolos para los
            desafíos de la tecnología moderna.
          </p>
        </article>
        <hr className="my-4 border-t-2 border-bg-200 dark:border-bg-500" />
        <article className="flex flex-col gap-2 divide-y-2 indent-2 divide-bg-300 dark:divide-bg-500">
          <div className="flex flex-col items-center gap-2 mb-4">
            <p className="text-justify">
              Durante el ciclo de Electrónica, los estudiantes exploran{" "}
              <strong>Sistemas Digitales</strong> y{" "}
              <strong>Electrónica Analógica</strong>. En Sistemas Digitales, se
              introducen a la lógica digital, aprendiendo a diseñar y analizar
              circuitos digitales que procesan información en forma de bits. Por
              su parte, en Electrónica Analógica, se centran en el estudio de
              circuitos y dispositivos que operan con señales continuas, como
              amplificadores y filtros.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Image
                src="/imgs/especialidades/electronica/analogia.jpg"
                alt=""
                width={320}
                height={180}
              />
              <Image
                src="/imgs/especialidades/electronica/circuito.jpg"
                alt=""
                width={320}
                height={180}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <p className="text-justify">
              En el ciclo de Electrónica, los estudiantes se enfocan en
              <strong>Microcontroladores</strong> y{" "}
              <strong>Sistemas de Comunicación</strong>. En la materia de
              Microcontroladores, aprenden a programar y utilizar estos
              dispositivos en el desarrollo de proyectos electrónicos,
              explorando la automatización y control de sistemas. Por otro lado,
              en Sistemas de Comunicación, estudian los principios fundamentales
              de la transmisión de datos y la interconexión de dispositivos
              electrónicos.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Image
                src="/imgs/especialidades/electronica/arduino.jpg"
                alt=""
                width={320}
                height={180}
                className="object-contain"
              />
              <Image
                src="/imgs/especialidades/electronica/comu.jpg"
                alt=""
                width={320}
                height={180}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4 py-4">
            <p className="text-center md:text-justify md:w-1/2 lg:w-1/3">
              Las pasantías o prácticas profesionalizantes en la especialidad de
              Electrónica ofrecen a los estudiantes la oportunidad de aplicar
              sus conocimientos en un entorno laboral real. Durante estas
              experiencias, los alumnos participan en proyectos que involucran
              el diseño, montaje y mantenimiento de circuitos y sistemas
              electrónicos.
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
      <ToNextPage label="Ver Electromecanica" href="/electromecanica" />
    </main>
  );
}
