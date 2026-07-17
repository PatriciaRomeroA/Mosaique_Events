import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MOSAÏQUE EVENTS | Mobiliario & Organización de Eventos",
    template: "%s | MOSAÏQUE EVENTS",
  },
  description:
    "Alquiler de mobiliario de diseño y planeación integral de eventos. Bodas, corporativos y celebraciones privadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream font-sans text-ink">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
