import ToNextPage from "@/components/ui/linkButtons/toNextPage";
import Image from "next/image";
import React from "react";
import { FaSchool } from "react-icons/fa6";

export default function CicloBasico() {
  return (
    <main className="p-4 size-full">
      <h1 className="flex items-center justify-center gap-2 text-2xl font-bold uppercase">
        Ciclo Básico
        <FaSchool size={30} />
      </h1>
      <section className="p-2 my-4">
        <article className="flex flex-col gap-2 indent-2">
          <p>
            El Ciclo Básico en la Escuela Secundaria Técnica &quot;2 de Abril&quot;,
            reconocida por su excelencia educativa en Temperley, Argentina,
            ofrece una experiencia formativa única que combina rigurosidad
            académica con enfoque práctico desde el primer año hasta el tercero.
          </p>
          <p>
            En este ciclo, los estudiantes tienen la oportunidad de explorar una
            variedad de disciplinas técnicas que sientan las bases para futuras
            especializaciones. Además de las materias teóricas habituales, se
            enfatiza la importancia de la práctica y la experimentación en el
            aprendizaje.
          </p>
          <p>
            Los talleres prácticos, que complementan las clases teóricas, son
            una parte integral del currículo. Estos talleres no solo brindan a
            los estudiantes la oportunidad de aplicar los conocimientos
            adquiridos en un entorno práctico, sino que también fomentan el
            desarrollo de habilidades técnicas y destrezas manuales que son
            esenciales en el campo de la tecnología y la ingeniería.
          </p>
        </article>
        <hr className="my-4 border-t-2 border-bg-200 dark:border-bg-500" />
        <article className="flex flex-col gap-2 divide-y-2 indent-2 divide-bg-300">
          <div className="flex flex-col items-center gap-2 mb-4">
            <p className="text-center">
              Durante el primer año, los estudiantes se familiarizan con
              conceptos básicos en <strong>Carpintería</strong> y{" "}
              <strong>Dibujo Técnico</strong>. Estas materias les permiten
              adquirir habilidades fundamentales en el manejo de herramientas y
              materiales, así como en la representación gráfica de proyectos y
              diseños.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Image
                src="/imgs/especialidades/basico/tallerCarpinteria.jpg"
                alt=""
                width={320}
                height={180}
              />
              <Image
                src="/imgs/especialidades/basico/tallerDibujo.jpg"
                alt=""
                width={320}
                height={180}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <p className="text-center">
              En el segundo año, el enfoque se centra en áreas más
              especializadas, como <strong>Electricidad</strong> y{" "}
              <strong>Dibujo Técnico avanzado</strong>. Los estudiantes exploran
              los principios fundamentales de la electricidad y sus aplicaciones
              prácticas, al tiempo que perfeccionan sus habilidades de dibujo
              técnico para la comunicación efectiva de ideas y proyectos.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Image
                src="/imgs/especialidades/basico/tallerElectricidad.jpg"
                alt=""
                width={320}
                height={180}
              />
              <Image
                src="/imgs/especialidades/basico/tallerDibujo.jpg"
                alt=""
                width={320}
                height={180}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <p className="text-center">
              En el tercer año, los estudiantes tienen la oportunidad de
              sumergirse en talleres introductorios a las especialidades
              técnicas disponibles en la escuela. Estos talleres les brindan una
              visión más profunda de áreas específicas de interés, lo que les
              ayuda a tomar decisiones informadas sobre su futura trayectoria
              educativa y profesional.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Image
                src="/imgs/especialidades/basico/tallerElectronica.jpg"
                alt=""
                width={320}
                height={180}
              />
              <Image
                src="/imgs/especialidades/basico/tallerElectromecanica.jpg"
                alt=""
                width={320}
                height={180}
              />
              <Image
                src="/imgs/especialidades/basico/tallerAutomotor.jpg"
                alt=""
                width={320}
                height={180}
              />
            </div>
          </div>
        </article>
        <hr className="mt-4 border-t-2 border-bg-200 dark:border-bg-500" />
      </section>
      <section className="p-2">
        <h2 className="mb-4 text-lg font-semibold text-center">
          Turnos y horarios
        </h2>
        <article className="flex flex-col items-center gap-4">
          <p className="text-center">
            La escuela opera en dos turnos, mañana y tarde. Los talleres se
            programan en el turno que no se utiliza para las clases teóricas.
            Además, se ofrece educación física una vez por semana para todos los
            estudiantes.
          </p>
          <div className="flex flex-col gap-8 md:flex-row">
            <ul className="list-disc">
              <h3 className="font-semibold underline">Turno Mañana:</h3>
              <li>Teoria: 7:30hs - 11:50hs</li>
              <li>Primer receso: 0:0 hs - 0:0hs</li>
              <li>Segundo receso: 0:0 hs - 0:0hs</li>
              <li>5ta hora: 11:50hs - 12:50hs</li>
              <li>Taller: 13hs - 17:30hs</li>
              <li>Receso: 15hs - 15:20 hs</li>
            </ul>
            <ul className="list-disc">
              <h3 className="font-semibold underline">Turno Tarde:</h3>
              <li>Teoria: 13hs - 17:30hs</li>
              <li>Primer receso: 0:0 hs - 0:0hs</li>
              <li>Segundo receso: 0:0 hs - 0:0hs</li>
              <li>5ta hora: 17:30hs - 18:30hs</li>
              <li>Taller: 7:30hs - 13hs</li>
              <li>Receso: 9hs - 9:20 hs</li>
            </ul>
          </div>
        </article>
        <hr className="my-4 border-t-2 border-bg-200 dark:border-bg-500" />
      </section>
      <section className="p-2">
        <h2 className="mb-4 text-lg font-semibold text-center">
          Sobre educación fisica
        </h2>
        <article className="flex flex-col gap-2 indent-2">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quasi
            deserunt quisquam odio officia inventore quae dolorum fugit
            dignissimos, voluptates quis vero voluptate aperiam voluptatibus
            consequuntur cum ratione dolor debitis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta
            sit quod, dignissimos officia quos esse odit corrupti deleniti,
            ipsum, facilis iure voluptatum at eaque pariatur incidunt facere.
            Voluptatem magnam fuga recusandae soluta dolor ea vel saepe nobis
            sapiente labore?
          </p>
        </article>
      </section>
      <ToNextPage label="Ver Electrónica" href="/electronica" />
    </main>
  );
}
