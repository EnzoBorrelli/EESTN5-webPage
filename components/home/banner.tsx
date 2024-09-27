import Link from "next/link";
import React from "react";
import { BannerData } from "./bannerData";
import Image from "next/image";
import { FaArrowRightToBracket } from "react-icons/fa6";

export default function Banner({ data,moreBtn }: { data: BannerData,moreBtn:boolean }) {
  return (
    <section className="bg-bg-200 dark:bg-bg-500 w-[268px] h-[22rem] rounded-md">
      <div className="py-1 px-2">
        <h3 className="font-bold">{data.title}</h3>
        <p className="text-sm tracking-wide">{data.description}</p>
      </div>
      <div className="relative w-full">
        <Image
          src={data.img}
          width={300}
          height={300}
          className="object-cover max-w-[268px] aspect-square"
          alt="20"
        />
        <Link
          className= {`${moreBtn?"flex":"hidden"} absolute w-full items-center gap-4 group justify-center py-1 text-lg bg-amber-400 dark:bg-amber-600 bottom-0 left-0`}
          href={data.href}
        >
          Conocer Más{" "}
          <i className="transition-transform duration-200 ease-in group-hover:translate-x-2">
            <FaArrowRightToBracket size={20} />
          </i>
        </Link>
      </div>
    </section>
  );
}
