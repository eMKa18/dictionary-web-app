"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

import { ModeSwitch } from "./darkmode/ModeSwitch";

const Navbar = () => {
  const [selectedFont, setSelectedFont] = useState("Arial");

  const fonts = ["Arial", "Verdana", "Helvetica", "Times New Roman"];

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
          <ModeSwitch />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
