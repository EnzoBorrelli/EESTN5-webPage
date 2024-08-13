import React from "react";
import Image from "next/image";

export default function AutoridadCard({
  src,
  nombre,
  cargo,
}: {
  src: string;
  nombre: string;
  cargo: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-md bg-bg-200 dark:bg-bg-500">
      <Image
        className="rounded-t-md"
        src={src}
        alt={cargo}
        height={200}
        width={200}
      />
      <h2 className="text-xl font-semibold">{nombre}</h2>
      <h3 className="uppercase text-amber-600">{cargo}</h3>
    </div>
  );
}
/*este componente es el encargado de mostrar las tarjetas de cada autoridad, reciebiendo desde la page los datos:
src=ubicacion de la imagen en carpetas locales o url 
nombre=nombre de la autoridad en cuestion
cargo= cargo que ejerce dicha persona*/