import { DictionaryResult, PhoneticAudio } from "./dictionary-service";
import { getPhonetic, hasAudioPhonetic } from "./utils/phonetic";

const Phonetic = ({ dictionary }: { dictionary: DictionaryResult }) => {
  return (
    <div className="mt-10 flex items-center justify-between text-left w-full">
      <div>
        <h1 className="font-bold text-5xl mb-4">{dictionary.word}</h1>
        <h2 className="text-active font-medium">{getPhonetic(dictionary)}</h2>
      </div>
      {dictionary.phonetics?.length > 0 && hasAudioPhonetic(dictionary) && (
        <div>
          <button>
            <img src="/images/icon-play.svg"></img>
            {/* How to play aduio??? */}
          </button>
        </div>
      )}
    </div>
  );
};

export { Phonetic };
