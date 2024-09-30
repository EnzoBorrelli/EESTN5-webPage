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
import { mutate } from "swr";
import { supabase } from "./supabase";

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

const TeacherForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      asignature: "",
      description: "",
      contact: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setLoading(true);

    // Handle image upload
    let imageUrl = "";
    if (values.image && values.image[0]) {
      const file = values.image[0];
      const sanitizedFileName = values.name
        .replace(/[^a-z0-9]/gi, "_")
        .toLowerCase();
      const fileName = `${sanitizedFileName}.${file.name.split(".").pop()}`;

      // Upload the file to the Supabase bucket under the public folder
      const { data, error } = await supabase.storage
        .from("teacher_images")
        .upload(`${fileName}`, file);

      if (error) {
        console.error(error);
        setLoading(false);
        toast({
          title: "Error de imagen",
          description: "No se pudo subir la imagen, intente nuevamente",
          variant: "destructive",
        });
        return;
      }

      // Construct the image URL based on the actual file path
      if (data?.path) {
        imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/teacher_images/${data.path}`;
      }
    }
    const response = await fetch("/api/teacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        specialization: values.specialization,
        asignature: values.asignature,
        description: values.description,
        contact: values.contact,
        image: imageUrl,
      }),
    });
    if (response.ok) {
      setLoading(false);
      form.reset();
      toast({
        title: "Perfil agregado",
        description:
          "El nuevo perfil de profesor ha sido agregado existosamente",
        variant: "success",
      });
      mutate("/api/teacher");
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
        Agrega perfiles de profesores rellenando este formulario.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-6xl p-4 rounded shadow-md bg-bg-200 dark:bg-bg-500 ring-2 ring-bg-300 dark:ring-bg-400 ring-opacity-70 shadow-bg-300 dark:shadow-bg-400"
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
            className="w-full mt-6 font-bold bg-blue-500 text-text-100 hover:bg-amber-500"
            type="submit"
            disabled={loading}
          >
            {loading ? "Agregando profesor" : "Agregar profesor"}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default TeacherForm;
