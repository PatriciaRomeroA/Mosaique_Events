import type { Metadata } from "next";
import { Contact } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cotiza con Mosaïque Events por WhatsApp, teléfono o email. Sin formularios largos.",
};

export default function ContactoPage() {
  return (
    <main className="flex-1 bg-cream">
      <Contact />
    </main>
  );
}
