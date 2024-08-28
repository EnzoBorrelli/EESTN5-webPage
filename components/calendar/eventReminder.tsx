"use client";
import React, { useState } from "react";
import { useToast } from "../ui/use-toast";
import { FaCalendarTimes } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { MdAddAlert } from "react-icons/md";
import { Event } from "@/types/event";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const EventReminder = ({
  eventId,
  reminders,
}: {
  eventId: string;
  reminders: Event[];
}) => {
  const { toast } = useToast();
  const {data:session} = useSession()
  const userId = session?.user.email
  const existingReminder = reminders.some(event => event.id === eventId)
  const [isSaved, setIsSaved] = useState(existingReminder);
  const [isHovered, setIsHovered] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter()

  // Maneja la adición de recordatorio
  const AddReminder = async () => {
    console.log("userId:", userId, "eventId:", eventId);
    setIsProcessing(true);
    try {
      const response = await fetch("/api/reminder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, eventId }),
      });

      if (response.ok) {
        toast({
          title: "Recordatorio agregado",
          description: "El recordatorio ha sido agregado a tu perfil",
          variant: "success",
        });
        setIsSaved(true);
        router.refresh()
      } else {
        const errorData = await response.json();
        toast({
          title: "Error inesperado",
          description:
            errorData.message || "Ha ocurrido un error, intente nuevamente",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error de red",
        description: "No se pudo conectar con el servidor, intente nuevamente",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Maneja la eliminación de recordatorio
  const DeleteReminder = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/reminder", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, eventId }),
      });

      if (response.ok) {
        toast({
          title: "Recordatorio eliminado",
          description: "El recordatorio ha sido eliminado de tu perfil",
          variant: "success",
        });
        setIsSaved(false);
        router.refresh()
      } else {
        const errorData = await response.json();
        toast({
          title: "Error inesperado",
          description:
            errorData.message || "Ha ocurrido un error, intente nuevamente",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error de red",
        description: "No se pudo conectar con el servidor, intente nuevamente",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      {isSaved ? (
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => DeleteReminder()} // Llama a la función de eliminación
          className="flex items-center gap-2 group"
          disabled={isProcessing} // Deshabilitar mientras se procesa
        >
          <FaCalendarCheck
            className={`${isHovered ? "hidden" : ""}`}
            size={20}
          />
          <FaCalendarTimes
            className={`${isHovered ? "hover:text-red-600" : "hidden"}`}
            size={20}
          />
        </button>
      ) : (
        <button
          onClick={() => AddReminder()} // Llama a la función de adición
          className="flex items-center gap-2 group"
          disabled={isProcessing} // Deshabilitar mientras se procesa
        >
          <MdAddAlert
            className={`${isSaved ? "hidden" : "hover:text-green-600"}`}
            size={24}
          />
        </button>
      )}
    </>
  );
};

export default EventReminder;
