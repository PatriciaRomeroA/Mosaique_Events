"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/testimonials";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function QuoteMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "font-serif text-4xl leading-none text-gold sm:text-5xl",
        className
      )}
    >
      ”
    </span>
  );
}

function TestimonialCard({
  item,
  active,
  onSelect,
  className,
}: {
  item: Testimonial;
  active: boolean;
  onSelect: () => void;
  className?: string;
}) {
  return (
    <motion.button
      type="button"
      layout
      onClick={onSelect}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.35, ease }}
      aria-pressed={active}
      className={cn(
        "group flex h-full w-full flex-col rounded-[1.75rem] p-6 text-left transition-shadow duration-300 sm:p-8",
        item.dark
          ? "bg-ink text-cream shadow-[0_20px_50px_rgba(11,36,28,0.25)]"
          : "bg-white text-ink shadow-[0_12px_40px_rgba(11,36,28,0.06)]",
        active &&
          (item.dark
            ? "ring-2 ring-gold shadow-[0_24px_60px_rgba(11,36,28,0.35)]"
            : "ring-2 ring-gold/70 shadow-[0_24px_60px_rgba(193,161,102,0.25)]"),
        className
      )}
    >
      {(item.metric || item.metricLabel) && (
        <div className="mb-5 sm:mb-6">
          {item.metric && (
            <p
              className={cn(
                "font-display text-5xl font-semibold leading-none tracking-tight sm:text-6xl",
                item.dark ? "text-gold" : "text-ink"
              )}
            >
              {item.metric}
            </p>
          )}
          {item.metricLabel && (
            <p
              className={cn(
                "mt-2 max-w-[14rem] font-sans text-sm leading-snug sm:text-[0.9375rem]",
                item.dark ? "text-cream/70" : "text-ink/55"
              )}
            >
              {item.metricLabel}
            </p>
          )}
        </div>
      )}

      <QuoteMark className={item.dark ? "text-gold" : undefined} />

      <p
        className={cn(
          "mt-3 flex-1 font-sans text-[0.9375rem] leading-relaxed sm:text-base",
          item.dark ? "text-cream/85" : "text-ink/70"
        )}
      >
        {item.quote}
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-current/10 pt-5">
        <Image
          src={item.avatar}
          alt={item.name}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <p
            className={cn(
              "truncate font-sans text-sm font-semibold",
              item.dark ? "text-cream" : "text-ink"
            )}
          >
            {item.name}
          </p>
          <p
            className={cn(
              "truncate font-sans text-xs sm:text-[0.8125rem]",
              item.dark ? "text-cream/55" : "text-ink/50"
            )}
          >
            {item.role}
          </p>
        </div>
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-[0.65rem] font-semibold tracking-wide",
            item.dark
              ? "bg-cream/10 text-gold"
              : "bg-sand text-ink/70"
          )}
        >
          {item.brand}
        </span>
      </div>
    </motion.button>
  );
}

export function Testimonials() {
  const [activeId, setActiveId] = useState(TESTIMONIALS[0]?.id ?? "");
  const featured = TESTIMONIALS.find((t) => t.featured) ?? TESTIMONIALS[0];
  const rest = TESTIMONIALS.filter((t) => t.id !== featured.id);
  const [wide, smallA, smallB] = rest;
  const active = TESTIMONIALS.find((t) => t.id === activeId) ?? featured;

  return (
    <section id="confianza" className="relative overflow-hidden bg-sand/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="relative inline-flex items-center font-sans text-xs font-medium uppercase tracking-[0.22em] text-gold"
          >
            <span
              aria-hidden
              className="mr-2 inline-block h-2.5 w-2.5 border-l border-t border-gold"
            />
            Testimonios
            <span
              aria-hidden
              className="ml-2 inline-block h-2.5 w-2.5 border-b border-r border-gold"
            />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-4 font-display text-4xl font-semibold uppercase tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            Historias que hablan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="mt-2 font-display text-2xl font-medium uppercase tracking-tight text-ink/35 sm:text-3xl"
          >
            Experiencias reales
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-4 font-sans text-[0.9375rem] leading-relaxed text-ink/60 sm:text-base"
          >
            Toca una tarjeta para destacar la historia. Así se siente trabajar con
            Mosaïque.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, delay: 0.1, ease }}
          className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:grid-rows-[auto_auto]"
        >
          <TestimonialCard
            item={featured}
            active={activeId === featured.id}
            onSelect={() => setActiveId(featured.id)}
            className="lg:row-span-2 min-h-[420px]"
          />

          <div className="grid gap-5">
            {wide && (
              <TestimonialCard
                item={wide}
                active={activeId === wide.id}
                onSelect={() => setActiveId(wide.id)}
              />
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              {smallA && (
                <TestimonialCard
                  item={smallA}
                  active={activeId === smallA.id}
                  onSelect={() => setActiveId(smallA.id)}
                />
              )}
              {smallB && (
                <TestimonialCard
                  item={smallB}
                  active={activeId === smallB.id}
                  onSelect={() => setActiveId(smallB.id)}
                />
              )}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
            className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-ink/8 bg-cream/80 px-5 py-4 text-center sm:flex-row sm:px-6 sm:text-left"
          >
            <p className="font-sans text-sm text-ink/65">
              Destacado:{" "}
              <span className="font-semibold text-ink">{active.name}</span>
              {active.metric ? (
                <>
                  {" "}
                  — {active.metric} {active.metricLabel}
                </>
              ) : null}
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold">
              {TESTIMONIALS.findIndex((t) => t.id === active.id) + 1} /{" "}
              {TESTIMONIALS.length}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
