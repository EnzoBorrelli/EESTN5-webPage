import React from "react";
import { Conocenos, Especialidades, Comunidad, Novedades } from "../navLinks";
import Link from "next/link";

export default function SubNavMobile({ menu }: { menu: string }) {
  return (
    <nav>
      {(() => {
        switch (menu) {
          case "conocer":
            return (
              <ul className="flex flex-col items-center gap-10 font-semibold text-text-200 text-md">
                {Conocenos.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            );
          case "especial":
            return (
              <ul className="flex flex-col items-center gap-10 font-semibold text-text-200 text-md">
                {Especialidades.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            );
          case "comunidad":
            return (
              <ul className="flex flex-col items-center gap-10 font-semibold text-text-200 text-md">
                {Comunidad.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            );
          case "novedades":
            return (
              <ul className="flex flex-col items-center gap-10 font-semibold text-text-200 text-md">
                {Novedades.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })()}
    </nav>
  );
}
