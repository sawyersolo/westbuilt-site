export const brand = {
  name: "West Built",
  email: "team@westbuilt.com",
  tagline: "Websites built to last.",
  subtagline:
    "Design and development for small businesses, creatives, and independent teams who want a site that looks solid, loads fast, and doesn’t need constant fixing.",
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Get started", href: "/start", cta: true },
] as const;

export type WorkItem = {
  title: string;
  industry: string;
  image: string;
  href?: string;
};

export const work: WorkItem[] = [
  {
    title: "Klassen Kustom Exteriors",
    industry: "Construction / Contractor",
    image: "/work/kke.png",
  },
  {
    title: "Townfolk",
    industry: "Creative / Artist Management",
    image: "/work/townfolk.png",
  },
  {
    title: "Deaf Dogs",
    industry: "Band / Artist",
    image: "/work/deafdogs.png",
    href: "https://deafdogs.netlify.app/",
  },
];


export const services = [
  "Website design & development",
  "Mobile-first layouts",
  "Portfolio & gallery builds",
  "Business and contact systems",
  "Site refreshes & rebuilds",
  "Ongoing updates and support (optional)",
];

export type Package = {
  name: string;
  description: string;
  bullets: string[];
  emphasis?: "recommended";
};

export const packages: Package[] = [
  {
    name: "Starter",
    description: "For a simple, professional online presence.",
    bullets: ["1–3 pages", "Mobile-friendly layout", "Contact or inquiry form", "Fast turnaround"],
  },
  {
    name: "Standard",
    description: "For growing businesses and creatives.",
    bullets: ["4–6 pages", "Gallery, work, or portfolio sections", "SEO-ready structure", "Intake + launch support"],
    emphasis: "recommended",
  },
  {
    name: "Custom",
    description: "For tailored or more complex needs.",
    bullets: ["Custom layout & components", "Integrations or advanced features", "Flexible scope", "Ongoing support available"],
  },
];

export const processSteps = [
  {
    title: "Intake",
    text: "Answer a short set of questions about your business, goals, and timeline.",
  },
  {
    title: "Build",
    text: "Design and development happen in stages, with clear review points.",
  },
  {
    title: "Launch",
    text: "Final checks, deployment, and handoff — no loose ends.",
  },
];

export const audiences = [
  "Contractors & trades",
  "Bands & artists",
  "Small businesses",
  "Independent professionals",
];

export const intakeOptions = {
  needs: [
    "New website",
    "Redesign / refresh",
    "Landing / sales page",
    "Portfolio / gallery",
    "Booking / inquiry system",
    "Ongoing support",
  ],
  timeline: ["ASAP", "2–4 weeks", "1–2 months", "Flexible"] as const,
  budget: ["< $1k", "$1k–$2.5k", "$2.5k–$5k", "$5k+"] as const,
  industry: [
    "Construction / trades",
    "Music / artist",
    "Retail / e-commerce",
    "Hospitality",
    "Professional services",
    "Other",
  ] as const,
};
