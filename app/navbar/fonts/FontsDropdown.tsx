"use client";
import React, { useRef, useState, useEffect, MutableRefObject } from "react";
import { DropdownArrowIcon } from "./DropdownArrowIcon";
import { modulo } from "@/app/utils/math";
import { useFont } from "@/app/FontContext";

const FontsDropdown = ({
  fonts,
}: {
  fonts: { name: string; font: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(fonts[0]);
  /* Needed for decision on what item in the list focus on, accorrding to WAI-ARIA arrow down should open menu and focus on first element on the list, arrow up should open menu and focus on last element of the list */
  const [arrowPressedOnContainer, setArrowPressed] = useState("");
  const dropdownRef: MutableRefObject<any> = useRef(null);
  const itemRefs: MutableRefObject<MutableRefObject<any>[]> = useRef(
    fonts.map(() => React.createRef()),
  );
  const { setFont } = useFont();
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: { name: string; font: string }) => () => {
    setSelectedOption(value);
    setFont(value.name.toLowerCase());
    setIsOpen(false);
  };

  const focusOnFirstItem = () => {
    if (isOpen && itemRefs.current[0]) itemRefs.current[0].current.focus();
  };

  const focusOnLastItem = () => {
    if (isOpen && itemRefs.current[fonts.length - 1])
      itemRefs.current[fonts.length - 1].current.focus();
  };

  const focusOnDropdown = () => {
    if (!isOpen && dropdownRef.current) dropdownRef.current.focus();
  };

  const focusOnNextItem = (index: number) => {
    const nextIndex = modulo(index + 1, fonts.length);
    itemRefs.current[nextIndex].current.focus();
  };

  const focusOnPrevItem = (index: number) => {
    const nextIndex = modulo(index - 1, fonts.length);
    itemRefs.current[nextIndex].current.focus();
  };

  const onKeyDownContainer = (event: { keyCode: number }) => {
    switch (event.keyCode) {
      case 27 /* ESC */:
        setIsOpen(false);
        break;
      case 32 /* Space */:
      case 40 /* Arrow Down */:
      case 13 /* Enter */:
        setArrowPressed("down");
        setIsOpen(true);
        break;
      case 38 /* Arrow Up */:
        setArrowPressed("up");
        setIsOpen(true);
        break;
      case 9 /* Tab */:
        setIsOpen(false);
        break;
    }
  };

  const onKeDownItem = (index: number) => (event: { keyCode: number }) => {
    switch (event.keyCode) {
      case 27 /* ESC */:
        setIsOpen(false);
        break;
      case 40 /* Arrow Down */:
        focusOnNextItem(index);
        break;
      case 38 /* Arrow Up */:
        focusOnPrevItem(index);
        break;
      case 36 /* Home */:
        focusOnFirstItem();
        break;
      case 35 /* End */:
        focusOnLastItem();
        break;
      case 13 /* Enter */:
        setSelectedOption(fonts[index]);
        setIsOpen(false);
        break;
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

  useEffect(() => {
    arrowPressedOnContainer === "down" ? focusOnFirstItem() : focusOnLastItem();
  }, [isOpen, arrowPressedOnContainer]);

  useEffect(() => {
    focusOnDropdown();
  }, [isOpen]);

  return (
    <div className="relative mr-1 z-[1000]">
      <div
        ref={dropdownRef}
        className="p-2.5 cursor-pointer flex items-center content-between font-bold"
        onClick={toggling}
        onKeyDown={onKeyDownContainer}
        tabIndex={0}
        role="button"
      >
        {selectedOption.name}
        <DropdownArrowIcon
          className={`w-4 h-4 ml-4 transform ease-linear duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="absolute w-full">
          <ul className="list-none p-0 m-0 rounded-lg shadow-md dark:shadow-none dark:border dark:border-active bg-white dark:bg-black">
            {fonts.map((option, index) => (
              <li
                className="p-2.5 cursor-pointer rounded-lg hover:bg-gray-200 dark:hover:bg-active font-bold "
                onMouseDown={onOptionClicked(option)}
                key={option.name}
                onKeyDown={onKeDownItem(index)}
                ref={itemRefs.current[index]}
                tabIndex={0}
                title={option.name}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { FontsDropdown };
