'use client'
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

export default function EventDelete({ eventID }: { eventID: string }) { //se recibe la id del evento
  const router = useRouter();
  const { toast } = useToast();

  const deleteEvent = async (ID : string) => { //funcion para borrar el evento
    const response = await fetch("/api/event", { //se busca el metodo DELETE de la api
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: ID }),
    });
    if (response.ok) { // si todo sale bien, ->
      router.refresh(); //se refresca la pagina
      toast({
        title: "evento eliminado",
        description: "el evento  se elimino exitosamente",
        variant: "success",
      });
    } else { //sino, ->
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
          className="text-text-600 dark:text-text-100 group-hover:text-red-600 dark:group-hover:text-red-500"
          size={20}
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Desea eliminar este evento?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta accion no puede ser revertida. Este evnto sera eliminado permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:bg-amber-500">Cancelar</AlertDialogCancel>
          <AlertDialogAction className="hover:text-amber-500 hover:underline" onClick={() => deleteEvent(eventID)}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
