import { RedesSociales } from "@/components/navLinks";
import Link from "next/link";
import React from "react";
import { MdWorkHistory } from "react-icons/md";

export default function Pasantia() {
  return (
    <main className="size-full p-4">
      <h1 className="flex justify-center items-center text-2xl gap-2 uppercase font-bold">
        Sobre las pasantías
        <MdWorkHistory size={30} />
      </h1>
      <section className="mt-4 flex flex-col gap-4 px-2">
        <h2 className="text-center text-lg font-semibold text-text-200">
          ¿Que son las pasantías?
        </h2>
        <article className="indent-2 flex flex-col gap-2">
          <p>
            En nuestra institución, las <strong>Pasantias</strong>, formalmente
            conocidas como <strong>practicas profesionalizantes</strong>,
            representan una oportunidad única para nuestros estudiantes de
            séptimo año de combinar el aprendizaje teórico con la experiencia
            práctica en el mundo real. Estas pasantias se dividen en dos
            modalidades: internas y externas.
          </p>
          <p>
            Durante las practicas <strong>externas</strong>, nuestros
            estudiantes tienen la oportunidad de trabajar en empresas afiliadas,
            donde aplican sus conocimientos en un entorno laboral auténtico,
            recibiendo además una remuneración acordada con cada empresa.
          </p>
          <p>
            Por otro lado, las practicas <strong>internas</strong> se llevan a
            cabo bajo la supervisión del jefe de practicas de la espeialidad
            correspondiente, donde los estudiantes desarrollan un proycto que
            les permite certificar sus habilidades técnicas.
          </p>
          <p>
            Con un requisito de 200 horas de trabajo para su aprobación, estas
            pasantías representan un componente integral de nuestro programa
            educativo. El éxito en las pasantías es fundamental para la
            finalización satisfactoria del séptimo año y la obtención del título
            correspondiente, lo que refleja nuestro compromiso con la formación
            integral y el desarrollo profesional de nuestros estudiantes.
          </p>
        </article>
      </section>
      <hr className="my-4 border-t-2 border-bg-200" />
      <section className="mt-4 flex flex-col gap-4 px-2">
        <h2 className="text-center text-lg font-semibold text-text-200">
          Información importante
        </h2>
        <article className="indent-2 flex flex-col gap-2">
          <p>
            Para brindar Información mas detallada, contamos con una charla
            informativa dentro de la institución. Esta se desarolla antes del
            inicio de las practicas y se inivita a la familia a participar de la
            misma.
          </p>
          <p>
            Para estar al tanto de su realización, puede revisar el{" "}
            <Link
              className="font-semibold text-tone-200 underline hover:text-accent-1"
              href="/calendario"
            >
              Calendario
            </Link>{" "}
            y activar el recordatorio. Tambien puede encontrar información en la
            pestaña{" "}
            <Link
              className="font-semibold text-tone-200 underline hover:text-accent-1"
              href="/avisos"
            >
              Avisos
            </Link>{" "}
            o en nuestras redes sociales
          </p>
          <ul className="flex justify-center gap-2 px-4">
            {RedesSociales.map((social) => (
              <li
                className="p-1 text-2xl transition-all duration-200 ease-in bg-transparent rounded-md hover:text-bg-100 hover:bg-text-100"
                key={social.key}
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.symbol}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <hr className="my-4 border-t-2 border-bg-200" />
      <section className="mt-4 flex flex-col gap-4 px-2">
        <h2 className="text-center text-lg font-semibold text-text-200">
          Empresas afiliadas
        </h2>
        <article className="flex flex-col items-center gap-4">
          <p>
            Aqui encontrara una lista de las empresas afiliadas con la
            institución
          </p>
          <ul className="grid grid-cols-3 grid-rows-4 gap-4">
            <li>nombre de empresa</li>
            <li>nombre de empresa</li>
            <li>nombre de empresa</li>
            <li>nombre de empresa</li>
            <li>nombre de empresa</li>
            <li>nombre de empresa</li>
            <li>nombre de empresa</li>
            <li>nombre de empresa</li>
            <li>nombre de empresa</li>
            <li>nombre de empresa</li>
            <li>nombre de empresa</li>
            <li>nombre de empresa</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
