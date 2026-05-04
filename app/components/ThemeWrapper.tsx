"use client";

import { useEffect } from "react";
import { useThemeLocal } from "@/app/hooks/useThemeLocal";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeLocal();

  useEffect(() => {
    // Apply theme class to html element
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
}
