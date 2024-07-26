export const Dictionary = () => {
  return (
    <div className="flex justify-center flex-col w-full">
      <input className="w-full m-4 bg-input dark:bg-input-dark p-4 rounded-2xl"></input>
      <img src="/images/icon-search.svg"></img>
      <h1>Word {"   "}</h1>
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
