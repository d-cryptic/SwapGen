import React from "react";
import AbbreviationCard from "../Abbreviation/AbbreviationCard";

const abbreviation = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10 my-10">
      <AbbreviationCard />
      <AbbreviationCard />
      <AbbreviationCard />
    </div>
  );
};

export default abbreviation;
