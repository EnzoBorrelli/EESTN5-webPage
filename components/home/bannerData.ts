export interface BannerData {
  title: string;
  description: string;
  img: StaticImageData;
  href: string;
}

import basico from './bannerImgs/basico.jpg'
import electronica from './bannerImgs/electronica.jpg'
import electromecanica from './bannerImgs/electromecanica.jpg'
import automotor from './bannerImgs/automotor.jpg'
import { StaticImageData } from 'next/image';

export const bannerData = [
  {
    title: "Ciclo Básico",
    description:
      "¡Explora tus talentos! El Ciclo Básico te abre puertas hacia un futuro brillante.",
    img: basico,
    href: "/ciclo-basico",
  },
  {
    title: "Electrónica",
    description:
      "Conviértete en un maestro de la tecnología: ¡la Electrónica transforma ideas en realidad!",
    img: electronica,
    href: "/electronica",
  },
  {
    title: "Electromecanica",
    description:
      "Domina la fusión de mecánica y electrónica: ¡la Electromecánica te lleva al siguiente nivel!",
    img: electromecanica,
    href: "/electromecanica",
  },
  {
    title: "Automotor",
    description:
     "Impulsa tu pasión por los motores: el Automotor te convierte en un experto en vehículos.",
    img: automotor,
    href: "/automotor",
  },
];
