import React from "react";
import {
  Conocenos,
  Especialidades,
  Comunidad,
  Novedades,
} from "../../navLinks";
import ListLink from "@/components/ui/linkButtons/listLink";

export default function SubNavMobile({ menu }: { menu: string }) {
  return (
    <nav>
      {(() => {
        switch (menu) {
          case "conocer":
            return (
              <ul className="flex flex-col items-center gap-10 font-semibold text-text-200 text-md">
                {Conocenos.map((link) => (
                  <div key={link.name}>
                    <ListLink link={link} />
                  </div>
                ))}
              </ul>
            );
          case "especial":
            return (
              <ul className="flex flex-col items-center gap-10 font-semibold text-text-200 text-md">
                {Especialidades.map((link) => (
                  <div key={link.name}>
                    <ListLink link={link} />
                  </div>
                ))}
              </ul>
            );
          case "comunidad":
            return (
              <ul className="flex flex-col items-center gap-10 font-semibold text-text-200 text-md">
                {Comunidad.map((link) => (
                  <div key={link.name}>
                    <ListLink link={link} />
                  </div>
                ))}
              </ul>
            );
          case "novedades":
            return (
              <ul className="flex flex-col items-center gap-10 font-semibold text-text-200 text-md">
                {Novedades.map((link) => (
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
    </nav>
  );
}
