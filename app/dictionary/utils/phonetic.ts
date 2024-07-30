import { DictionaryResult, PhoneticAudio } from "../dictionary-service";

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

const getPhonetic = (dictionary: DictionaryResult) => {
  if (dictionary.phonetic) return dictionary.phonetic;
  const phoneticWithAudio = dictionary.phonetics.find(
    (phoneticAudio: PhoneticAudio) => phoneticAudio.audio !== "",
  );
  if (!phoneticWithAudio) return dictionary.phonetics[0].text;
  return phoneticWithAudio.text;
};

export { getPhonetic, hasAudioPhonetic };
