export const Dictionary = () => {
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
      <div className="mt-10 flex items-start text-left w-full border border-red-500">
        <h1 className="font-bold">Word {"   "}</h1>
      </div>
      <h2>phonetic</h2>
      <ul>
        <li>
          <h3>part of speech - noun</h3>
          <h3>Meaning</h3>
          <ul>
            <li>Meaning 1</li>
            <li>Meaning 2</li>
            <li>Meaning 3</li>
          </ul>
        </li>
        <li>
          <h3>part of speech - verb</h3>
          <h3>Meaning</h3>
          <ul>
            <li>Meaning 1</li>
            <li>Meaning 2</li>
            <li>Meaning 3</li>
          </ul>
        </li>
      </ul>
      <br />
      <div>Link to source</div>
    </div>
  );
};
