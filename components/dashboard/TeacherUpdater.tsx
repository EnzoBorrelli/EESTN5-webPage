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
import { useRouter } from "next/navigation";
import { mutate } from "swr";
import { supabase } from "../form/supabase";
import { iTeacher } from "@/types/interfaces";

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
  image: z.any().optional(),
});

const TeacherUpdater = ({ teacher }: { teacher: iTeacher }) => {
  const [loading, setLoading] = useState(false);
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

    // Handle image upload
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
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Subir Imagen</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => field.onChange(e.target.files)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                    <select
                      {...field}
                      className="flex h-10 w-full rounded-md border border-input bg-bg-100 dark:bg-bg-600 px-3 py-2 text-sm ring-offset-bg-100 dark:ring-offset-bg-600 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Seleccione una especialidad</option>
                      <option value="basico">Básico</option>
                      <option value="electronica">Electrónica</option>
                      <option value="electromecanica">Electromecánica</option>
                      <option value="automotor">Automotor</option>
                    </select>
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
                  <FormLabel className="font-bold">Descripción</FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      rows={4}
                      placeholder="Ingrese una descripción"
                      className="flex h-10 w-full rounded-md border border-input bg-bg-100 dark:bg-bg-600 px-3 py-2 text-sm ring-offset-bg-100 dark:ring-offset-bg-600 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
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
