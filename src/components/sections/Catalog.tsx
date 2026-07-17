"use client";

import { useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FEATURED_ITEMS } from "@/data/catalog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

export function Catalog() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const hintX = useMotionValue(0);
  const hintY = useMotionValue(0);
  const springX = useSpring(hintX, { stiffness: 280, damping: 28 });
  const springY = useSpring(hintY, { stiffness: 280, damping: 28 });

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    setDragging(true);
    setShowHint(false);
    el.setPointerCapture(e.pointerId);
    const startX = e.clientX;
    const startScroll = el.scrollLeft;

    const onMove = (ev: globalThis.PointerEvent) => {
      el.scrollLeft = startScroll - (ev.clientX - startX);
    };
    const onUp = () => {
      setDragging(false);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  return (
    <section id="alquiler" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="font-display text-4xl font-semibold uppercase tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Nuestro inventario
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mx-auto mt-4 max-w-2xl font-sans text-[0.9375rem] leading-relaxed text-ink/60 sm:text-base"
        >
          Sillas, mesas, audio, luces, humo, photobooth y más para montar tu
          evento. Arrastra o abre el catálogo completo.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
        className="relative mt-12 sm:mt-16"
        onPointerMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          hintX.set(e.clientX - rect.left - 44);
          hintY.set(e.clientY - rect.top - 44);
        }}
        onPointerEnter={() => setShowHint(true)}
      >
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          className={cn(
            "flex cursor-grab gap-4 overflow-x-auto px-5 pb-4 scrollbar-none sm:gap-5 sm:px-8 lg:px-10",
            "snap-x snap-mandatory scroll-smooth active:cursor-grabbing",
            dragging && "select-none"
          )}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {FEATURED_ITEMS.map((item) => (
            <article
              key={item.id}
              className="group relative aspect-[3/4] w-[72vw] max-w-[280px] shrink-0 snap-center overflow-hidden rounded-[1.35rem] bg-ink sm:w-[260px] md:w-[280px] lg:max-w-none lg:w-[300px]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 72vw, 300px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                draggable={false}
              />

              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/20"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-[7px] rounded-[1.1rem] border border-cream/25"
              />

              <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/35 font-display text-xs font-semibold tracking-wide text-cream">
                  M
                </span>
              </div>

              <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
                <span className="rounded-full bg-gold px-3 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink">
                  {item.category}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-display text-2xl font-semibold uppercase leading-none tracking-tight text-cream sm:text-[1.65rem]">
                  {item.name}
                </h3>
                <p className="mt-2 font-sans text-sm text-cream/70">{item.meta}</p>
              </div>
            </article>
          ))}
          <div aria-hidden className="w-1 shrink-0 sm:w-2" />
        </div>

        <motion.div
          aria-hidden
          style={{ x: springX, y: springY }}
          animate={{ opacity: showHint && !dragging ? 1 : 0, scale: dragging ? 0.9 : 1 }}
          className="pointer-events-none absolute left-0 top-0 z-20 hidden h-[88px] w-[88px] items-center justify-center rounded-full bg-ink text-cream shadow-[0_12px_40px_rgba(11,36,28,0.35)] md:flex"
        >
          <span className="font-display text-xs font-semibold uppercase tracking-[0.22em]">
            Drag
          </span>
        </motion.div>
      </motion.div>

      <div className="mt-10 flex justify-center px-5">
        <Link
          href="/alquiler"
          className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
        >
          Ver inventario completo
        </Link>
      </div>
    </section>
  );
}
