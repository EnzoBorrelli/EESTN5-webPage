import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const fontType = Open_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Escuela Técnica Industrial de Temperley '2 de Abril' - Formación para el Futuro",
  description:
    "Descubre la Escuela Técnica Industrial de Temperley '2 de Abril', una institución educativa comprometida con la excelencia en la formación técnica. Ofrecemos programas de estudio en electromecánica, electrónica, informática y más. Prepárate para el futuro con nuestra educación de calidad y nuestras instalaciones modernas. ¡Únete a nuestra comunidad educativa hoy mismo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${fontType.className} size-full bg-bg-100 dark:bg-bg-600 flex-col`}>
        <main>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        </main>
        <Toaster/>
      </body>
    </html>
  );
}
