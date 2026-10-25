export const site = {
  name: "Narayanan M S",
  role: "Software Developer",
  tagline: "I build performant web apps and APIs with React, Next.js, TypeScript, Node.js & Express.",
  location: "Tiruppur, Tamil Nadu — India",
  workMode: "Remote · FULL Creative, Chennai",
  email: "narayanansundar02@gmail.com",
  phone: "+91 8667529688",
  resume:
    "https://drive.google.com/file/d/1n4Xt_SO3RU7_zs6z8b5rh92-qq2MCP2H/view?usp=sharing",
  socials: {
    github: "https://github.com/Narenweb",
    linkedin: "https://www.linkedin.com/in/narayanan-m-s/",
    medium: "https://medium.com/@narayanansundar02",
    freelancer: "https://www.freelancer.com/u/Narayanansundar",
  },
};

export const stats = [
  { label: "Years building for the web", value: "3+" },
  { label: "Brand platforms modernized", value: "8+" },
  { label: "Faster initial load (SSR)", value: "~70%" },
  { label: "Infra cost cut (Cloud Run)", value: "~80%" },
];

export type AboutPhoto = {
  src: string;
  alt: string;
  caption: string;
  landscape?: boolean;
};

export const aboutPhotos: AboutPhoto[] = [
  {
    src: "/images/react-nexus-2026.jpg",
    alt: "Narayanan with fellow developers at React Nexus 2026",
    caption: "React Nexus 2026 · Community",
    landscape: true,
  },
  {
    src: "/images/deep-work.jpg",
    alt: "Narayanan working on a laptop in front of a bookshelf",
    caption: "Heads-down · Shipping",
  },
  {
    src: "/images/full-creative-setmore-wall.jpg",
    alt: "Narayanan in front of the Setmore product wall at the FULL Creative office",
    caption: "FULL Creative · Setmore wall",
  },
  {
    src: "/images/office-stairs.jpg",
    alt: "Narayanan standing by a glass staircase at the office",
    caption: "FULL Creative · Chennai",
  },
  {
    src: "/images/ascendas-it-park-taramani.jpg",
    alt: "Narayanan standing outside Ascendas IT Park in Taramani, Chennai",
    caption: "Ascendas IT Park · Taramani, Chennai",
  },
];

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "SASS",
    "HTML5 / CSS3",
    "Framer Motion",
    "Accessibility",
    "SEO & Core Web Vitals",
  ],
  backend: [
    "Node.js",
    "Express",
    "Payload CMS",
    "REST APIs",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "Google Cloud Run",
    "Google App Engine",
    "CI/CD",
  ],
  tooling: [
    "Turborepo",
    "pnpm workspaces",
    "Multi-tenant monorepos",
    "Jest",
    "React Testing Library",
    "Vitest",
    "Playwright",
    "Webpack",
    "Figma",
    "Cursor / Copilot / Claude",
  ],
};

export const experience = [
  {
    company: "FULL Creative",
    role: "Frontend Engineer",
    period: "May 2025 — Present",
    location: "Chennai · Remote",
    bullets: [
      "Led modernization of 8+ legacy Java/JSP platforms into a Next.js + Payload CMS architecture, including LEX Reception's mega nav, homepage and CMS.",
      "Architected an SSR-driven frontend system that cut initial load time by ~70% across production, using SSR, image optimization and code splitting.",
      "Migrated infrastructure from Google App Engine to Cloud Run for ~80% cost reduction.",
      "Contributed to a multi-tenant Turborepo + pnpm monorepo sharing packages across 8+ brand applications.",
      "Mentored a junior frontend engineer and led code reviews across the team's CMS migration work.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Payload CMS", "Tailwind", "Turborepo", "Cloud Run"],
  },
  {
    company: "FULL Creative",
    role: "Junior Frontend Engineer",
    period: "Apr 2024 — Apr 2025",
    location: "Chennai, India",
    bullets: [
      "Built responsive, production-ready UI from Figma, Adobe XD, PSD and Zipline designs.",
      "Developed reusable React + Tailwind components with modular patterns, reducing duplicate implementation across features.",
      "Implemented SEO-friendly, accessible markup across product surfaces.",
    ],
    stack: ["React", "Next.js", "Tailwind", "JavaScript"],
  },
  {
    company: "FULL Creative",
    role: "Junior Web Developer",
    period: "Sep 2023 — Mar 2024",
    location: "Chennai, India",
    bullets: [
      "Built branding websites and landing pages in HTML, SASS and JavaScript with a focus on performance and responsiveness.",
      "Developed responsive pages, email templates and digital assets optimized for cross-browser and mobile.",
      "Worked closely with designers and backend teams to ship pixel-perfect UI on tight timelines.",
    ],
    stack: ["HTML", "SASS", "JavaScript"],
  },
  {
    company: "FULL Creative",
    role: "Web Development Intern",
    period: "Jun 2023 — Aug 2023",
    location: "Chennai, India",
    bullets: [
      "Built real-world web pages using HTML, CSS, JavaScript and Tailwind.",
      "Learned Git-based workflows and team-based development practices.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Tailwind"],
  },
];

