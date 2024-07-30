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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";

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
  career: z.string().min(1, "Este campo es necesario").max(25),
  description: z.string().min(1, "Este campo es necesario").max(350),
  contact: z.string().min(1, "Este campo es necesario"),
});

const TeacherForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      career: "",
      description: "",
      contact: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch("/api/teacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/son",
      },
      body: JSON.stringify({
        name: values.name,
        specialization: values.specialization,
        career: values.career,
        description: values.description,
        contact: values.contact,
      }),
    });
    if (response.ok) {
      form.reset();
      toast({
        title: "exito",
        description: "estupendo",
        variant:"success"
      });
    } else {
      toast({
        title: "Error de registro",
        description: "Ha ocurrido un error, intente nuevamente",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-1/3 bg-bg-200 p-4 rounded-md"
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
                  <Input placeholder="nombre completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="career"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Carrera</FormLabel>
                <FormControl>
                  <Input placeholder="carrera" {...field} />
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
                <FormLabel className="font-bold">Contacto</FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese correo de contacto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="w-full mt-6 bg-accent-2 font-bold hover:bg-tone-100"
          type="submit"
        >
          Agregar Profesor
        </Button>
      </form>
    </Form>
  );
};

export default TeacherForm;
