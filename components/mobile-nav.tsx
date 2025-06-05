"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { NAV_ALL_SECTION_IDS, NAV_SECTIONS } from "@/lib/contants";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_ALL_SECTION_IDS);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="block md:hidden">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            aria-label="Toggle Menu"
            className="cursor-pointer flex items-center"
          >
            <Menu className="w-6 h-6" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-56 p-2 space-y-2">
          {NAV_SECTIONS.map((section) =>
            section.type === "link" ? (
              <Link
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                className={cn(
                  "block px-3 py-2 rounded text-sm",
                  activeSection === section.id
                    ? "bg-muted text-primary font-medium"
                    : "text-foreground hover:bg-accent"
                )}
              >
                {section.label}
              </Link>
            ) : (
              <Accordion
                key={section.id}
                type="single"
                collapsible
                className="rounded"
              >
                <AccordionItem value={section.id}>
                  <AccordionTrigger className="px-3 py-2 text-sm">
                    {section.label}
                  </AccordionTrigger>
                  <AccordionContent className="pl-3">
                    {section.items.map((item) => (
                      <Link
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                        className={cn(
                          "block px-3 py-2 text-sm rounded",
                          activeSection === item.id
                            ? "bg-muted text-primary font-medium"
                            : "hover:bg-accent"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}
