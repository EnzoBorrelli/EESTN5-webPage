import Banner from "@/components/home/banner";
import React from "react";
import { projectsData } from "@/components/secciones/comunidad/proyectos/projectsData";

export default function Proyectos() {
  return (
    <main className="py-10 flex flex-col items-center gap-6 px-2 md:p-10">
      <h1 className="text-4xl mb-12 font-bold text-center">Proyectos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projectsData.map((data, index) => (
          <Banner key={index} data={data} moreBtn={false} />
        ))}
      </div>
    </main>
  );
}
