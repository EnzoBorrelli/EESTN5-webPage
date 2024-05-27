import Image from "next/image";
import React from "react";
import placeholder from "./dash-placeholder.png";

export default function Dashboard() {
  return (
    <main className="size-full p-4 flex justify-center items-center">
      <Image src={placeholder} alt="" height={900} width={1720} />
    </main>
  );
}
