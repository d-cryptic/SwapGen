import React from "react";
import AbbreviationCard from "../Abbreviation/AbbreviationCard";
import SlangWords from "../Abbreviation/SlangWords";
import Search from "../Search";

const Abbreviation = () => {
  return (
    <>
      <Search />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-10 mx-10 my-10">
        {SlangWords.map((word) => {
          return (
            <AbbreviationCard
              key={word.ID}
              word={word.slangWords}
              meaning={word.meaning}
            />
          );
        })}
      </div>
    </>
  );
};

export default Abbreviation;
