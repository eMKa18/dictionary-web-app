const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export type Source = string;
export type Sources = Array<Source>;
export type Phonetic = string;
export type Word = string;
export type Synonym = string;
export type Synonyms = Array<Synonym>;

export type PhoneticAudio = {
  audio: string;
  text: string;
  license?: { name: string; url: string };
  sourceUrl?: Source;
};
export type Phonetics = Array<PhoneticAudio>;

export type Definition = {
  definition: string;
  synonyms: Array<any>;
  antonyms: Array<any>;
  example?: string;
};
export type Definitions = Array<Definition>;

export type Meaning = {
  partOfSpeech: string;
  definitions: Definitions;
  synonyms: Synonyms;
  antonyms: Array<any>;
};
export type Meanings = Array<Meaning>;

export type DictionaryResult = {
  phonetic: Phonetic;
  phonetics: Phonetics;
  word: Word;
  sourceUrls: Sources;
  meanings: Meanings;
};

export type ErrorMessage = {
  title: string;
  message: string;
  resolution: string;
};

const isDictionaryResult = (obj: any): obj is DictionaryResult => {
  return (
    obj &&
    typeof obj.phonetic === "string" &&
    Array.isArray(obj.phonetics) &&
    typeof obj.word === "string" &&
    Array.isArray(obj.sourceUrls) &&
    Array.isArray(obj.meanings)
  );
};

const isErrorMessage = (obj: any): obj is ErrorMessage => {
  return (
    obj &&
    typeof obj.title === "string" &&
    typeof obj.message === "string" &&
    typeof obj.resolution === "string"
  );
};

const getDictionaryForWord = async (word: string) => {
  const response = await fetch(`${baseUrl}${word}`);
  const result: Array<DictionaryResult> | ErrorMessage = await response.json();
  if (isErrorMessage(result)) {
    return result as ErrorMessage;
  } else return result[0] as DictionaryResult;
};

export { getDictionaryForWord, isErrorMessage, isDictionaryResult };
