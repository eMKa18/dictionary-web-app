import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ModeSwitch } from "./darkmode/ModeSwitch";
import { FontsDropdown } from "./fonts/FontsDropdown";

const Navbar = () => {
  const fonts = ["Serif", "Sans", "Mono"];
  return (
    <div className="flex justify-center w-full pt-10 pb-10">
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
          <FontsDropdown options={fonts} />
          <div className="border-r border-gray-200 dark:border-white mx-3 h-8"></div>
          <ModeSwitch />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
