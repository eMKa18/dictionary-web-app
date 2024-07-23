"use client";
import { useState } from "react";

const FontsDropdown = () => {
  const [selectedFont, setSelectedFont] = useState("Arial");

  const fonts = ["Arial", "Verdana", "Helvetica", "Times New Roman"];

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

export { FontsDropdown };
