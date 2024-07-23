import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";

const Dropdown = ({ options }: { options: Array<string> }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectWidth, setSelectWidth] = useState("auto");
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectRef.current) {
      const tempOption = document.createElement("span");
      tempOption.textContent = selectedOption;
      tempOption.style.display = "inline-block";
      document.body.appendChild(tempOption);
      const width = tempOption.offsetWidth;
      document.body.removeChild(tempOption);
      setSelectWidth(`${width + 30}px`); // +30px for arrow
    }
  }, [selectedOption]);

  return (
    <select
      ref={selectRef}
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
      style={{ width: selectWidth }}
      className="select-with-svg-arrow"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
