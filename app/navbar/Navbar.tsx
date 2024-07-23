"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Arial");

  const fonts = ["Arial", "Verdana", "Helvetica", "Times New Roman"];

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  const handleFontChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedFont(event.target.value);
  };

  return (
    <div className="flex justify-center w-full">
      <nav className="w-1/2 flex justify-between items-center nav-mobile">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="mr-auto"
          />
        </Link>
        <div className="flex items-center">
          <select
            value={selectedFont}
            onChange={handleFontChange}
            className="bg-transparent border border-gray-300 rounded p-1 text-gray-700 mr-4"
          >
            {fonts.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
          <div className="border-r border-gray-300 mx-3 h-6"></div>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
            <span
              className={`absolute top-0 left-0 w-6 h-6 rounded-full transition-transform duration-200 ease-in-out transform ${
                isDarkMode
                  ? "translate-x-full bg-blue-600"
                  : "translate-x-0 bg-gray-400"
              }`}
            ></span>
          </div>
          {isDarkMode ? (
            <FiMoon className="text-yellow-500" size={24} />
          ) : (
            <FiSun className="text-gray-500" size={24} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
