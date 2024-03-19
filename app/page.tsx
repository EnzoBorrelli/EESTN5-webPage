import React from "react";

export default function Home() {
  return (
    <main className="size-full flex flex-col gap-2 justify-center items-center">
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
