"use client";
import { createContext, useContext, useState } from "react";

interface FontContextType {
  font: string;
  setFont: (font: string) => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
};

export const FontProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [font, setFont] = useState("serif");
  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
};
