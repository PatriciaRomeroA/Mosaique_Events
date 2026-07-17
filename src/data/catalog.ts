import type { CatalogItem } from "@/types";

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: "sillas-tiffany",
    name: "Sillas Tiffany",
    meta: "Blancas · Apilables · Pack 50",
    category: "Sillas",
    sku: "SIL-010",
    stock: 200,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80",
    alt: "Sillas de fiesta blancas en montaje de evento",
  },
  {
    id: "sillas-crossback",
    name: "Sillas Crossback",
    meta: "Madera natural · Pack 40",
    category: "Sillas",
    sku: "SIL-022",
    stock: 160,
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    alt: "Sillas de madera para banquete de fiesta",
  },
  {
    id: "mesas-redondas",
    name: "Mesas Redondas",
    meta: "1.80 m · Mantelería opcional",
    category: "Mesas",
    sku: "MES-008",
    stock: 45,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=80",
    alt: "Mesas redondas de fiesta con mantelería",
  },
  {
    id: "mesas-coctel",
    name: "Mesas Cóctel",
    meta: "Altas · Diámetro 80 cm",
    category: "Mesas",
    sku: "MES-015",
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
    alt: "Mesas altas de cóctel en recepción de evento",
  },
  {
    id: "microfono-inalambrico",
    name: "Micrófono Inalámbrico",
    meta: "Handheld · Dual channel",
    category: "Audio",
    sku: "AUD-003",
    stock: 12,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80",
    alt: "Micrófono profesional para eventos",
  },
  {
    id: "kit-audio",
    name: "Kit Sonido",
    meta: "Bocinas + consola · Hasta 100 pax",
    category: "Audio",
    sku: "AUD-011",
    stock: 6,
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
    alt: "Equipo de sonido y bocinas para fiesta",
  },
  {
    id: "luces-led",
    name: "Luces LED Wash",
    meta: "RGBW · Control DMX",
    category: "Iluminación",
    sku: "LUZ-004",
    stock: 24,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    alt: "Iluminación LED de colores en evento",
  },
  {
    id: "luces-string",
    name: "Guirnaldas de Luces",
    meta: "Cálidas · 20 m por tramo",
    category: "Iluminación",
    sku: "LUZ-018",
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
    alt: "Guirnaldas de luces cálidas en fiesta",
  },
  {
    id: "maquina-humo",
    name: "Máquina de Humo",
    meta: "Hazer · Bajo consumo de líquido",
    category: "Efectos",
    sku: "EFX-002",
    stock: 8,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1459749411177-047547438ccf?auto=format&fit=crop&w=900&q=80",
    alt: "Efecto de humo y luces en escenario de evento",
  },
  {
    id: "maquina-chispas",
    name: "Efecto Chispas Frías",
    meta: "Indoor-safe · Par de unidades",
    category: "Efectos",
    sku: "EFX-009",
    stock: 4,
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=900&q=80",
    alt: "Efectos de luces y atmósfera en fiesta",
  },
  {
    id: "photobooth",
    name: "Photobooth 360",
    meta: "Plataforma + anillo LED · Attendant",
    category: "Photobooth",
    sku: "PHO-001",
    stock: 3,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1527529480456-74000b78c59d?auto=format&fit=crop&w=900&q=80",
    alt: "Photobooth y entretenimiento en celebración",
  },
  {
    id: "photobooth-clasico",
    name: "Photobooth Clásico",
    meta: "Cabina · Impresión instantánea",
    category: "Photobooth",
    sku: "PHO-004",
    stock: 2,
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
    alt: "Zona de fotos y props para fiesta",
  },
];

export const CATALOG_CATEGORIES = [
  "Todos",
  ...Array.from(new Set(CATALOG_ITEMS.map((item) => item.category))),
] as const;

export const FEATURED_ITEMS = CATALOG_ITEMS.filter((item) => item.featured);
