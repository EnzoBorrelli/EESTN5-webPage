import ToNextPage from "@/components/ui/linkButtons/toNextPage";
import React from "react";
import { MdGroups } from "react-icons/md";

export default function Cooperadora() {
  return (
    <main className="p-4 size-full">
      <h1 className="flex items-center justify-center gap-2 text-2xl font-bold uppercase">
        Sobre la Cooperadora
        <MdGroups size={30} />
      </h1>
      <section className="flex flex-col gap-4 px-2 mt-4">
        <article className="flex flex-col gap-2 text-center indent-2">
          <p>
            La Asociación Cooperadora tiene como objetivo principal apoyar y
            fortalecer las actividades eductivas y extracurriculares de la
            escuela.
          </p>
          <p>
            A lo largo de los años, la cooperadora ha desempeñado un papel
            fundamental proporcionando recursos financieros y logisticos para
            mejorar la calidad educativa.
          </p>
        </article>
      </section>
      <hr className="my-4 border-t-2 border-bg-200 dark:bg-500" />
      <section className="flex flex-col gap-4 px-2 mt-4">
        <h2 className="text-lg font-semibold text-center text-text-500 dark:text-text-200">
          Su historia
        </h2>
        <article className="flex flex-col gap-2 indent-2">
          <p>
            La Asociacíon Cooperadora se estableció oficialmente en una asamblea
            extraordinaria convocada por el Director, Prof. Guido Carlo, en
            junio de 1953, tras operar de manera informal.
          </p>
          <p>
            Esta reunión marcó el comienzo del registro formal de todas las
            actividades de la asociación. Desde entonces, la cooperadora ha
            desempeñado un papel crucial en la realización de numerosos
            proyectos, incluida la construcción del 80% de las instalaciones de
            la escuela.
          </p>
          <p>
            Su labor se ha extendido a varios ámbitos, como ayudar a alumnos
            necesitados, adquirir terrenos adicionales para la expansión de la
            planta, comprar material educativo y proporcionar servicios médicos
            y de primeros auxilios. Además, ha facilitado donaciones de empresas
            y particulares, y administrado los aranceles mensuales de los
            alumnos asociados, contribuyendo así al desarrollo de una escuela
            digna a lo largo de cincuenta años.
          </p>
        </article>
      </section>
      <hr className="my-4 border-t-2 border-bg-200 dark:border-bg-500" />
      <section className="flex flex-col gap-4 px-2 mt-4">
        <h2 className="text-lg font-semibold text-center text-text-500 dark:text-text-200">
          ¿Como abonar?
        </h2>
        <article className="flex flex-col gap-2 indent-2">
          <p>
            Para realizar el pago, le sugerimos dirigirse a la secretaría, la
            cual se encuentra ubicada en el primer piso del edificio. Al
            ingresar por la puerta principal, encontrará la primera escalera a
            su izquierda.
          </p>
          <p>
            Es importante que lleve consigo su libreta de comunicaciones, además
            del monto correspondiente en efectivo o disponible para
            transferencia. Tenga en cuenta que puede cancelar la cantidad de
            meses que desee en ese momento.Se añadirá un sello correspondiente a
            cada mes pagado en la sección posterior de la libreta. Actualmente,
            el monto a abonar es de $monto$.
          </p>
          <p>
            En caso de no poseer una libreta, puede adquirirla en la misma
            secretaría. Deberá cancelar el costo de la libreta más un adicional
            correspondiente al primer mes de la cooperadora.
          </p>
          <p>
            Si requiere más información o tiene alguna consulta adicional, no
            dude en acercarse directamente a la secretaría o consultar a alguno
            de nuestros preceptores.
          </p>
        </article>
      </section>
      <ToNextPage label="Ver Ciclo Básico" href="/ciclo-basico"/>
    </main>
  );
}
