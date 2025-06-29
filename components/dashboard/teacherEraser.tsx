import React from "react";
import { FaTrashAlt } from "react-icons/fa";
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
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { mutate } from "swr";

export default function TeacherEraser({ teacherID }: { teacherID: string }) { //se recibe la id del profesor
  return (
    <AlertDialog>
      <AlertDialogTrigger className="group">
        <FaTrashAlt
          className="text-text-600 dark:text-text-100 group-hover:text-red-600 dark:group-hover:text-red-500"
          size={20}
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Desea eliminar este perfil?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta accion no puede ser revertida. Los datos de este perfil de
            profesor seran eliminados del servidor permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:bg-amber-500">Cancelar</AlertDialogCancel>
          <AlertDialogAction className="hover:text-amber-500 hover:underline">
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
