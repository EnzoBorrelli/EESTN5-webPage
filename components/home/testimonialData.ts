import { StaticImageData } from "next/image";
import icon1 from "./testimonialIcons/hombre.png";
import icon2 from "./testimonialIcons/mujer.png";
import icon3 from "./testimonialIcons/mujer(1).png";
import icon4 from "./testimonialIcons/hombre(1).png";

export type TestimonialType = {
  name: string;
  img: StaticImageData;
  paragraph: string;
};

export const testimonialData: TestimonialType[] = [
  {
    name: "Mateo Marquez",
    img: icon4,
    paragraph:
      "El pasaje por la industrial de temperley, me dejo muchas enseñanzas y fue un muy lindo camino!.",
  },
  {
    name: "Analia Sanchez",
    img: icon2,
    paragraph:
      "Los profes siempre fueron profesionales, siempre tuve una muy linda experiencia en esta institución.",
  },
  {
    name: "Santiago Lema",
    img: icon1,
    paragraph:
      "Mis padres fueron a la industrial, yo fui a la industrial y mis hijos iran a la industrial, la mejor tenica de zona sur.",
  },
];
