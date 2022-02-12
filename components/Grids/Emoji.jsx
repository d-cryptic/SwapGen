import React, { useState } from "react";
import EmojiCard from "../Emoji/EmojiCard";
import EmojiData from "../Emoji/EmojiData";

const Emoji = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10 my-10">
      {EmojiData.map((emoji) => {
        console.log(emoji.emoji);
        return (
          <EmojiCard
            image={emoji.emoji}
            emotion={emoji.emotion}
            meaning={emoji.meaning}
          />
        );
      })}
    </div>
  );
};

export default Emoji;
