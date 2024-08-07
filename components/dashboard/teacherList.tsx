import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { FaGear } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Profesor } from "@/types/profesor";

export default function TeacherList({ teachers }: { teachers: Profesor[] }) {
  return (
      <ScrollArea className="w-full h-60 bg-bg-100 rounded ring-1 ring-bg-200 ring-opacity-50 shadow-md shadow-bg-200 p-2">
        {teachers.map((teacher) => (
          <div className="my-2" key={teacher.id}>
            <span className="flex justify-between items-center gap-2 px-2">
              <h2>{teacher.name}</h2>
              <div className="flex gap-4 items-center">
                <h3
                  className={`text-sm flex items-center justify-center rounded ${
                    teacher.specialization === "admin"
                      ? "bg-accent-2 ring-accent-1 shadow-accent-1"
                      : "bg-bg-200 ring-bg-300 shadow-bg-300"
                  } ring-1  ring-opacity-50 shadow-md  px-2 py-0`}
                >
                  {teacher.specialization}
                </h3>
                <Dialog>
                  <DialogTrigger className="group">
                    <FaGear
                      className="text-text-100 group-hover:text-accent-2"
                      size={20}
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar perfil de {teacher.name}</DialogTitle>
                      <DialogDescription>
                        Estos campos podran ser editados en cualquier momento
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger className="group">
                    <FaTrashAlt
                      className="text-text-100 group-hover:text-red-600"
                      size={20}
                    />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </span>
            <Separator />
          </div>
        ))}
      </ScrollArea>
  );
}
