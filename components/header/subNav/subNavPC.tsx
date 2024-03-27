import React from "react";
import {
  Conocenos,
  Especialidades,
  Comunidad,
  Novedades,
  RedesSociales,
} from "../navLinks";
import Link from "next/link";

export default function SubNavPC({ menu }: { menu: string }) {
  return (
    <nav className="flex items-center justify-between w-full p-4">
      {(() => {
        switch (menu) {
          case "conocer":
            return (
              <ul className="flex items-center gap-10 pl-4 text-xl font-semibold uppercase hover:text-text-300 text-text-200">
                {Conocenos.map((link) => (
                  <li
                    key={link.name}
                    className="relative w-fit hover:text-text-100 hover:font-bold after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent-2 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            );
          case "especial":
            return (
              <ul className="flex items-center gap-10 pl-4 text-xl font-semibold uppercase text-text-200">
                {Especialidades.map((link) => (
                  <li
                    key={link.name}
                    className="relative w-fit hover:text-text-100 hover:font-bold after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent-2 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            );
          case "comunidad":
            return (
              <ul className="flex items-center gap-10 pl-4 text-xl font-semibold uppercase text-text-200">
                {Comunidad.map((link) => (
                  <li
                    key={link.name}
                    className="relative w-fit hover:text-text-100 hover:font-bold after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent-2 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            );
          case "novedades":
            return (
              <ul className="flex items-center gap-10 pl-4 text-xl font-semibold uppercase text-text-200">
                {Novedades.map((link) => (
                  <li
                    key={link.name}
                    className="relative w-fit hover:text-text-100 hover:font-bold after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent-2 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })()}
      <ul className="flex gap-6 px-4 size-fit">
        {RedesSociales.map((social) => (
          <li className="p-1 text-4xl transition-all duration-200 ease-in bg-transparent rounded-md hover:text-bg-100 hover:bg-text-100 hover:scale-110" key={social.key}>
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              {social.symbol}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
