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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { useState } from "react";

const FormSchema = z.object({
  email: z.string().min(1, "El correo es obligatorio").email("Correo no valido"),
  password: z
    .string()
    .min(1, "La contraseña es obligatoria")
    .min(8, "La contraseña debe contener almenos 8 caracteres"),
});

const SignInForm = () => {
  const [loading,setLoading] = useState(false)
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setLoading(true)
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (signInData?.error) {
      toast({
        title: "Credenciales incorrectas",
        description: "Porfavor, verifique correo y contraseña",
        variant: 'destructive'
      });
    } else {
      setLoading(false)
      router.push("/");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-4 rounded-md md:w-1/3 bg-bg-200 dark:bg-bg-500">
        <div className="space-y-2">
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
        </div>
        <Button className="w-full mt-6 font-bold bg-amber-600 hover:bg-blue-600" type="submit" disabled={loading}>
          {loading?"Iniciando Sesión":"Iniciar Sesión"}
        </Button>
      </form>
      <p className="mt-2 text-sm text-center text-text-400 dark:text-text-300">
        Si no posee aun una cuenta, Porfavor&nbsp;
        <Link className="text-blue-500 hover:underline" href="/sign-up">
          Registrarse
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
