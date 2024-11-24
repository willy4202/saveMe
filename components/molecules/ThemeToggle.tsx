"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Toggle } from "../ui/toggle";
import { Dynamic } from "../templates/dynamic";
import { Button } from "../ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Dynamic>
      <Toggle onClick={handleThemeToggle}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </Toggle>
    </Dynamic>
  );
};

export default ThemeToggle;
