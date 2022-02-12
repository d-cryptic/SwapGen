import React from "react";
import MemeCard from "../Meme/MemeCard";
import MemesData from "../Meme/MemeData";

const memes = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-10 mx-10 my-10">
      {MemesData.map((meme) => {
        return (
          <MemeCard
            image={meme.memeURL}
            contextEnglish={meme.contextEnglish}
            contextHindi={meme.contextHindi}
          />
        );
      })}
    </div>
  );
};

export default memes;
