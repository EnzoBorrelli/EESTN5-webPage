import TeacherForm from "@/components/form/TeacherForm";
import React from "react";

export default function dashboard() {
  return (
    <div className='w-full flex flex-col gap-4 items-center px-10 md:px-20 py-10'>
      <TeacherForm />
    </div>
  );
}
