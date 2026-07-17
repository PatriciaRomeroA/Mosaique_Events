import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

type FooterLink = {
  label: string;
  href: string;
};

const ctaLinks = {
  primary: { label: "Inventario", href: "/alquiler" },
  secondary: { label: "Cotizar evento", href: "/contacto" },
} as const;

const contact = {
  address: "Empire State Building, 350 5th Avenue, New York, NY 10118, United States",
  phone: "+15056469494",
  phoneDisplay: "(+1) 5056469494",
  email: "partnership@nova.com",
} as const;

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Pricing", href: "/contacto" },
      { label: "FAQ", href: "/contacto" },
      { label: "Use Cases", href: "/#organizacion" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Support", href: "mailto:partnership@nova.com?subject=Support" },
      { label: "Contact Us", href: "/contacto" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "AI Models", href: "/#organizacion" },
      { label: "Deep Research", href: "/#organizacion" },
      { label: "Smart Summarizer", href: "/#organizacion" },
      { label: "Content Generation", href: "/#organizacion" },
      { label: "Interactive Flashcard", href: "/#organizacion" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/nosotros" },
      { label: "Blog", href: "/" },
      { label: "Careers", href: "mailto:partnership@nova.com?subject=Careers" },
    ],
  },
] as const;

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    mark: "in",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    mark: "f",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    mark: "play",
  },
] as const;

const legalLinks = [
  { label: "Terms of Service", href: "mailto:partnership@nova.com?subject=Terms%20of%20Service" },
  { label: "Privacy Policy", href: "mailto:partnership@nova.com?subject=Privacy%20Policy" },
] as const;

function isInternalHref(href: string) {
  return href.startsWith("/");
}

function FooterAnchor({
  link,
  className,
  children,
}: {
  link: FooterLink;
  className?: string;
  children?: React.ReactNode;
}) {
  if (isInternalHref(link.href)) {
    return (
      <Link href={link.href} className={className}>
        {children ?? link.label}
      </Link>
    );
  }

  const isExternal = link.href.startsWith("http");

  return (
    <a
      href={link.href}
      className={className}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children ?? link.label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-forest text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <section aria-labelledby="footer-cta-title" className="text-center">
          <h2
            id="footer-cta-title"
            className="mx-auto max-w-5xl text-balance font-display text-4xl font-bold leading-[1.12] tracking-normal text-white sm:text-5xl lg:text-[3.75rem]"
          >
            <span className="block sm:whitespace-nowrap">
              ¿Listo para crear un evento
            </span>
            <span className="block">
              inolvidable con Mosaïque?
            </span>
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <FooterAnchor
              link={ctaLinks.primary}
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "h-12 min-w-40 rounded-xl bg-white px-9 text-base font-bold text-forest shadow-[0_0_18px_rgba(255,255,255,0.18)] hover:bg-cream focus-visible:ring-white/60 focus-visible:ring-offset-forest"
              )}
            />
            <FooterAnchor
              link={ctaLinks.secondary}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 min-w-40 rounded-xl border-white/65 px-8 text-base font-bold text-white/80 hover:border-white hover:bg-white/8 hover:text-white focus-visible:ring-white/60 focus-visible:ring-offset-forest"
              )}
            />
          </div>
        </section>

        <div className="mt-20 grid gap-14 lg:mt-24 lg:grid-cols-[minmax(18rem,1fr)_1.65fr] lg:gap-16">
          <section aria-label="Mosaïque contact information" className="flex flex-col">
            <Link href="/" className="inline-flex w-fit items-center">
              <span className="text-4xl font-bold tracking-normal text-white/85">
                Mosaïque
              </span>
            </Link>

            <address className="mt-7 space-y-5 not-italic text-[0.9375rem] leading-relaxed text-white/48">
              <p className="flex max-w-md items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-white/45" />
                <span>{contact.address}</span>
              </p>
              <p className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center gap-3 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
                >
                  <Phone aria-hidden="true" className="h-5 w-5 text-white/45" />
                  {contact.phoneDisplay}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-3 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
                >
                  <Mail aria-hidden="true" className="h-5 w-5 text-white/45" />
                  {contact.email}
                </a>
              </p>
            </address>

            <ul className="mt-12 flex items-center gap-4 lg:mt-auto">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-md text-white/32 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
                  >
                    {social.mark === "play" ? (
                      <span
                        aria-hidden="true"
                        className="ml-0.5 block h-0 w-0 border-y-[0.42rem] border-l-[0.72rem] border-y-transparent border-l-current"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="text-xl font-bold leading-none tracking-normal"
                      >
                        {social.mark}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3 className="font-display text-lg font-bold text-white/85">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <FooterAnchor
                        link={link}
                        className="text-[0.9375rem] font-medium text-white/46 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-white/5 lg:mt-16 lg:flex-row lg:items-center lg:justify-between">
          <div aria-hidden="true" className="hidden lg:block" />
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap gap-x-7 gap-y-3 text-[0.9375rem] font-medium text-white/35">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <FooterAnchor
                    link={link}
                    className="transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/5 px-5 pb-10 pt-10 text-center sm:pb-14">
        <p className="text-sm font-semibold text-white/16 sm:text-base">
          © Copyright 2025 Mosaïque. All rights reserved.
        </p>
        <p
          aria-hidden="true"
          className="pointer-events-none mt-4 select-none overflow-hidden text-center font-display text-[clamp(3.75rem,17vw,15rem)] font-bold leading-none tracking-normal text-white/[0.045]"
        >
          MOSAÏQUE
        </p>
      </div>
    </footer>
  );
}
