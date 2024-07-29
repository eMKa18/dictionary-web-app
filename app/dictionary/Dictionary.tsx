"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Definition,
  DictionaryResult,
  ErrorMessage,
  getDictionaryForWord,
  isDictionaryResult,
  isErrorMessage,
  Meaning,
  PhoneticAudio,
  Source,
  Synonym,
} from "./dictionary-service";

export const Dictionary = () => {
  const [dictionary, setDictionary] = useState<
    DictionaryResult | ErrorMessage | null
  >(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDictionaryData = async () => {
      try {
        const result = await getDictionaryForWord("keyboard");
        setDictionary(result);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Failed to fetch dictionary data:", error);
        setLoading(false); // Ensure loading is set to false even if there is an error
      }
    };

    fetchDictionaryData();
  }, []);

  const hasAudioPhonetic = (dictionary: DictionaryResult) => {
    if (dictionary.phonetics?.length > 0) {
      return (
        dictionary.phonetics.find(
          (phoneticAudio: PhoneticAudio) => phoneticAudio.audio !== "",
        ) !== undefined
      );
    }
    return false;
  };

  if (loading) {
    return <div>Loading...</div>; // Render loading state
  }
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <div className="relative w-full z-0">
        <input className="w-full bg-input dark:bg-input-dark p-4 rounded-2xl"></input>
        <button
          className="absolute inset-y-0 right-0 mr-4 flex items-center justify-center h-full w-10"
          onClick={() => console.log("click!")}
        >
          <img src="/images/icon-search.svg"></img>
        </button>
      </div>
      {loading ? (
        <img
          src="/images/icon-new-window.svg"
          className="ml-2"
          tabIndex={0}
        ></img>
      ) : isDictionaryResult(dictionary) ? (
        <>
          <div className="mt-10 flex items-center justify-between text-left w-full">
            <div>
              <h1 className="font-bold text-5xl mb-4">{dictionary.word}</h1>
              <h2 className="text-active font-medium">{dictionary.phonetic}</h2>
            </div>
            {dictionary.phonetics?.length > 0 &&
              hasAudioPhonetic(dictionary) && (
                <div>
                  <img src="/images/icon-play.svg"></img>
                  {/* How to play aduio??? */}
                </div>
              )}
          </div>

          <ul className="flex flex-col gap-1 justify-center items-start w-full mt-2">
            {dictionary.meanings.map((meaning: Meaning, index: number) => (
              <li
                className="w-full my-4"
                key={`${dictionary.word}-${meaning.partOfSpeech}-meaning-${index}`}
              >
                <div className="flex w-full mb-2">
                  <h3 className="font-bold">{meaning.partOfSpeech}</h3>
                  <div className="w-full text-black h-full border-t border-gray-200 self-center ml-4" />
                </div>
                <h3 className="text-inactive mb-2">Meaning</h3>
                <ul role="list" className="list-disc marker:text-active pl-8">
                  {meaning.definitions.map(
                    (definition: Definition, index: number) => (
                      <li key={`${dictionary.word}-definition-${index}`}>
                        <span>{definition.definition}</span>
                        {definition.example && (
                          <ul className="text-inactive">
                            <li>{definition.example}</li>
                          </ul>
                        )}
                      </li>
                    ),
                  )}
                </ul>
                {meaning.synonyms?.length > 0 && (
                  <div className="flex mt-4">
                    <p className="mr-4">Synonyms</p>
                    <ul className="text-active font-bold flex flex-row">
                      {meaning.synonyms.map(
                        (synonym: Synonym, index: number) => (
                          <li
                            className="mr-1"
                            key={`${dictionary.word}-${meaning.partOfSpeech}-synonym-${index}`}
                          >
                            {synonym}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <hr className="w-full text-black mt-4" />
          <div className="w-full flex pt-4">
            <p className="text-inactive mr-2">Source</p>
            <ul className="w-full">
              {dictionary.sourceUrls?.length > 0 &&
                dictionary.sourceUrls.map((source: Source, index) => (
                  <li key={`${dictionary.word}-source-${index}`}>
                    <Link
                      href={`${source}`}
                      className="underline text-gray-700 dark:text-white flex"
                      target="_blank"
                      tabIndex={-1}
                    >
                      <div>{source}</div>
                      <img
                        src="/images/icon-new-window.svg"
                        className="ml-2"
                        tabIndex={0}
                      ></img>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </>
      ) : isErrorMessage(dictionary) ? (
        <div className="text-red-700 mt-10 w-full text-center">
          {dictionary.message}
        </div>
      ) : null}
    </div>
  );
};
