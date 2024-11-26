"use client";

import React from "react";
import ThemeToggle from "../molecules/ThemeToggle";
import { usePathname } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const path = usePathname();
  const isHome = path === "/";

  return (
    <header className="flex justify-between items-center px-4 py-2 md:px-6">
      <nav className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          {!isHome && (
            <Link
              href="/"
              className="text-black dark:text-white text-lg font-bold"
            >
              <ArrowLeftIcon />
            </Link>
          )}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
