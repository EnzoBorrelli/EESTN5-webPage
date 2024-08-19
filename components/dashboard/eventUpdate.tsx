"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import dayjs from "dayjs";
import { Event } from "@/types/event";

//se define un esquema para verificar la fecha del evento
const dateSchema = z
  .string()
  .min(1, "la fecha es necesaria")
  .refine((value) => dayjs(value, "YYYY-MM-DD", true).isValid(), {
    message: "formato incorrecto, la fecha se espera en YYYY-MM-DD",
  });

  //se define un esquema para verificar el horario del evento
const timeSchema = z
  .string()
  .min(1, "el horario es necesario")
  .refine((value) => dayjs(value, "HH:mm", true).isValid(), {
    message: "formato incorrecto, el horario se espera en HH:mm",
  });

// se define el esquema para validar los inputs al crear un evento
const FormSchema = z.object({
  title: z.string().min(1, "Este campo es necesario").max(25),
  date: dateSchema,
  startTime: timeSchema,
  finishTime: timeSchema,
});

const EventUpdate = ({event}:{event:Event}) => {
  const [loading,setLoading] = useState(false)
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: event.title,
      date: event.date,
      startTime: event.startTime,
      finishTime: event.finishTime,
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setLoading(true)
    const response = await fetch("/api/event", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:event.id,
        title: values.title,
        date: values.date,
        startTime: values.startTime,
        finishTime: values.finishTime,
      }),
    });
    if (response.ok) {
      setLoading(false)
      form.reset();
      toast({
        title: "Evento actualizado",
        description: "El nuevo Evento ha sido actualizado al calendario",
        variant:"success"
      });
    } else {
      toast({
        title: "Error Inesperado",
        description: "El evento no ha podido ser actualizado",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="flex flex-col items-center gap-4">
      <p className="my-2 text-center">
        Edita Eventos rellenando este formulario.
      </p>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-6xl p-4 rounded shadow-md bg-bg-200 dark:bg-bg-500 ring-2 ring-bg-300 dark:ring-bg-400 ring-opacity-70 shadow-bg-300 dark:shadow-bg-400"
      >
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">titulo</FormLabel>
                <FormControl>
                  <Input placeholder="EJ: Graduación 2024" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Fecha</FormLabel>
                <FormControl>
                <Input placeholder="EJ: 2024-8-19" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Horario de inicio</FormLabel>
                <FormControl>
                  <Input placeholder="1300" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="finishTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Horario de cierre</FormLabel>
                <FormControl>
                  <Input placeholder="1400" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="w-full mt-6 font-bold bg-blue-500 text-text-100 hover:bg-amber-500"
          type="submit"
          disabled={loading}
        >
          {loading?"Actualizando Evento":"Actualizar Evento"}
        </Button>
      </form>
    </Form>
    </section>
  );
};

export default EventUpdate;
