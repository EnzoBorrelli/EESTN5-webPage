import Link from "next/link";
import React from "react";

type linkData = {
  name: string;
  href: string;
}

export default function ListLink({ link }: { link: linkData }) {
  return (
    <li
      key={link.name}
      className="relative w-fit hover:text-text-100 hover:font-bold after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent-2 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
    >
      <Link href={link.href}>{link.name}</Link>
    </li>
  );
}
