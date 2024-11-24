import React from "react";
import ThemeToggle from "../molecules/ThemeToggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 md:px-6">
      <nav className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <div className="text-black dark:text-white text-lg font-bold">
            Profit Keeper
          </div>
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
