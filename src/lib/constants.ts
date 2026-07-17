export const SITE = {
  name: "MOSAÏQUE",
  tagline: "EVENTS",
  fullName: "MOSAÏQUE EVENTS",
  description:
    "Alquiler de mobiliario de diseño y planeación integral de eventos premium.",
  logo: "/images/logo.png",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/alquiler", label: "Alquiler" },
  { href: "/#organizacion", label: "Organización" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const SOCIAL = {
  instagram: "https://instagram.com/mosaique.events",
} as const;

export const CONTACT = {
  whatsapp: "18095551234",
  whatsappDisplay: "+1 (809) 555-1234",
  phone: "+18095551234",
  phoneDisplay: "+1 (809) 555-1234",
  email: "hola@mosaique.events",
  hours: "Lun–Sáb · 9:00 a 18:00",
  response: "Respondemos en menos de 2 horas en horario laboral",
} as const;

export function whatsappLink(message?: string) {
  const text = message ?? "Hola, me interesa cotizar con Mosaïque Events.";
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}

