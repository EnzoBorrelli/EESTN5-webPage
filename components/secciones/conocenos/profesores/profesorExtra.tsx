import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { IoArrowRedo } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";

export default function ProfesorExtra({
  name,
  description,
  contact,
}: {
  name: string;
  description: string | null;
  contact: string | null;
}) {
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center justify-center gap-2 px-2 mt-4 rounded-md bg-bg-300 dark:bg-bg-400 hover:bg-amber-500 dark:hover:bg-amber-600">
        saber más
        <FaCirclePlus />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Acerca de: {name}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <AlertDialog>
            <AlertDialogTrigger className="flex items-center w-full gap-1">
              <h4 className="flex items-center gap-1 font-bold text-blue-400 group hover:text-amber-500">
                <MdMail size={24} />
                enviar correo
                <i className="transition-transform duration-150 ease-in group-hover:translate-x-2">
                  <IoArrowRedo />
                </i>
              </h4>
            </AlertDialogTrigger>
            {contact === null || contact === '' ? (
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>No disponible</AlertDialogTitle>
                  <AlertDialogDescription>
                    Actualmente no se cuenta con un correo de contacto para est@ profesor/a
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-bg-100 dark:bg-bg-600 hover:bg-blue-400 dark:hover:bg-amber-500">
                    Regresar
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            ) : (
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Estas segur@?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esto te redirigirá a tu bandeja de correo para contactarte
                    con este profesor
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-bg-100 dark:bg-bg-600 hover:bg-blue-400 dark:hover:bg-amber-500">
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction>
                    <a
                      className="flex items-center w-full gap-1"
                      href={`mailto:${contact}`}
                    >
                      <h4 className="flex items-center gap-1 font-bold group hover:text-blue-400 dark:hover:text-amber-500">
                        <MdMail size={24} />
                        Continuar
                        <i className="transition-transform duration-150 ease-in group-hover:translate-x-2">
                          <IoArrowRedo />
                        </i>
                      </h4>
                    </a>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            )}
          </AlertDialog>

          <DrawerClose>
            <Button className="bg-bg-100 dark:bg-bg-600 hover:bg-blue-400 dark:hover:bg-amber-500" variant="outline">
              Cerrar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
