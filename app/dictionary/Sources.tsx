import Link from "next/link";
import {
  DictionaryResult,
  Source,
  Sources as SourcesType,
  Word,
} from "./dictionary-service";

const Sources = ({ dictionary }: { dictionary: DictionaryResult }) => {
  const { sourceUrls, word }: { sourceUrls: SourcesType; word: Word } = {
    ...dictionary,
  };

  return (
    <div className="w-full flex pt-4">
      <p className="text-inactive mr-2">Source</p>
      <ul className="">
        {sourceUrls?.length > 0 &&
          sourceUrls.map((source: Source, index) => (
            <li key={`${word}-source-${index}`}>
              <Link
                href={`${source}`}
                className="underline text-gray-700 dark:text-white flex"
                target="_blank"
                tabIndex={0}
              >
                <div>{source}</div>
                <img src="/images/icon-new-window.svg" className="ml-2"></img>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { Sources };
