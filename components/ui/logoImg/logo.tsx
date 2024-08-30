"use client";
import React from "react";
import Image from "next/image";
import logo from "./logo.svg";

export default function Logo({
  size
}: {
  size: number
}) {
  return (
    <Image
      className="ml-8 -my-4"
      src={logo}
      height={size}
      width={size}
      alt="LOGO"
    />
  );
}
