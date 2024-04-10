import React from "react";
import {
  Comunidad,
  Conocenos,
  Especialidades,
  Novedades,
  RedesSociales,
} from "./navLinks";
import Link from "next/link";
import { MdPhone } from "react-icons/md";
import ScrollTopBtn from "./footer/scrollTopBtn";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full gap-8 pt-4 divide-y-2 divide-bg-300 bg-bg-200 h-fit">

      {/* seccion top | logo | nombre | contacto */}
      <section className="flex items-center justify-center gap-4 -mb-4 md:gap-20">
        <ScrollTopBtn />
        <div className="flex items-center gap-2">
          <h2>logo</h2>
          <p className="hidden text-center md:block">
            Escuela de Educación <br /> Secundaria Técnica N°5 <br />
            <span className="font-semibold">&quot;2 de Abril&quot;</span>
          </p>
          <p className="text-center md:hidden">
            E.E.S.T N°5 <br />
            <span className="font-semibold">&quot;2 de Abril&quot;</span>
          </p>
        </div>
        <Link className="flex items-center justify-center group" href="/contacto">
          <i className="transition-transform duration-200 group-hover:rotate-90">
            <MdPhone size={20} />
          </i>
          <h2 className="text-lg font-bold relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-tone-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right">
            Contáctanos
          </h2>
        </Link>
      </section>

      {/* seccion mid | secciones y subsecciones */}
      <section className="grid grid-cols-2 grid-rows-2 gap-2 pt-4 md:px-20 justify-items-center md:grid-cols-4 md:grid-rows-1">
        <nav>
          <h2 className="text-lg font-bold uppercase">Conócenos</h2>
          <ul className="flex flex-col items-center">
            {Conocenos.map((link) => (
              <li
                key={link.name}
                className="relative w-fit hover:text-text-100 hover:font-bold after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent-2 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <h2 className="text-lg font-bold uppercase">Especialidades</h2>
          <ul className="flex flex-col items-center">
            {Especialidades.map((link) => (
              <li
                key={link.name}
                className="relative w-fit hover:text-text-100 hover:font-bold after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent-2 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <h2 className="text-lg font-bold uppercase">Comunidad</h2>
          <ul className="flex flex-col items-center">
            {Comunidad.map((link) => (
              <li
                key={link.name}
                className="relative w-fit hover:text-text-100 hover:font-bold after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent-2 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <h2 className="text-lg font-bold uppercase">Novedades</h2>
          <ul className="flex flex-col items-center">
            {Novedades.map((link) => (
              <li
                key={link.name}
                className="relative w-fit hover:text-text-100 hover:font-bold after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent-2 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* seccion bot | copyright | redes sociales */}
      <section className="flex items-center justify-center px-4 py-2 md:px-0">
        <h3 className="text-center">
          © 2024 E.E.S.T Nº5 &quot;2 de Abril&quot; Todos los derechos reservados
        </h3>
        <ul className="flex gap-2 px-4 size-fit">
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
      </section>
    </footer>
  );
}
