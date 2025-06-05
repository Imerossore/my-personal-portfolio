export const SITE_TITLE = "Raymond – Web Developer Portfolio";
export const SITE_DESCRIPTION =
  "Portfolio of Imerossore, a modern web developer specializing in Next.js, React, ShadCN, and Tailwind CSS. Explore projects, skills, and contact info.";
export const NAME = "Raymond";

export const NAV_SECTIONS = [
  { id: "hero", label: "Home", type: "link" },
  { id: "about", label: "About", type: "link" },
  {
    id: "projects",
    label: "Projects",
    type: "link",
  },
  {
    id: "expertise",
    label: "Expertise",
    type: "dropdown",
    items: [
      { id: "certificates", label: "Certificates" },
      { id: "skills", label: "Skills" },
    ],
  },
  {
    id: "connect",
    label: "Connect",
    type: "dropdown",
    items: [
      { id: "testimonials", label: "Testimonials" },
      { id: "contact", label: "Contact" },
    ],
  },
] as const;

export const NAV_ALL_SECTION_IDS = [
  "hero",
  "about",
  "projects",
  "certificates",
  "skills",
  "testimonials",
  "contact",
];
