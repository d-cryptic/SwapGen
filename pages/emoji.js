import React from "react";
import EmojiCard from "../components/Emoji/EmojiCard";

const emoji = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10 my-10">
      <EmojiCard />
      <EmojiCard />
      <EmojiCard />
    </div>
  );
};

export default emoji;
