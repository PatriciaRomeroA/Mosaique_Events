"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CATALOG_CATEGORIES, CATALOG_ITEMS } from "@/data/catalog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

export function InventoryCatalog() {
  const [category, setCategory] = useState<string>("Todos");

  const items = useMemo(
    () =>
      category === "Todos"
        ? CATALOG_ITEMS
        : CATALOG_ITEMS.filter((item) => item.category === category),
    [category]
  );

  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-6 border-b border-ink/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Inventario
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold uppercase tracking-tight text-ink sm:text-5xl md:text-6xl">
            Catálogo de alquiler
          </h1>
          <p className="mt-3 max-w-xl font-sans text-[0.9375rem] leading-relaxed text-ink/60 sm:text-base">
            Explora el inventario disponible: sillas y mesas de fiesta, audio,
            iluminación, efectos y photobooth. Filtra y cotiza lo que necesites.
          </p>
        </div>
        <p className="font-sans text-sm text-ink/45">
          {items.length} {items.length === 1 ? "pieza" : "piezas"}
        </p>
      </div>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
        {CATALOG_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 font-sans text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-300",
              category === cat
                ? "bg-ink text-cream"
                : "border border-ink/10 bg-white text-ink/65 hover:border-ink/25 hover:text-ink"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.ul
        layout
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.li
              key={item.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease }}
            >
              <article className="group overflow-hidden rounded-[1.35rem] border border-ink/8 bg-white shadow-[0_12px_40px_rgba(11,36,28,0.05)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(11,36,28,0.1)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink">
                    {item.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-ink">
                        {item.name}
                      </h2>
                      <p className="mt-1 font-sans text-sm text-ink/55">{item.meta}</p>
                    </div>
                    <span className="shrink-0 font-sans text-[0.65rem] uppercase tracking-[0.14em] text-ink/35">
                      {item.sku}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-ink/8 pt-4">
                    <p className="font-sans text-xs text-ink/50">
                      Stock ·{" "}
                      <span className="font-semibold text-ink">{item.stock}</span>
                    </p>
                    <Link
                      href="/contacto"
                      className={cn(
                        buttonVariants({ variant: "primary", size: "sm" })
                      )}
                    >
                      Cotizar
                    </Link>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
