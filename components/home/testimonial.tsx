import Image from "next/image";
import React from "react";
import { TestimonialType } from "./testimonialData";

export default function Testimonial({ data }: { data: TestimonialType }) {
  return (
    <section className="flex bg-blue-400 rounded dark:bg-bg-400 w-96 h-24 items-center p-2 gap-4">
      <div className="w-[70px]">
        <Image src={data.img} height={70} width={70} alt="icon" />
      </div>
      <div className="w-[282px] flex flex-col justify-between h-full">
        <p className="text-sm text-justify">{data.paragraph}</p>
        <h4 className="text-bg-400 dark:text-amber-400">{data.name}</h4>
      </div>
    </section>
  );
}
