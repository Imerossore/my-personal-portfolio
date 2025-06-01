"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitch() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder to avoid SSR mismatch
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
      />
      {isDark ? (
        <Moon className="h-5 w-5 text-foreground fill-foreground" />
      ) : (
        <Sun className="h-5 w-5 text-foreground fill-foreground" />
      )}
    </div>
  );
}
