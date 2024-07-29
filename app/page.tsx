"use client";
import { NextFont, NextFontWithVariable } from "next/dist/compiled/@next/font";
import { useFont } from "./FontContext";
import { FontKey, fontsmap } from "./fonts";
import Navbar from "./navbar/Navbar";
import { Dictionary } from "./dictionary/Dictionary";
import { DictionaryProvider } from "./DictionaryContext";

export default function Home() {
  const { font } = useFont();
  const selectedFont: NextFont | NextFontWithVariable =
    fontsmap[font as FontKey];
  return (
    <main
      className={`w-1/2 flex flex-col items-center mobile ${selectedFont.className}`}
    >
      <Navbar></Navbar>
      <DictionaryProvider>
        <Dictionary />
      </DictionaryProvider>
    </main>
  );
}
