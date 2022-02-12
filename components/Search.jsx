import React, { useState } from "react";
import AbbreviationCard from "./Abbreviation/AbbreviationCard";
import SlangWords from "./Abbreviation/SlangWords";

const Search = () => {
  const [word, setWord] = useState("");
  console.log(word);

  const handleSubmit = (e) => {
    <div classNameName="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-10 mx-10 my-10">
      {SlangWords.filter((slang) => {
        if (word == "") {
          {
            SlangWords.map((term) => {
              return (
                <AbbreviationCard
                  key={term.ID}
                  word={term.slangWords}
                  meaning={term.meaning}
                />
              );
            });
          }
        }
      })}
    </div>;
  };

  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <div className="input-group relative flex flex-wrap items-stretch w-auto mb-4">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none my-5"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
            onChange={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
