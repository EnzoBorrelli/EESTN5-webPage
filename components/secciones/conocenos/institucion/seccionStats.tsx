import Link from "next/link";
import React from "react";
import { FaRadio } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { PiNotepadFill } from "react-icons/pi";

export default function SeccionStats() {
  return (
    <section className="grid grid-cols-1 grid-rows-4 gap-4 mt-6 md:grid-cols-2 md:grid-rows-2 justify-items-center">
      {/*DIV: Especialidades */}
      <div className="p-2 shadow shadow-bg-300 dark:shadow-bg-400">
        <h3 className="flex items-center justify-center gap-1 text-lg font-semibold">
          <i className="text-amber-600">
            <IoStarSharp size={20} />
          </i>
          Especialidades
        </h3>
        <p className="text-center text-text-200">
          Ofrecemos tres especialidades para que los jóvenes puedan seleccionar:{" "}
          <Link
            className="font-semibold underline text-tone-200 hover:text-accent-1"
            href="/electronica"
          >
            Electrónica
          </Link>
          ,{" "}
          <Link
            className="font-semibold underline text-tone-200 hover:text-accent-1"
            href="/electromecanica"
          >
            Electromecanica
          </Link>{" "}
          y{" "}
          <Link
            className="font-semibold underline text-tone-200 hover:text-accent-1"
            href="/automotor"
          >
            Automotor
          </Link>
          .
        </p>
      </div>

      {/*DIV: Pasantias */}
      <div className="p-2 shadow shadow-bg-300 dark:shadow-bg-400">
        <h3 className="flex items-center justify-center gap-1 text-lg font-semibold">
          <i className="text-amber-600">
            <MdWorkHistory size={20} />
          </i>
          Pasantías
        </h3>
        <p className="text-center text-text-200">
          Contamos con emocionantes oportunidades de{" "}
          <Link
            className="font-semibold underline text-tone-200 hover:text-accent-1"
            href="/pasantias"
          >
            Pasantías
          </Link>{" "}
          para obtener experiencia práctica laboral en nuestra escuela
          secundaria técnica.
        </p>
      </div>

      {/*DIV: Cursos de formacion profesional */}
      <div className="p-2 shadow shadow-bg-300 dark:shadow-bg-400">
        <h3 className="flex items-center justify-center gap-1 text-lg font-semibold">
          <i className="text-amber-600">
            <PiNotepadFill size={20} />
          </i>
          Cursos de formación profesional
        </h3>
        <p className="text-center text-text-200">
          Brindamos{" "}
          <Link
            className="font-semibold underline text-tone-200 hover:text-accent-1"
            href="/recursos"
          >
            Cursos
          </Link>{" "}
          de formacion profesional para que sigas creciendo a nivel profesional
        </p>
      </div>

      {/*DIV: La Cinco Fm */}
      <div className="p-2 shadow shadow-bg-300 dark:shadow-bg-400">
        <h3 className="flex items-center justify-center gap-1 text-lg font-semibold">
          <i className="text-amber-600">
            <FaRadio size={20} />
          </i>
          Radio: LaCincoFm
        </h3>
        <p className="text-center text-text-400 dark:text-text-300">
          Conoce y escucha nuestra radio local{" "}
          <Link
            className="font-semibold underline text-tone-200 hover:text-accent-1"
            href="/lacincofm"
          >
            LaCincoFm
          </Link>{" "}
          donde la creatividad y conocimiento de nuestros estudiantes se encuentra en sintonia
        </p>
      </div>
    </section>
  );
}