export const education = [
  {
    title: "B.E. Computer Science and Engineering",
    where: "SNS College of Engineering, Coimbatore",
    period: "2019 — 2023",
    note: "CGPA 9.46 / 10",
  },
  {
    title: "Higher Secondary (Computer Science)",
    where: "Prema Matriculation Higher Secondary School",
    period: "2018 — 2019",
    note: "Distinction",
  },
];

export const awards = [
  {
    title: "Impact Player Award",
    where: "FULL Creative",
    period: "2024",
    note: "For ownership, consistent performance and high-impact contributions",
  },
  {
    title: "All-Rounder Performance Award",
    where: "SNS College of Engineering",
    period: "2022",
    note: "Academic and extracurricular excellence",
  },
];

export type Product = {
  slug: string;
  name: string;
  domain: string;
  url: string;
  tagline: string;
  blurb: string;
  contribution: string;
  stack: string[];
  metric?: { value: string; label: string };
  logo?: string;
  // Full-bleed app-icon logos fill the tile instead of sitting on white with padding
  logoFill?: boolean;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "lexreception",
    name: "LEX Reception",
    domain: "lexreception.com",
    url: "https://www.lexreception.com",
    tagline: "24/7 legal receptionists for law firms",
    blurb:
      "Human-only answering, legal intake and appointment scheduling for law firms across every practice area — in English and Spanish.",
    contribution:
      "Own the frontend end-to-end — the mega navigation, the full homepage and the Payload CMS content model that lets marketing ship pages without engineering.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Payload CMS"],
    metric: { value: "Lead", label: "Frontend owner" },
    logo: "/images/logos/lexreception-logo.png",
    logoFill: true,
    featured: true,
  },
  {
    slug: "setmore",
    name: "Setmore",
    domain: "setmore.com",
    url: "https://www.setmore.com",
    tagline: "Online appointment scheduling",
    blurb:
      "Free scheduling platform used by 1M+ small businesses across the world to manage bookings, payments and customer reminders.",
    contribution:
      "Owned key surfaces on the marketing site & in-app dashboards — Next.js rewrites, perf budgets, and a shared design-system migration.",
    stack: ["Next.js", "React", "TypeScript", "SCSS"],
    metric: { value: "1M+", label: "Businesses served" },
    logo: "/images/logos/setmore-logo.png",
  },
  {
    slug: "answerconnect",
    name: "AnswerConnect",
    domain: "answerconnect.com",
    url: "https://www.answerconnect.com",
    tagline: "24/7 live answering service",
    blurb:
      "Premium virtual receptionist service used by enterprises and SMBs across the US, UK & Australia.",
    contribution:
      "Built marketing pages, lead-flow funnels and pricing surfaces. Took Core Web Vitals into the green and tightened the data layer.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
    metric: { value: "+95", label: "Lighthouse perf" },
    logo: "/images/logos/answerconnect-logo.svg",
  },
  {
    slug: "answerforce",
    name: "AnswerForce",
    domain: "answerforce.com",
    url: "https://www.answerforce.com",
    tagline: "Virtual receptionist for tradespeople",
    blurb:
      "Phone answering & live-chat service tailored for HVAC, plumbing, electrical and other home-service businesses.",
    contribution:
      "Rebuilt industry landing pages with reusable components, AB-tested CTAs, and pushed mobile LCP under 2.5s.",
    stack: ["Next.js", "React", "SCSS", "Webpack"],
    metric: { value: "< 2.5s", label: "Mobile LCP" },
    logo: "/images/logos/answerforce-logo.png",
  },
  {
    slug: "serviceforge",
    name: "ServiceForge",
    domain: "serviceforge.com",
    url: "https://www.serviceforge.com",
    tagline: "Field-service management",
    blurb:
      "End-to-end platform for service teams — quotes, dispatch, invoicing & customer comms in one workspace.",
    contribution:
      "Shipped the customer-facing site and chunks of the in-app experience. Set up the component library and shared tokens.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
    metric: { value: "0 → 1", label: "Greenfield build" },
    logo: "/images/logos/serviceforge-logo.png",
    logoFill: true,
  },
];

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  year: string;
  category: "Web App" | "E-commerce" | "Freelance" | "Open Source";
  stack: string[];
  image: string;
  live?: string;
  source?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "yariga",
    title: "Yariga — Real-estate platform",
    blurb:
      "Full-stack property marketplace with agent dashboards, listing CRUD and zero-commission flows.",
    year: "2023",
    category: "Web App",
    stack: ["React", "Refine", "Node.js", "Express", "MongoDB"],
    image: "/projects/yariga.jpg",
    featured: true,
  },
  {
    slug: "fairrate",
    title: "FairRate — Comparison engine",
    blurb:
      "8-page Next.js layout pulling pricing data from REST + JSON sources, designed for instant LCP.",
    year: "2023",
    category: "Web App",
    stack: ["Next.js", "React", "Tailwind", "Webpack"],
    image: "/projects/fairrate.jpg",
    live: "https://fair-rate-web-app.netlify.app/",
    featured: true,
  },
  {
    slug: "nextmail",
    title: "Nextmail — Mail client clone",
    blurb:
      "Gmail-inspired SPA with document workflows, optimistic UI and route-level code-splitting.",
    year: "2023",
    category: "Web App",
    stack: ["React", "SCSS", "Webpack", "JavaScript"],
    image: "/projects/nextmail.jpg",
    live: "https://nextmailweb.netlify.app/",
    featured: true,
  },
  {
    slug: "chat-app",
    title: "Realtime chat UI",
    blurb:
      "Front-end chat experience with channels, typing indicators and accessible keyboard nav.",
    year: "2023",
    category: "Web App",
    stack: ["React", "SCSS", "Webpack"],
    image: "/projects/chat-app.jpg",
    live: "https://chart-webapp-task-12.netlify.app/",
  },
  {
    slug: "omnifood",
    title: "Omnifood — Landing experience",
    blurb:
      "Pixel-perfect responsive marketing site for a health-food delivery brand.",
    year: "2023",
    category: "Freelance",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "/projects/omnifood.jpg",
    live: "https://narenweb.github.io/OminiFood/",
  },
  {
    slug: "weather",
    title: "Realtime weather app",
    blurb:
      "Geo-aware weather dashboard pulling from a public API with graceful offline fallback.",
    year: "2021",
    category: "Web App",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/weather.jpg",
    live: "https://edureka-intership.github.io/2nd-mini-project-weather-app-Narenweb/",
  },
];

