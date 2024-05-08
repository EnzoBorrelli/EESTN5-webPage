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
    <div className="flex flex-col items-center rounded-md bg-bg-200">
      <Image
        className="rounded-t-md"
        src={src}
        alt={cargo}
        height={200}
        width={200}
      />
      <h2 className="text-xl font-semibold">{nombre}</h2>
      <h3 className="uppercase text-accent-2">{cargo}</h3>
    </div>
  );
}
