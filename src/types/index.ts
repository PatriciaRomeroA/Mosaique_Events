export type NavLink = {
  href: string;
  label: string;
};

export type CatalogItem = {
  id: string;
  name: string;
  meta: string;
  category: string;
  image: string;
  alt: string;
  sku: string;
  stock: number;
  featured?: boolean;
};

export type Testimonial = {
  id: string;
  metric?: string;
  metricLabel?: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  brand: string;
  featured?: boolean;
  dark?: boolean;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  focus: string[];
};

export type ServiceNeed = "furniture" | "planning" | "both";

export type QuoteFormData = {
  eventDate: string;
  location: string;
  guests: number;
  need: ServiceNeed | null;
  name: string;
  email: string;
  phone: string;
  details: string;
};
