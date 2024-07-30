import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { IoArrowRedo } from "react-icons/io5";
import { MdMail } from "react-icons/md";


export default async function Profesor({
  params,
}: {
  params: { profesorID: string };
}) {
  const profesores = await db.teacher.findMany();
  const profesor = profesores.filter(
    (profesor) => profesor.name === params.profesorID.replace(/%20/g, " ")
  );
  return (
    <main className="px-4 py-4 md:px-10 size-full">
      <section className="flex flex-col items-center justify-center gap-4 md:gap-0 md:items-start size-full md:flex-row">
        <Link
          className="relative flex items-center w-48 px-2 py-1 mx-4 rounded-lg shadow-sm md:rounded-none shadow-accent-1 md:rounded-s-lg group"
          href="/profesores?profesores=todos"
        >
          Volver a <strong>&nbsp;Profesores</strong>
          <i className="absolute w-6 transition-all duration-300 ease-in-out right-1 group-hover:w-44 group-hover:right-2 top-1 bg-bg-100 ring-1 ring-bg-100">
            <HiArrowLeftOnRectangle size={24} />
          </i>
        </Link>
        {profesor.map((profe) => (
          <article
            className="grid w-full grid-cols-1 grid-rows-2 gap-4 px-4 overflow-hidden divide-y-2 shadow shadow-accent-2 md:w-2/3 lg:px-8 divide-bg-200 justify-items-center"
            key={profe.name}
          >
            <div className="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row">
              <span className="flex flex-col items-center p-2 rounded-md md:w-1/4 ring-2 ring-bg-300 bg-bg-200 md:p-1">
                <Image
                  className="rounded-md"
                  src='/imgs/teacherDefault.jpg'
                  alt={profe.name}
                  width={150}
                  height={150}
                />
                <h3 className="text-lg font-semibold text-center text-text-200">
                  {profe.name}
                </h3>
                <h4 className="text-center text-md text-text-200">
                  {profe.career}
                </h4>
              </span>
              <p className="text-center md:w-2/3 md:text-left">
                {profe.description}
              </p>
            </div>
            <div className="flex flex-col items-start w-full gap-2 pt-4">
              <h3 className="w-full text-lg font-bold text-center md:text-xl">
                INFORMACIÓN DE CONTACTO
              </h3>
                <h4 className="flex items-center w-full gap-1">
                  <MdMail size={24} />:
                  {profe.contact !== "nulo" ? (
                    <a
                      className="flex items-center gap-1 font-bold group text-tone-300 hover:text-accent-2"
                      href={`mailto:${profe.contact}`}
                    >
                      {profe.contact}{" "}
                      <i className="transition-transform duration-150 ease-in group-hover:translate-x-2">
                        <IoArrowRedo />
                      </i>
                    </a>
                  ) : (
                    "No posee o no se pudo ubicar"
                  )}
                </h4>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
