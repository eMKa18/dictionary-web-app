import React, { useState } from "react";
import "./Dropdown.css";
import { DropdownArrowIcon } from "./DropdownArrowIcon";

const CustomDropdown = ({ options }: { options: Array<string> }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 27) {
      // Escape key
      setIsOpen(false);
    }
  };

  return (
    <div className="dropdown-container">
      <div
        className="dropdown-header"
        onClick={toggling}
        onKeyDown={onKeyDown}
        tabIndex={0}
      >
        {selectedOption}
        <DropdownArrowIcon
          className={`dropdown-arrow ${isOpen ? "rotate" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list">
            {options.map((option) => (
              <li
                className="dropdown-list-item"
                onClick={onOptionClicked(option)}
                key={option}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { CustomDropdown };
