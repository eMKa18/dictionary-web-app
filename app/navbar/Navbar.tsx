import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ModeSwitch } from "./darkmode/ModeSwitch";
import { FontsDropdown, TempFontsDropdown } from "./fonts/FontsDropdown";

const Navbar = () => {
  return (
    <div className="flex justify-center w-full pt-10">
      <nav className="flex justify-between items-center w-full">
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
          <TempFontsDropdown />
          <div className="border-r border-gray-500 mx-3 h-8"></div>
          <ModeSwitch />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
