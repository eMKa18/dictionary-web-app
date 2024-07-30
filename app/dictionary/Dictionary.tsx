"use client";
import { isDictionaryResult, isErrorMessage } from "./dictionary-service";
import { WordSearch } from "./WordSearch";
import { useDictionary } from "../DictionaryContext";
import { Phonetic } from "./Phonetic";
import { Meaning } from "./Meaning";
import { Sources } from "./Sources";
import { ErrorMessage } from "./ErrorMessage";

export const Dictionary = () => {
  const { dictionary } = useDictionary(); // taken from context, it is set by word search component

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <WordSearch />
      {isDictionaryResult(dictionary) ? (
        <>
          <Phonetic dictionary={dictionary} />
          <Meaning dictionary={dictionary} />
          <hr className="w-full text-black mt-4" />
          <Sources dictionary={dictionary} />
        </>
      ) : isErrorMessage(dictionary) ? (
        <ErrorMessage dictionary={dictionary} />
      ) : null}
    </div>
  );
};
