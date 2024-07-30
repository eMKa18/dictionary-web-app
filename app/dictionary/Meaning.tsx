import {
  Definition,
  Synonym,
  Meaning as MeaningType,
  DictionaryResult,
  Meanings,
  Word,
} from "./dictionary-service";

const Meaning = ({ dictionary }: { dictionary: DictionaryResult }) => {
  const { meanings, word }: { meanings: Meanings; word: Word } = {
    ...dictionary,
  };
  return (
    <ul className="flex flex-col gap-1 justify-center items-start w-full mt-2">
      {meanings.map((meaning: MeaningType, index: number) => (
        <li
          className="w-full my-4"
          key={`${word}-${meaning.partOfSpeech}-meaning-${index}`}
        >
          <div className="flex w-full mb-2">
            <h3 className="font-bold">{meaning.partOfSpeech}</h3>
            <div className="w-full text-black h-full border-t border-gray-200 self-center ml-4" />
          </div>
          <h3 className="text-inactive mb-2">Meaning</h3>
          <ul role="list" className="list-disc marker:text-active pl-8">
            {meaning.definitions.map(
              (definition: Definition, index: number) => (
                <li key={`${word}-definition-${index}`}>
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
              <ul className="text-active font-bold flex flex-row flex-wrap">
                {meaning.synonyms.map((synonym: Synonym, index: number) => (
                  <li
                    className="mr-1"
                    key={`${word}-${meaning.partOfSpeech}-synonym-${index}`}
                  >
                    {synonym}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export { Meaning };
