"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { TEAM } from "@/data/team";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  const mid = Math.floor(TEAM.length / 2);
  const [active, setActive] = useState(mid);
  const member = TEAM[active] ?? TEAM[0];

  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-cream pb-20 pt-28 sm:pb-28 sm:pt-32"
    >
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-1.5 font-sans text-xs text-ink/70 shadow-sm backdrop-blur-sm sm:text-[0.8125rem]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Equipo cercano, de punta a punta
          <Link
            href="/contacto"
            className="font-medium text-gold transition-colors hover:text-gold-muted"
          >
            Cotizar →
          </Link>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="mt-6 font-display text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl md:text-5xl md:leading-[1.1]"
        >
          Un equipo dedicado a tu evento y a cada detalle
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
          className="mx-auto mt-4 max-w-xl font-sans text-[0.9375rem] leading-relaxed text-ink/55 sm:text-base"
        >
          Creativos, logística y coordinación juntos para que el mobiliario y la
          experiencia se sientan impecables de principio a fin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/alquiler"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "gap-2"
            )}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 text-ink">
              <Play className="h-3 w-3 fill-current" />
            </span>
            Ver catálogo
          </Link>
          <Link
            href="/contacto"
            className={cn(buttonVariants({ variant: "accent", size: "lg" }))}
          >
            Empezar ahora
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
        className="relative mx-auto mt-5 max-w-[1100px] sm:mt-6"
      >
        <div className="flex h-[260px] items-start justify-center overflow-hidden px-2 sm:h-[300px] md:h-[340px]">
          <div className="relative flex h-full w-full items-start justify-center pt-2">
            {TEAM.map((person, index) => {
              const offset = index - active;
              const abs = Math.abs(offset);
              const scale = Math.max(0.72, 1 - abs * 0.08);
              const y = abs * 14;
              const x = offset * (abs === 0 ? 0 : 72 + abs * 8);
              const opacity = Math.max(0.35, 1 - abs * 0.18);
              const isActive = index === active;

              return (
                <motion.button
                  key={person.id}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={isActive}
                  aria-label={`${person.name}, ${person.role}`}
                  animate={{
                    x,
                    y,
                    scale,
                    opacity,
                    zIndex: 20 - abs,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  className="absolute top-0 w-[148px] origin-top sm:w-[168px] md:w-[188px]"
                  style={{ zIndex: 20 - abs }}
                >
                  <div
                    className={cn(
                      "relative aspect-[3/4] overflow-hidden rounded-2xl bg-ink/10 transition-shadow duration-300",
                      isActive
                        ? "shadow-[0_28px_60px_rgba(11,36,28,0.28)] ring-2 ring-gold/70"
                        : "shadow-[0_12px_30px_rgba(11,36,28,0.12)]"
                    )}
                  >
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="200px"
                      className={cn(
                        "object-cover object-top transition-[filter] duration-500",
                        isActive ? "grayscale-0" : "grayscale"
                      )}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
                    />
                    <div className="absolute inset-x-2.5 bottom-2.5 rounded-xl border border-cream/20 bg-ink/35 px-3 py-2 text-left backdrop-blur-md sm:inset-x-3 sm:bottom-3 sm:px-3.5 sm:py-2.5">
                      <p className="truncate font-sans text-[0.8125rem] font-semibold text-cream sm:text-sm">
                        {person.name}
                      </p>
                      <p className="truncate font-sans text-[0.65rem] text-cream/70 sm:text-xs">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2">
          {TEAM.map((person, index) => (
            <button
              key={person.id}
              type="button"
              aria-label={`Ver a ${person.name}`}
              onClick={() => setActive(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === active ? "w-6 bg-gold" : "w-1.5 bg-ink/20 hover:bg-ink/35"
              )}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease }}
            className="mx-auto mt-8 grid max-w-3xl gap-5 rounded-[1.5rem] border border-ink/8 bg-white/80 p-5 shadow-[0_16px_50px_rgba(11,36,28,0.06)] backdrop-blur-sm sm:mt-10 sm:grid-cols-[auto_1fr] sm:gap-7 sm:p-7"
          >
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-2xl sm:mx-0 sm:h-24 sm:w-24">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="96px"
                className="object-cover object-top"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-xs font-medium uppercase tracking-[0.22em] text-gold">
                {member.role}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold uppercase tracking-tight text-ink sm:text-3xl">
                {member.name}
              </h3>
              <p className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-ink/65 sm:text-base">
                {member.bio}
              </p>
              <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                {member.focus.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-ink/10 bg-sand/70 px-3 py-1 font-sans text-[0.7rem] font-medium uppercase tracking-[0.12em] text-ink/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
