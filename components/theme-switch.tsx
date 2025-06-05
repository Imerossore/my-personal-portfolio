"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { Label } from "./ui/label";

export function ThemeSwitch() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 h-8 w-12 rounded bg-muted animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle dark mode"
        id="theme-switch"
        className="cursor-pointer data-[state=checked]:bg-secondary [&[data-state=checked]_[data-slot=switch-thumb]]:!bg-foreground"
      />
      <Label htmlFor="theme-switch" className="cursor-pointer">
        {isDark ? (
          <Moon className="h-5 w-5 text-foreground fill-foreground" />
        ) : (
          <Sun className="h-5 w-5 text-foreground fill-foreground" />
        )}
      </Label>
    </div>
  );
}
