"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const sections = [
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

const allSectionIds = [
  "hero",
  "about",
  "projects",
  "certificates",
  "skills",
  "testimonials",
  "contact",
];

export default function Nav() {
  const activeSection = useScrollSpy(allSectionIds);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const isDropdownActive = (items: readonly { id: string; label: string }[]) =>
    items.some((item) => activeSection === item.id);
  return (
    <nav>
      <ul className="flex items-center space-x-8">
        {sections.map((section) => (
          <li key={section.id}>
            {section.type === "link" ? (
              <Link
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                className={cn(
                  "transition-colors hover:text-primary text-sm",
                  activeSection === section.id
                    ? "text-primary font-semibold"
                    : "text-foreground"
                )}
              >
                {section.label}
              </Link>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "flex items-center gap-1 transition-colors hover:text-primary text-sm outline-0",
                      isDropdownActive(section.items)
                        ? "text-primary font-semibold"
                        : "text-foreground"
                    )}
                  >
                    {section.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {section.items.map((item) => (
                    <DropdownMenuItem key={item.id} asChild>
                      <Link
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                        className={cn(
                          "w-full cursor-pointer",
                          activeSection === item.id && "bg-accent"
                        )}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
