"use client";
import React from "react";
import {
  Comunidad,
  Conocenos,
  Especialidades,
  RedesSociales,
} from "./navLinks";
import ScrollTopBtn from "./footer/scrollTopBtn";
import ListLink from "./ui/linkButtons/listLink";
import ContactLink from "./ui/linkButtons/contactLink";
import Logo from "./ui/logoImg/logo";
import CalendarLink from "./ui/linkButtons/CalendarLink";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full gap-8 pt-4 divide-y-2 divide-bg-300 dark:divide-bg-400 bg-bg-200 dark:bg-bg-500 h-fit">
      {/* seccion top | logo | nombre | contacto */}
      <section className="flex items-center justify-center gap-4 -mb-4 md:gap-20">
        <ScrollTopBtn />
        <div className="flex items-center gap-2">
          <Logo size={40} />
          <p className="hidden text-center md:block">
            Escuela de Educación <br /> Secundaria Técnica N°5 <br />
            <span className="font-semibold">&quot;2 de Abril&quot;</span>
          </p>
          <p className="text-center md:hidden">
            E.E.S.T N°5 <br />
            <span className="font-semibold">&quot;2 de Abril&quot;</span>
          </p>
        </div>
        <div className="flex flex-col md:gap-2">
          <CalendarLink />
          <ContactLink />
        </div>
      </section>

      {/* seccion mid | secciones y subsecciones */}
      <section className="grid grid-cols-2 grid-rows-2 gap-2 pt-4 md:px-20 justify-items-center md:grid-cols-3 md:grid-rows-1">
        <nav className="col-span-2 md:col-span-1">
          <h2 className="text-lg font-bold uppercase">Conócenos</h2>
          <ul className="flex flex-col items-center">
            {Conocenos.map((link) => (
              <div key={link.name}>
                <ListLink link={link} />
              </div>
            ))}
          </ul>
        </nav>
        <nav>
          <h2 className="text-lg font-bold uppercase">Especialidades</h2>
          <ul className="flex flex-col items-center">
            {Especialidades.map((link) => (
              <div key={link.name}>
                <ListLink link={link} />
              </div>
            ))}
          </ul>
        </nav>
        <nav>
          <h2 className="text-lg font-bold text-center uppercase">Comunidad</h2>
          <ul className="flex flex-col items-center">
            {Comunidad.map((link) => (
              <div key={link.name}>
                <ListLink link={link} />
              </div>
            ))}
          </ul>
        </nav>
      </section>

      {/* seccion bot | copyright | redes sociales */}
      <section className="flex items-center justify-center px-4 py-2 md:px-0">
        <h3 className="text-center">
          © 2024 E.E.S.T Nº5 &quot;2 de Abril&quot; , [desarrollado por Enzo
          Borrelli]
        </h3>
        <ul className="flex gap-2 px-4 size-fit">
          {RedesSociales.map((social) => (
            <li
              className="p-1 text-2xl transition-all duration-200 ease-in bg-transparent rounded-md hover:text-text-100 hover:bg-bg-600 dark:hover:bg-bg-100 dark:hover:text-text-600"
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
