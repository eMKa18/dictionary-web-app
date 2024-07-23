"use client";
import { useTheme } from "next-themes";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

import { MoonIcon } from "./MoonIcon";
import { useEffect, useState } from "react";

const ModeSwitch = () => {
  const defaultStrokeColor = "#838383";
  const fullConfig = resolveConfig(tailwindConfig);
  const activeColor = fullConfig.theme.colors.active;

  const [strokeColor, setStrokeColor] = useState(defaultStrokeColor);

  const { theme, setTheme } = useTheme();
  const isDarkMode = () => theme === "dark";

  useEffect(() => {
    setStrokeColor(isDarkMode() ? activeColor : defaultStrokeColor);
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(isDarkMode() ? "light" : "dark");
  };

  return (
    <>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className={`toggle-checkbox absolute block w-6 h-6 rounded-full appearance-none cursor-pointer transition-transform duration-200 ease-in-out dark:bg-active bg-inactive`}
          checked={isDarkMode()}
          onChange={toggleDarkMode}
        />
        {/* This makes a background of toggle, trick is that there is no label text, instead we have the span with a dot which is representing a state of selection */}
        <label
          htmlFor="toggle"
          className={`toggle-label block overflow-hidden w-10 h-6 rounded-full cursor-pointer dark:bg-active bg-inactive`}
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ease-in-out transform dark:translate-x-4 translate-x-0`}
          ></span>
        </label>
      </div>
      <MoonIcon stroke={strokeColor} />
    </>
  );
};

export { ModeSwitch };
