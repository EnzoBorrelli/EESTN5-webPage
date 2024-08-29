import Image, { StaticImageData } from "next/image";
import React from "react";
import icon1 from "./testimonialIcons/hombre.png";
import icon2 from "./testimonialIcons/mujer.png";
import icon3 from "./testimonialIcons/mujer(1).png";
import icon4 from "./testimonialIcons/hombre(1).png";

export default function Testimonial() {
    const icons = [icon1,icon2,icon3,icon4]
    function getRandomElement(arr:StaticImageData[]) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    const selectedIcon = getRandomElement(icons)
    
  return (
    <section className="flex bg-blue-400 dark:bg-bg-400 w-96 h-24 items-center p-2 gap-4">
      <div className="w-[70px]">
        <Image src={selectedIcon} height={70} width={70} alt="icon" />
      </div>
      <div className="w-[282px] flex flex-col justify-between h-full">
        <p className="text-sm text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloribus
          quisquam corporis animi, omnis ipsum culpa
        </p>
        <h4>Nombre Apellido</h4>
      </div>
    </section>
  );
}
