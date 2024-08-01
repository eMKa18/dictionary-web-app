"use client";
import { MutableRefObject, useRef } from "react";
import { DictionaryResult } from "./dictionary-service";
import {
  getPhonetic,
  getPhoneticAudio,
  hasAudioPhonetic,
} from "./utils/phonetic";

const Phonetic = ({ dictionary }: { dictionary: DictionaryResult }) => {
  const audioRef: MutableRefObject<any> = useRef();
  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <div className="mt-10 flex items-center justify-between text-left w-full">
      <div>
        <h1 className="font-bold text-5xl mb-4">{dictionary.word}</h1>
        <h2 className="text-active font-medium">{getPhonetic(dictionary)}</h2>
      </div>
      {dictionary.phonetics?.length > 0 && hasAudioPhonetic(dictionary) && (
        <div>
          <button onClick={play} title="Play">
            <img src="/images/icon-play.svg"></img>
            <audio
              src={getPhoneticAudio(dictionary)?.audio}
              ref={audioRef}
            ></audio>
          </button>
        </div>
      )}
    </div>
  );
};

export { Phonetic };
