import { RedesSociales } from "@/components/navLinks";
import ToNextPage from "@/components/ui/linkButtons/toNextPage";
import Image from "next/image";
import QR from "../../../../components/secciones/comunidad/cursos/imagenes/qr.png";
import { FaWhatsappSquare } from "react-icons/fa";
import Banner from "@/components/home/banner";
import { courseData } from "@/components/secciones/comunidad/cursos/courseData";

export default function Cursos() {
  const isOpen = false;
  const inscriptionLink = "";
  return (
    <main className="py-10 flex flex-col items-center gap-2 px-2 md:p-10">
      <h1 className="text-xl font-bold text-center">
        Contamos con cursos de formación profesional
      </h1>
      <h2
        className={`${
          isOpen
            ? "text-green-600 dark:text-green-400"
            : "text-red-600 dark:text-red-400"
        } text-lg font-bold text-center`}
      >
        {isOpen ? "Inscripciones abiertas" : "Inscripciones cerradas"}
      </h2>
      <section className="flex flex-col gap-4 px-2 mt-4">
        <article className="flex flex-col gap-2 text-center">
          <p>Todos los cursos se ralizarán entre las 17:30hs y las 21:30hs</p>
          <p>
            {isOpen
              ? "Inscripciones abiertas desde el 26 de febrero"
              : "Inscripciones cerradas hasta próximo aviso"}
          </p>
        </article>
      </section>
      <hr className="my-4 border-t-2 border-bg-200 dark:bg-500" />
      <section className="flex flex-col gap-4 px-2 mt-2">
        <h2 className="text-xl font-semibold text-center text-text-500 dark:text-text-200">
          ¿Como me inscribo?
        </h2>
        <article className="text-lg text-center grid grid-cols-1 md:grid-cols-3 divide-y-2 gap-2 md:gap-0 md:divide-x-2 md:divide-y-0 divide-bg-200 dark:divide-bg-500 justify-center">
          <p className="flex flex-col items-center w-full px-2 gap-2">
            La apertura de las incripciones se anuciaran en esta página y en
            todas nuestras redes sociales.
            <ul className="flex gap-2 px-4 size-fit">
              {RedesSociales.map((social) => (
                <li
                  className="p-1 text-3xl transition-all duration-200 ease-in bg-transparent rounded-md hover:text-text-100 hover:bg-bg-600 dark:hover:bg-bg-100 dark:hover:text-text-600"
                  key={social.key}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.symbol}
                  </a>
                </li>
              ))}
            </ul>
          </p>
          <p className="flex flex-col px-2 items-center gap-4">
            Para inscribirse, solo debe presionar el siguiente boton, o escanear
            el siguinte QR, el cual lo dirigirá a un formulario de google.
            <a
              className="bg-bg-200 rounded dark:bg-bg-400 px-2 hover:bg-blue-300 hover:dark:bg-amber-700"
              href={inscriptionLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscribirse a un curso
            </a>
            <Image
              className="bg-slate-200 ring-2 ring-black dark:ring-0"
              alt="codigo QR"
              src={QR}
              height={100}
              width={100}
            />
          </p>
          <p className="flex flex-col px-2 items-center gap-2">
            En caso de necesitar realizar consultas, puede comunicarse con el
            siguiente WhatsApp
            <a
              className="text-green-500 hover:text-lime-500"
              href="https://wa.link/qknt34"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare size={60} />
            </a>
          </p>
        </article>
      </section>
      <hr className="my-4 border-t-2 border-bg-200 dark:border-bg-500" />
      <section className="flex flex-col gap-4 px-2 mt-4">
        <h2 className="text-xl font-semibold text-center text-text-500 dark:text-text-200">
          ¿Que puedo cursar?
        </h2>
        <article className="flex flex-col text-center gap-2 indent-2">
          <p>A continuacion se detallaran los diferentes cursos disponibles</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {courseData.map((data, index) => (
          <Banner key={index} data={data} moreBtn={false} />
        ))}
      </div>
        </article>
      </section>
      <ToNextPage label="Ver Proyectos" href="/proyectos" />
    </main>
  );
}
