import type { Metadata } from "next";
import { About } from "@/components/sections";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo de Mosaïque Events: creativos, logística y coordinación para tu celebración.",
};

export default function NosotrosPage() {
  return (
    <main className="flex-1 bg-cream">
      <About />
    </main>
  );
}
