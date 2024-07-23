"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import "./Navbar.css";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

import { SVGProps } from "react";
const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} {...props}>
    <path
      fill="none"
      stroke={props.stroke || "#838383"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
    />
  </svg>
);
// export { SvgComponent as ReactComponent };
const fullConfig = resolveConfig(tailwindConfig);
const activeColor = fullConfig.theme.colors.active;

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
          <div className="border-r border-gray-500 mx-3 h-8"></div>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className={`toggle-checkbox absolute block w-6 h-6 rounded-full appearance-none cursor-pointer transition-transform duration-200 ease-in-out ${isDarkMode ? " bg-active" : "border-inactive bg-inactive"}`}
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            {/* This makes a background of toggle, trick is that there is no label text, instead we have the span with a dot which is representing a state of selection */}
            <label
              htmlFor="toggle"
              className={`toggle-label block overflow-hidden w-10 h-6 rounded-full cursor-pointer ${isDarkMode ? "bg-active" : "bg-inactive"}`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ease-in-out transform ${
                  isDarkMode ? "translate-x-4" : "translate-x-0"
                }`}
              ></span>
            </label>
          </div>
          {isDarkMode ? <MoonIcon stroke={activeColor} /> : <MoonIcon />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
