"use client";
import { createContext, useContext, useState } from "react";
import {
  DictionaryResult,
  ErrorMessage,
} from "./dictionary/dictionary-service";

interface DictionaryContextType {
  dictionary: DictionaryResult | ErrorMessage | null | undefined;
  setDictionary: (dictionary: DictionaryResult | ErrorMessage) => void;
}

const DictionaryContext = createContext<DictionaryContextType | undefined>(
  undefined,
);

export const useDictionary = () => {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
};

export const DictionaryProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [dictionary, setDictionary] = useState<
    DictionaryResult | ErrorMessage | null
  >();
  return (
    <DictionaryContext.Provider value={{ dictionary, setDictionary }}>
      {children}
    </DictionaryContext.Provider>
  );
};
