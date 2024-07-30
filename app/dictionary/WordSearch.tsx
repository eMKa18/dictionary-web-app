"use client";

import { useState } from "react";
import { useDictionary } from "../DictionaryContext";
import { getDictionaryForWord } from "./dictionary-service";

const WordSearch = () => {
  const { setDictionary } = useDictionary();
  const [searchTerm, setSearchTerm] = useState("");

  const searchWord = async (event: {
    target: any;
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    if (!searchTerm.trim()) {
      setDictionary({
        title: "Empty search term",
        message: "Search term cannot be empty!",
        resolution: "Try typing something! ;)",
      });
      return;
    }
    const result = await getDictionaryForWord(
      event.target.elements.search.value,
    );
    setDictionary(result);
  };

  const handleSearchChange = (event: { target: { value: string } }) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className="relative w-full z-0" onSubmit={searchWord}>
      <input
        className="w-full bg-input dark:bg-input-dark p-4 rounded-2xl"
        name="search"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onSubmit={(event) => event.preventDefault()}
        aria-label="search"
        placeholder="Search any word"
      ></input>
      <button
        className="absolute inset-y-0 right-0 mr-4 flex items-center justify-center h-full w-10"
        type="submit"
        aria-label="search"
        role="button"
      >
        <img src="/images/icon-search.svg" alt="Search"></img>
      </button>
    </form>
  );
};

export { WordSearch };
