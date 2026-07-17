import type { Metadata } from "next";
import { InventoryCatalog } from "@/components/sections/InventoryCatalog";

export const metadata: Metadata = {
  title: "Alquiler para eventos",
  description:
    "Inventario de alquiler: sillas, mesas, micrófonos, luces, humo, photobooth y más.",
};

export default function AlquilerPage() {
  return (
    <main className="flex-1 bg-cream pb-20 pt-28 sm:pb-28 sm:pt-32">
      <InventoryCatalog />
    </main>
  );
}
