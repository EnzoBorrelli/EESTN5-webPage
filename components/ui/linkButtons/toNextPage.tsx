import Link from "next/link";
import React from "react";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";

export default function ToNextPage({ label,href }: { label: string,href:string }) {
  return (
    <Link
      className="flex items-center justify-center gap-2 my-8 text-lg font-bold underline text-blue-600 md:text-xl group hover:text-amber-600"
      href={href}
    >
      {label}
      <i className="transition-transform duration-200 ease-in group-hover:translate-x-2">
        <FaPersonWalkingArrowRight size={30} />
      </i>
    </Link>
  );
}
