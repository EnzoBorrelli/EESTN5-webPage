import { getServerSession } from "next-auth";
import React from "react";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(options);
  const user = session?.user;
  return (
    <main className="flex flex-col items-center justify-center gap-2 size-full">
      <h1 className="text-4xl font-extrabold uppercase"> hola soy la home</h1>
      <h2>user: {user?.name}</h2>
      <img src={`${user?.image}`} alt={user?.name} className="bg-slate-900 p-1 rounded-full size-20" />
      <h2>mail: {user?.email}</h2>
      <h2>role: {user?.role}</h2>
      <div className="bg-text-200 size-fit flex gap-4 p-3">
        <div className="size-20 bg-bg-200 ring-2 ring-text-100"></div>
        <div className="size-20 bg-bg-300 ring-2 ring-text-100"></div>
        <div className="size-20 bg-tone-100 ring-2 ring-text-100"></div>
        <div className="size-20 bg-tone-200 ring-2 ring-text-100"></div>
        <div className="size-20 bg-tone-300 ring-2 ring-text-100"></div>
        <div className="size-20 bg-accent-1 ring-2 ring-text-100"></div>
        <div className="size-20 bg-accent-2 ring-2 ring-text-100"></div>
      </div>
    </main>
  );
}
