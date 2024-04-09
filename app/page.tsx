import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 size-full">
      <h1 className="text-4xl font-extrabold uppercase">	hola soy la home</h1>
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
