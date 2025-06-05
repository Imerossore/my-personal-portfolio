"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { NAV_ALL_SECTION_IDS, NAV_SECTIONS } from "@/lib/contants";

export default function Nav() {
  const activeSection = useScrollSpy(NAV_ALL_SECTION_IDS);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const isDropdownActive = (items: readonly { id: string; label: string }[]) =>
    items.some((item) => activeSection === item.id);

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center space-x-8">
        {NAV_SECTIONS.map((section) => (
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
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className={cn(
                      "flex items-center gap-1 text-sm transition-colors hover:text-primary outline-none",
                      isDropdownActive(section.items)
                        ? "text-primary font-semibold"
                        : "text-foreground"
                    )}
                  >
                    {section.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-40 p-1">
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.id);
                          }}
                          className={cn(
                            "block w-full rounded px-2 py-1.5 text-sm hover:bg-accent transition",
                            activeSection === item.id && "bg-muted text-primary"
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              </Popover>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
