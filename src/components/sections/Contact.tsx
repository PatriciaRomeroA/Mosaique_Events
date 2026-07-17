"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AtSign, Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT, SOCIAL, whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

const QUICK_INTENTS = [
  {
    id: "alquiler",
    label: "Alquiler de equipo",
    message:
      "Hola, quiero cotizar alquiler de equipo para un evento (sillas, mesas, audio, luces, etc.).",
  },
  {
    id: "organizacion",
    label: "Organización",
    message:
      "Hola, necesito apoyo con la organización / planeación de un evento.",
  },
  {
    id: "ambos",
    label: "Alquiler + organización",
    message:
      "Hola, quiero cotizar alquiler de equipo y organización integral del evento.",
  },
] as const;

const CHANNELS = [
  {
    id: "phone",
    label: "Llamar",
    detail: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phone}`,
    icon: Phone,
    hint: "Habla con el equipo",
  },
  {
    id: "email",
    label: "Email",
    detail: CONTACT.email,
    href: `mailto:${CONTACT.email}?subject=${encodeURIComponent("Cotización Mosaïque Events")}`,
    icon: Mail,
    hint: "Escríbenos directo",
  },
  {
    id: "instagram",
    label: "Instagram",
    detail: "@mosaique.events",
    href: SOCIAL.instagram,
    icon: AtSign,
    hint: "DM o inspírate",
  },
] as const;

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-cream pb-20 pt-28 sm:pb-28 sm:pt-32"
    >
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="font-display text-xs font-medium uppercase tracking-[0.22em] text-gold"
        >
          Contacto
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05, ease }}
          className="mt-3 font-display text-4xl font-semibold uppercase tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Cotiza en un toque
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
          className="mx-auto mt-4 max-w-xl font-sans text-[0.9375rem] leading-relaxed text-ink/60 sm:text-base"
        >
          Sin formularios largos. Elige cómo prefieres hablarnos y te ayudamos
          con tu evento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16, ease }}
          className="mt-10"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "accent", size: "lg" }),
              "h-14 w-full max-w-md gap-3 text-base shadow-[0_16px_40px_rgba(193,161,102,0.35)] sm:h-14"
            )}
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp · Cotizar ahora
          </a>
          <p className="mt-3 font-sans text-xs text-ink/45">{CONTACT.response}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease }}
          className="mt-12"
        >
          <p className="font-display text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
            O elige qué necesitas
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {QUICK_INTENTS.map((intent) => (
              <a
                key={intent.id}
                href={whatsappLink(intent.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink/12 bg-white px-4 py-2.5 font-sans text-sm font-medium text-ink/75 transition-colors hover:border-gold hover:bg-gold/15 hover:text-ink"
              >
                {intent.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.28, ease }}
        className="mx-auto mt-14 grid max-w-4xl gap-3 px-5 sm:mt-16 sm:grid-cols-3 sm:px-8"
      >
        {CHANNELS.map((channel) => {
          const Icon = channel.icon;
          return (
            <a
              key={channel.id}
              href={channel.href}
              target={channel.id === "instagram" ? "_blank" : undefined}
              rel={
                channel.id === "instagram" ? "noopener noreferrer" : undefined
              }
              className="group flex items-center gap-4 rounded-2xl border border-ink/8 bg-white px-5 py-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-[0_16px_40px_rgba(11,36,28,0.08)] sm:flex-col sm:items-start sm:gap-3 sm:px-6 sm:py-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-ink transition-colors group-hover:bg-gold/25">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                  {channel.label}
                </span>
                <span className="mt-1 block truncate font-sans text-sm text-ink/55">
                  {channel.detail}
                </span>
                <span className="mt-1 block font-sans text-xs text-ink/35 sm:mt-2">
                  {channel.hint}
                </span>
              </span>
            </a>
          );
        })}
      </motion.div>

      <p className="mt-10 text-center font-sans text-sm text-ink/45">
        {CONTACT.hours}
      </p>

      <div className="mt-8 flex justify-center">
        <Link
          href="/alquiler"
          className={cn(buttonVariants({ variant: "secondary", size: "default" }))}
        >
          Ver inventario
        </Link>
      </div>
    </section>
  );
}
