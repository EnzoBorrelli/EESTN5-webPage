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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { useState } from "react";

const FormSchema = z
  .object({
    name: z.string().min(1, "El nombre es obligatorio").max(100),
    email: z.string().min(1, "El correo es obligatorio").email("Correo no valido"),
    password: z
      .string()
      .min(1, "La contraseña es obligatoria")
      .min(8, "La contraseña debe contener almenos 8 caracteres"),
    confirmPassword: z.string().min(1, "La confirmacion de contraseña es obligatoria"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Las contraseñas no coinciden",
  });

const SignUpForm = () => {
  const [loading,setLoading] = useState(false)
  const router = useRouter();
  const {toast} = useToast()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setLoading(true)
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/son",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    });
    if (response.ok) {
      setLoading(false)
      router.push("/sign-in");
    } else {
      toast({
        title: "Error de registro",
        description: "Ha ocurrido un error, intente nuevamente",
        variant: 'destructive'
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-1/3 bg-bg-200 p-4 rounded-md">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="nombre de usuario" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Correo</FormLabel>
                <FormControl>
                  <Input placeholder="correo@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Contraseña</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Ingrese una contraseña"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Confirmar contraseña</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Re-ingrese su contraseña"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6 bg-accent-2 font-bold hover:bg-tone-100" type="submit" disabled={loading}>
          {loading?"Registrando usuario":"Registrarse"}
        </Button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-2">
        Si ya posee una cuenta, Porfavor&nbsp;
        <Link className="text-blue-500 hover:underline" href="/sign-in">
          Iniciar sesión
        </Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
