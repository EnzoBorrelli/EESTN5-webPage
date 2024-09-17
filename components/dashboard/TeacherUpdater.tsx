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
import { Profesor } from "@/types/profesor";
import { useRouter } from "next/navigation";
import { mutate } from "swr";

const FormSchema = z.object({
  name: z.string().min(1, "Este campo es necesario").max(25),
  specialization: z.enum(
    ["basico", "electronica", "electromecanica", "automotor"],
    {
      errorMap: () => ({
        message:
          "la especialidad debe ser una de estas opciones: basico, electronica, electromecanica, automotor ",
      }),
    }
  ),
  asignature: z.string().min(1, "Este campo es necesario").max(100),
  description: z.string().min(1, "Este campo es necesario").max(350),
  contact: z.string().email("correo no valido").optional().or(z.literal("")),
});

const TeacherUpdater = ({ teacher }: { teacher: Profesor }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: `${teacher.name}`,
      asignature: `${teacher.asignature}`,
      description: `${teacher.description}`,
      contact: `${teacher.contact}`,
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setLoading(true);
    const response = await fetch("/api/teacher", {
      method: "PUT",
      headers: {
        "Content-Type": "application/son",
      },
      body: JSON.stringify({
        id: teacher.id,
        name: values.name,
        specialization: values.specialization,
        asignature: values.asignature,
        description: values.description,
        contact: values.contact,
      }),
    });
    if (response.ok) {
      setLoading(false);
      router.refresh();
      toast({
        title: "perfil actualizado",
        description: "la informacion ha sido reescrita exitosamente",
        variant: "success",
      });
      mutate('/api/teacher');
    } else {
      toast({
        title: "Error de registro",
        description: "Ha ocurrido un error, intente nuevamente",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="flex flex-col items-center gap-4">
      <p className="my-2 text-center">
        Edita perfiles de profesores reescribiendo la informacion contenida en
        este formulario.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-6xl p-4 rounded shadow-md dark:bg-bg-500 bg-bg-200 ring-2 dark:ring-bg-400 ring-bg-300 ring-opacity-70 dark:shadow-bg-400 shadow-bg-300"
        >
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="nombre completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="specialization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Especialidad</FormLabel>
                  <FormControl>
                    <Input placeholder="especialidad" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="asignature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Asignaturas a dictar {"(separar con comas)"}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="asignaturas" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Descripcion</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingrese una descripcion" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Correo de contacto
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Dejar vacio si no aplica" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className="w-full mt-6 font-bold bg-amber-400 dark:bg-amber-600 hover:bg-blue-400 dark:hover:bg-cyan-600"
            type="submit"
            disabled={loading}
          >
            {loading ? "Actualizando" : "Actualizar profesor"}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default TeacherUpdater;
