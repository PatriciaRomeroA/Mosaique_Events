"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-ink/8 bg-cream/90 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 sm:h-[5rem] sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group relative z-10 flex flex-col leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-ink sm:text-xl">
            {SITE.name}
          </span>
          <span className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-gold">
            {SITE.tagline}
          </span>
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-[0.8125rem] font-medium tracking-wide text-ink/65 transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contacto"
            className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
          >
            Cotizar Evento
          </Link>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="relative z-10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="border-t border-ink/8 bg-cream lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-sans text-base tracking-wide text-ink/80 transition-colors duration-300 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-4">
                <Link
                  href="/contacto"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "primary", size: "lg" }),
                    "w-full"
                  )}
                >
                  Cotizar Evento
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
