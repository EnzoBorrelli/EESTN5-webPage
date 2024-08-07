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
import { useRouter } from "next/navigation";
import { useState } from "react";

// Define el esquema para la validación del rol
const RoleUpdateSchema = z.object({
  role: z.enum(["admin", "user"], {
    errorMap: () => ({
      message: "los roles definidos son: user | admin",
    }),
  }),
});

const UserRoleManager = ({ userID }: { userID: string }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof RoleUpdateSchema>>({
    resolver: zodResolver(RoleUpdateSchema),
    defaultValues: {
      role: "user",
    },
  });

  const onSubmit = async (values: z.infer<typeof RoleUpdateSchema>) => {
    setLoading(true);
    try {
      const response = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userID, role: values.role }),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al actualizar el rol");
      }

      const data = await response.json();
      toast({
        title: "Rol actualizado",
        description: "El rol del usuario ha sido actualizado correctamente",
        variant: "success",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "algo ha salido mal",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full p-4 rounded-md shadow-md ring-2 ring-bg-200 ring-opacity-70 shadow-bg-200"
      >
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-bold">Nuevo Rol</FormLabel>
                <FormControl>
                  <Input
                    className="ring-2 ring-bg-200"
                    placeholder="Ingrese el rol"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="w-full mt-6 font-bold bg-accent-2 hover:bg-tone-100"
          type="submit"
          disabled={loading}
        >
          {loading ? "ACTUALIZANDO INFORMACIÓN" : "GUARDAR"}
        </Button>
      </form>
    </Form>
  );
};

export default UserRoleManager;
