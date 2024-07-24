import React, { useRef, useState, useEffect, MutableRefObject } from "react";
import { DropdownArrowIcon } from "./DropdownArrowIcon";

const CustomDropdown = ({ options }: { options: Array<string> }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef: MutableRefObject<any> = useRef(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const onKeyDown = (event: { keyCode: number }) => {
    if (event.keyCode === 27) {
      // Escape key
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event: { target: any }) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mr-1" ref={dropdownRef}>
      <div
        className="p-2.5 cursor-pointer flex items-center content-between font-bold"
        onClick={toggling}
        onKeyDown={onKeyDown}
        tabIndex={0}
      >
        {selectedOption}
        <DropdownArrowIcon
          className={`w-4 h-4 ml-4 transform ease-linear duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="absolute w-full">
          <ul className="list-none p-0 m-0 rounded-lg shadow-md dark:shadow-none dark:border dark:border-active">
            {options.map((option) => (
              <li
                className="p-2.5 cursor-pointer rounded-lg hover:bg-gray-200 dark:hover:bg-active font-bold"
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
