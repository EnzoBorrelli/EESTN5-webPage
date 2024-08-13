import React from "react";
import Image from "next/image";
import imagenInstitucion from "./institucion.jpg";

export default function SeccionHistoria() {
  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-0 items-center md:items-start md:justify-between md:h-[300px] w-full py-2">
      <Image
        className="md:w-1/2 md:h-full"
        src={imagenInstitucion}
        alt="Imagen de la institución"
        width={500}
        height={500}
      />
      <article className="flex flex-col w-full md:w-1/2 h-[200px] md:h-full md:ml-4 bg-bg-200 dark:bg-bg-500 ">
        <h2 className="text-lg font-semibold text-center">Historia</h2>
        <p className="p-2 overflow-y-scroll ">
          La Escuela Nacional de Educación Técnica de Témperley, también
          conocida como &quot;El Industrial de Temperley&quot;, tuvo sus inicios el 1° de
          junio de 1953, durante la segunda presidencia de Perón. Surgió para
          satisfacer la creciente demanda de educación técnica en la zona sur de
          Buenos Aires, donde escaseaban este tipo de instituciones. Inició sus
          actividades en una antigua propiedad que pertenecía a la Sociedad
          Alemana de Educación Popular.
          <br />
          <br /> La precaria situación edilicia y las dificultades para
          funcionar surgieron desde el principio. La propiedad en la que se
          encontraba la escuela fue objeto de una disputa legal debido a un
          decreto del gobierno militar de 1956 que ordenaba la restitución de
          bienes a asociaciones y entidades civiles. Esto llevó a gestiones para
          obtener un nuevo terreno, primero con Ferrocarriles del Estado
          Argentino y luego mediante la Administración Inmobiliaria Robles.
          <br />
          <br /> A lo largo de los años, la escuela experimentó diversas mejoras
          edilicias, incluyendo la construcción de talleres, aulas, laboratorios
          y otros espacios necesarios para su funcionamiento. Se destacan la
          inauguración de la Biblioteca &quot;Fray Luis Beltrán&quot; y el Salón de Usos
          Múltiples en 1985, así como la creación del Laboratorio de Ensayos de
          Materiales &quot;Ing. Vicente Luquín&quot; en 1995.
          <br />
          <br /> La institución se adaptó a los cambios en la educación técnica
          a lo largo de los años, desde los primeros planes de estudio en 1953
          hasta la implementación de la Educación General Básica (EGB) en 1998 y
          la enseñanza POLIMODAL en 1999. Además, pasó por cambios en su
          dependencia administrativa, inicialmente bajo el Consejo Nacional de
          Educación Técnica (CONET) y luego bajo la Dirección General de Cultura
          y Educación de la Provincia de Buenos Aires a partir de 1994.
          <br />
          <br /> La escuela ha sido un punto de referencia en la comunidad, con
          una importante cantidad de estudiantes y personal docente y
          administrativo a lo largo de los años. Numerosos exalumnos han
          regresado como docentes, y se destaca el compromiso y la dedicación de
          aquellos que han ocupado cargos directivos y jerárquicos.
          <br />
          <br /> En 1982, en medio del conflicto por las Islas Malvinas, la
          escuela cambió su nombre a &quot;2 de Abril&quot; en homenaje a la fecha del
          intento de recuperación de las mismas. Este cambio se realizó en un
          emotivo acto presidido por el Ministro de Educación, en el que se
          destacó el patriotismo y el sentido de pertenencia a la patria.
          <br />
          <br /> A pesar de las dificultades y los cambios a lo largo de los
          años, la Escuela Técnica de Témperley ha mantenido su compromiso con
          la educación técnica y su papel fundamental en la comunidad.
        </p>
      </article>
    </section>
  );
}
