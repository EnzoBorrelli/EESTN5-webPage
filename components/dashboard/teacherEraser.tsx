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

export default function TeacherEraser({ teacherID }: { teacherID: string }) {
  const router = useRouter();
  const { toast } = useToast();

  const deleteTeacher = async (ID : string) => {
    const response = await fetch("/api/teacher", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: ID }),
    });
    if (response.ok) {
      router.refresh();
      toast({
        title: "perfil eliminado",
        description: "el perfil de profesor se elimino exitosamente",
        variant: "success",
      });
    } else {
        const errorData = await response.json();
      toast({
        title: "Error inesperado",
        description: errorData.message || "Ha ocurrido un error, intente nuevamente",
        variant: "destructive",
      });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="group">
        <FaTrashAlt
          className="text-text-100 group-hover:text-red-600"
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
          <AlertDialogCancel className="hover:bg-rose-500 hover:ring-rose-800">Cancelar</AlertDialogCancel>
          <AlertDialogAction className="hover:text-accent-2 hover:underline" onClick={() => deleteTeacher(teacherID)}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
