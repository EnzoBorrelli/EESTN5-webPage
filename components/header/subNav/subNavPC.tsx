import React from "react";
import {
  Conocenos,
  Especialidades,
  Comunidad,
  RedesSociales,
} from "../../navLinks";
import ListLink from "@/components/ui/linkButtons/listLink";

export default function SubNavPC({ menu }: { menu: string }) {
  return (
    <nav className="flex items-center justify-between w-full p-4">
      {(() => {
        switch (menu) {
          case "conocer":
            return (
              <ul className="flex items-center gap-10 pl-4 text-xl font-semibold uppercase hover:text-text-400 text-text-500 dark:text-text-200 dark:hover:text-text-200">
                {Conocenos.map((link) => (
                  <div key={link.name}>
                    <ListLink link={link} />
                  </div>
                ))}
              </ul>
            );
          case "especial":
            return (
              <ul className="flex items-center gap-10 pl-4 text-xl font-semibold uppercase text-text-500 dark:text-text-200">
                {Especialidades.map((link) => (
                  <div key={link.name}>
                    <ListLink link={link} />
                  </div>
                ))}
              </ul>
            );
          case "comunidad":
            return (
              <ul className="flex items-center gap-10 pl-4 text-xl font-semibold uppercase text-text-500 dark:text-text-200">
                {Comunidad.map((link) => (
                  <div key={link.name}>
                    <ListLink link={link} />
                  </div>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })()}
      <ul className="flex gap-6 px-4 size-fit">
        {RedesSociales.map((social) => (
          <li
            className="p-1 text-4xl transition-all duration-200 ease-in bg-transparent rounded-md hover:text-text-100 hover:bg-bg-600 dark:hover:text-text-600 dark:hover:bg-bg-100 hover:scale-110"
            key={social.key}
          >
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              {social.symbol}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