export type Article = {
  title: string;
  blurb: string;
  href: string;
  readTime?: string;
  date?: string;
};

// Fallback only — the live list comes from the Medium RSS feed (lib/medium.ts)
export const articles: Article[] = [
  {
    title: "React.js Virtual DOM: An In-Depth Exploration",
    blurb: "How React's virtual DOM, diffing and reconciliation turn state changes into minimal real-DOM updates.",
    href: "https://medium.com/@narayanansundar02/react-js-virtual-dom-an-in-depth-exploration-9f0e9caec7cf",
  },
  {
    title: "Understanding the Temporal Dead Zone (TDZ) in JavaScript",
    blurb: "Why let and const throw before their declaration, and how hoisting really works under the hood.",
    href: "https://medium.com/@narayanansundar02/understanding-the-temporal-dead-zone-tdz-in-javascript-7c0962d7e96c",
  },
  {
    title: "Understanding Next.js Rendering Methods: SSR, CSR, SSG and ISR",
    blurb: "When to reach for each Next.js rendering strategy, and the trade-offs between them.",
    href: "https://medium.com/@narayanansundar02/understanding-next-js-rendering-methods-ssr-csr-ssg-and-isr-7764dedabbe6",
  },
  {
    title: "Understanding Prop Drilling in React and How to Avoid It",
    blurb: "What prop drilling is, why it hurts maintainability, and the patterns that get rid of it.",
    href: "https://medium.com/@narayanansundar02/understanding-prop-drilling-in-react-and-how-to-avoid-it-da2639a9e41a",
  },
];

export const services = [
  {
    title: "CMS migrations",
    body: "Moving legacy sites onto Next.js + Payload CMS so marketing can publish without waiting on engineering — I've led this across 8+ brand platforms.",
    tags: ["Next.js", "Payload CMS", "Content modelling"],
  },
  {
    title: "Performance & Core Web Vitals",
    body: "SSR, image strategy and code splitting that took initial load down ~70%. Measured in production, not just in Lighthouse.",
    tags: ["SSR", "LCP / CLS / TTFB", "SEO"],
  },
  {
    title: "Full-stack web apps",
    body: "React and Next.js front ends backed by Node.js, Express and REST/GraphQL APIs — typed end to end with TypeScript.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Monorepos & cloud delivery",
    body: "Turborepo workspaces that share code across many brands, shipped with Docker to Cloud Run — where we cut infra cost by ~80%.",
    tags: ["Turborepo", "Docker", "Cloud Run", "CI/CD"],
  },
];
