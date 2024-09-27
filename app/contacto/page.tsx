import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";

export default function Contacto() {
  return (
    <main className="py-10 px-2 md:p-10">
      <h1 className="text-4xl mb-12 font-bold text-center">
        Métodos de Contacto
      </h1>
      <section className="grid grid-cols-1 sm:px-10 md:px-0 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-4 justify-items-center">
        <a
          className="flex bg-blue-400 rounded group dark:bg-bg-400 w-full xl:w-2/3 items-center px-4 py-2 gap-4"
          href="mailto:info@industrialdetemperley.edu.ar"
        >
          <IoMail className="group-hover:animate-bounce" size={24} />
          <div>
            <h3 className="font-semibold">Correo de información</h3>

            <h4 className="text-bg-400 dark:text-amber-400">
              info@industrialdetemperley.edu.ar
            </h4>
          </div>
        </a>
        <a
          className="flex bg-blue-400 rounded group dark:bg-bg-400 w-full xl:w-2/3 items-center px-4 py-2 gap-4"
          href="mailto:administracionindustrialtemperley@gmail.com"
        >
          <IoMail className="hidden lg:flex group-hover:animate-bounce" size={24} />
          <div>
            <h3 className="font-semibold">Correo Administrtivo</h3>
            <h4 className="text-bg-400 text-sm dark:text-amber-400">
              administracionindustrialtemperley@gmail.com
            </h4>
          </div>
        </a>
        <a
          className="flex bg-blue-400 rounded group dark:bg-bg-400 w-full xl:w-2/3 items-center px-4 py-2 gap-4"
          href="tel:+011 4244-3639"
        >
          <FaPhoneVolume className="group-hover:animate-bounce" size={24} />
          <div>
            <h3 className="font-semibold">Teléfono de Contacto</h3>
            <h4 className="text-bg-400 dark:text-amber-400">011 4244-3639</h4>
          </div>
        </a>
        <a
          className="flex bg-blue-400 rounded group dark:bg-bg-400 w-full xl:w-2/3 items-center px-4 py-2 gap-4"
          href="https://maps.app.goo.gl/FgAD7BCU6qJn8mDp6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapLocationDot className="group-hover:animate-bounce" size={24} />
          <div>
            <h3 className="font-semibold">Dirección de la institución</h3>
            <h4 className="text-bg-400 dark:text-amber-400">
              Pringles 27 - Temperley
            </h4>
          </div>
        </a>
      </section>
      <section className="mt-10">
        <iframe
          className="aspect-video w-full border-none rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.470661436264!2d-58.40139152486092!3d-34.76892486624086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd31c29211c73%3A0xf2aa3fcdd8373d2!2sCnel.%20Pringles%2027%2C%20B1834%20Temperley%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1727448448293!5m2!1sen!2sar"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
