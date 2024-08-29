"use client";

import { useTheme } from "next-themes";
import React from "react";
import Image from "next/image";
import logoColor from "./logo-color.svg";
import logoInvert from "./logo-invert.svg";

export default function Logo({
  size
}: {
  size: number
}) {
  const { theme } = useTheme();
  return (
    <Image
      className="ml-8 -my-4"
      src={theme === "dark" ? logoInvert : logoColor}
      height={size}
      width={size}
      alt="LOGO"
    />
  );
}
