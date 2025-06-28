"use client";
import React from "react";
import Image from "next/image";


export default function Logo({
  size
}: {
  size: number
}) {
  return (
    <Image
      className="ml-8 -my-4"
      src="./logo.svg"
      height={size}
      width={size}
      alt="LOGO"
    />
  );
}
