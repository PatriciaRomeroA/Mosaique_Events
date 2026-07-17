"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease },
  }),
};

const STATS = [
  { value: "120+", label: "Eventos" },
  { value: "850+", label: "Piezas" },
  { value: "08", label: "Años" },
] as const;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-cream pt-28 sm:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,color-mix(in_srgb,var(--gold)_14%,transparent),transparent_50%),radial-gradient(ellipse_at_10%_90%,color-mix(in_srgb,var(--forest)_6%,transparent),transparent_45%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 sm:px-8 sm:pb-14 lg:px-10 lg:pb-16">
        <motion.h1
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display text-[clamp(3.25rem,14vw,9.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.02em] text-ink"
        >
          Creamos
          <br />
          escenarios
          <br />
          <span className="text-gold">inolvidables</span>
        </motion.h1>

        <div className="mt-10 grid items-end gap-8 border-t border-ink/10 pt-8 lg:mt-14 lg:grid-cols-[1fr_1fr_auto] lg:gap-12 lg:pt-10">
          <motion.p
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-md font-sans text-[0.9375rem] leading-relaxed text-ink/70 sm:text-base"
          >
            Alquiler de mobiliario de diseño y planeación integral para bodas,
            corporativos y celebraciones privadas.
          </motion.p>

          <motion.div
            custom={0.45}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-md"
          >
            <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-ink">
              Qué hacemos
            </p>
            <p className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-ink/65 sm:text-base">
              Curamos ambientes, mobiliario y producción para que cada detalle
              eleve la experiencia de tus invitados.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/alquiler"
                className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
              >
                Explorar Catálogo
              </Link>
              <Link
                href="#organizacion"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              >
                Planear mi Evento
              </Link>
            </div>
          </motion.div>

          <motion.div
            custom={0.55}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="rounded-2xl bg-gold px-6 py-5 text-ink shadow-[0_20px_50px_rgba(11,36,28,0.12)] sm:px-8 sm:py-6 lg:-mb-2 lg:min-w-[15.5rem]"
          >
            <ul className="flex gap-6 sm:gap-8 lg:flex-col lg:gap-5">
              {STATS.map((stat) => (
                <li key={stat.label} className="min-w-0">
                  <p className="font-display text-3xl font-semibold leading-none tracking-tight sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ink/65">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
