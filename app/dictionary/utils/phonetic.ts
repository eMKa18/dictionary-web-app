import { Dictionary } from "../Dictionary";
import { DictionaryResult, PhoneticAudio } from "../dictionary-service";

const hasAudioPhonetic = (dictionary: DictionaryResult) => {
  if (dictionary.phonetics?.length > 0) {
    return getPhoneticAudio(dictionary) !== undefined;
  }
  return false;
};

const getPhonetic = (dictionary: DictionaryResult) => {
  if (dictionary.phonetic) return dictionary.phonetic;
  const phoneticWithAudio = getPhoneticAudio(dictionary);
  if (!phoneticWithAudio || !phoneticWithAudio.text)
    return getPhoneticWithText(dictionary)?.text;
  return phoneticWithAudio.text;
};

const getPhoneticWithText = (dictionary: DictionaryResult) => {
  return dictionary.phonetics.find(
    (phoneticAudio: PhoneticAudio) => phoneticAudio.text !== "",
  );
};

const getPhoneticAudio = (dictionary: DictionaryResult) => {
  return dictionary.phonetics.find(
    (phoneticAudio: PhoneticAudio) => phoneticAudio.audio !== "",
  );
};

export { getPhonetic, hasAudioPhonetic, getPhoneticAudio };
