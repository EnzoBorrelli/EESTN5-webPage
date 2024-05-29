import React from "react";

export default function NavLabel({ label }: { label: string }) {
  return (
    <h2 className="text-lg font-bold relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-tone-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right">
      {label}
    </h2>
  );
}
