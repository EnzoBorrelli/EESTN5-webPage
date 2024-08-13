import Image from "next/image";
import React from "react";
import { Profesor } from "@/types/profesor";
import ProfesorExtra from "./profesorExtra";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

//interfaz que recibe los datos del objeto profesor, proveniente del array pasado en profesoresList.tsx

export default function ProfesorCard({
  profesores,
}: {
  profesores: Profesor[];
}) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 xl:px-32 gap-y-2 sm:gap-y-6 justify-items-center">
      {profesores.map((profesor) => (
        <div
          className="flex flex-col items-center justify-between p-2 rounded-lg bg-bg-200 dark:bg-bg-500 w-44"
          key={profesor.name}
        >
          <>
            <Image
              className="rounded-md"
              src="/imgs/teacherDefault.jpg"
              alt={profesor.name}
              width={150}
              height={150}
            />
            <h3 className="text-lg font-semibold text-center text-text-500 dark:text-text-200">
              {profesor.name}
            </h3>
            <h4 className="mb-2">Asignaturas:</h4>
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              {profesor.asignature?.split(",").map((asignature, index) => (
                <TooltipProvider key={index}>
                  <Tooltip key={index}>
                    <TooltipTrigger key={index}>
                      <h4
                        className="px-1 text-sm truncate rounded-md max-w-16 bg-amber-400 dark:bg-amber-600"
                        key={index}
                      >
                        {asignature}
                      </h4>
                    </TooltipTrigger>
                    <TooltipContent key={index}>
                      <p key={index}>{asignature}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </>
          <ProfesorExtra
            name={profesor.name}
            description={profesor.description}
            contact={profesor.contact}
          />
        </div>
      ))}
    </section>
  );
}
