import { Catalog, Hero, Testimonials } from "@/components/sections";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Catalog />
      <Testimonials />
      {/* Próximas secciones: Organización, Cotizar, Footer */}
    </main>
  );
}
