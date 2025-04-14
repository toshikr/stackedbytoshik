// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-1 rounded-md border border-zinc-600 dark:border-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition text-sm"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
export default ThemeToggle;
