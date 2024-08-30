import Banner from "@/components/home/banner";
import { bannerData } from "@/components/home/bannerData";
import { HomeCarousel } from "@/components/home/homeCarousel";
import Testimonial from "@/components/home/testimonial";
import UpcomingEvents from "@/components/home/upcomingEvents";
import { RedesSociales } from "@/components/navLinks";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 size-full">
      <article className="size-full relative">
        <HomeCarousel />
        <h2 className="mt-2 absolute -top-2 w-full text-center py-2 text-text-500 dark:text-text-200 text-md lg:text-lg font-bold bg-bg-200 dark:bg-bg-500">
          Bienvenido a la Escuela Técnica Industrial de Temperley &apos;2 de Abril&apos;,
          donde la excelencia en la formación técnica es nuestra prioridad.
        </h2>
        <section className="absolute flex flex-col items-center py-2 px-4 md:px-0 lg:py-4 gap-2 lg:gap-4 bottom-0 left-0 w-1/2 lg:w-2/5 bg-bg-200 dark:bg-bg-500">
          <h1 className="text-lg lg:text-3xl font-extrabold">
            Formación para el Futuro
          </h1>
          <button className="dark:bg-amber-600 bg-amber-400 ring-2 px-2 lg:px-8 dark:ring-amber-400 ring-amber-600 text-md lg:text-lg">
            Incribirse ahora
          </button>
        </section>
        <ul className="absolute right-0 bottom-0 py-2 bg-bg-200 dark:bg-bg-500 flex gap-3 lg:gap-6 px-4 size-fit">
          {RedesSociales.map((social) => (
            <li
              className="p-1 text-2xl transition-all duration-200 ease-in bg-transparent rounded-md hover:text-text-100 hover:bg-bg-600 dark:hover:text-text-600 dark:hover:bg-bg-100 hover:scale-110"
              key={social.key}
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.symbol}
              </a>
            </li>
          ))}
        </ul>
      </article>
      <article className="w-full flex flex-col items-center py-8 gap-6">
        <h2 className="text-text-600 dark:text-text-100 text-2xl font-bold">
          Proximos eventos
        </h2>
        <UpcomingEvents />
      </article>
      <article className="w-full flex flex-col items-center py-6 gap-4">
        <h2 className="text-text-600 dark:text-text-100 text-2xl font-bold">
          Especialidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bannerData.map((data, index) => (
            <Banner key={index} data={data} />
          ))}
        </div>
      </article>
      <article className="w-full flex flex-col items-center py-6 gap-4">
      <h2 className="text-text-600 dark:text-text-100 text-2xl font-bold">
          Testimonios
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
        </div>
      </article>
    </main>
  );
}
