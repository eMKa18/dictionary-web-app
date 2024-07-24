"use client";
import { CustomDropdown } from "./CustomDropdown";

const FontsDropdown = ({ fonts }: { fonts: Array<string> }) => {
  return <CustomDropdown options={fonts} />;
};

export { FontsDropdown };
