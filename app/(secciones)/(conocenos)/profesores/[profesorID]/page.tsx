import {
  profesoresAutomotor,
  profesoresBasico,
  profesoresElectromecanica,
  profesoresElectronica,
} from "@/components/secciones/conocenos/profesores/profesores";
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { IoArrowRedo } from "react-icons/io5";
import { MdMail } from "react-icons/md";

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
    <main className="px-4 md:px-10 py-4 size-full">
      <section className="size-full flex justify-center">
        {profesor.map((profe) => (
          <article
            className="grid gap-4 overflow-hidden shadow-md shadow-bg-300 w-full md:w-2/3 divide-y-2 px-4 lg:px-8 divide-bg-200 grid-rows-2 grid-cols-1 justify-items-center"
            key={profe.nombre}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center pt-4 justify-center">
              <span className="flex flex-col ring-2 ring-bg-300 bg-bg-200 rounded-md p-2 md:p-1 items-center">
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
                <h4 className="text-center text-md text-text-200">
                  {profe.carrera}
                </h4>
              </span>
              <p className="md:w-2/3 text-center md:text-left">{profe.descripcion}</p>
            </div>
            <div className="w-full flex flex-col gap-2 items-start pt-4">
              <h3 className="text-center w-full text-lg md:text-xl font-bold">INFORMACIÓN DE CONTACTO</h3>
              <span>
                <h4 className="flex items-center gap-1">
                  <FaLinkedin size={24} />:
                {profe.linkedin!=='nulo'?
                  <a
                    className="flex items-center gap-1 group font-bold text-tone-200"
                    href={profe.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profe.nombre}{" "}
                    <i className="group-hover:translate-x-2 transition-transform duration-150 ease-in">
                      <IoArrowRedo />
                    </i>
                  </a>
                  :"No posee o no se pudo ubicar"}
                </h4>
                <h4 className="flex w-full items-center gap-1">
                  <MdMail size={24} />:
                  {profe.contacto!=='nulo'?
                  <a
                    className="flex items-center gap-1 group font-bold text-tone-200"
                    href={`mailto:${profe.contacto}`}
                  >
                    {profe.contacto}{" "}
                    <i className="group-hover:translate-x-2 transition-transform duration-150 ease-in">
                      <IoArrowRedo />
                    </i>
                  </a>
                  :"No posee o no se pudo ubicar"}
                </h4>
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
