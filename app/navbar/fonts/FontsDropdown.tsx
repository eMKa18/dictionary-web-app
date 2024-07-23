"use client";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { CustomDropdown } from "./CustomDropdown";

const fonts = ["Arial", "Verdana", "Helvetica", "Times New Roman"];
const FontsDropdown = () => {
  const [selectedFont, setSelectedFont] = useState("Arial");

  const handleFontChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedFont(event.target.value);
  };

  return (
    <select
      value={selectedFont}
      onChange={handleFontChange}
      className="bg-transparent rounded -p-12 text-gray-700 mr-4"
    >
      {fonts.map((font) => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
  );
};

const TempFontsDropdown = () => {
  return <CustomDropdown options={fonts} />;
};

export { FontsDropdown, TempFontsDropdown };
