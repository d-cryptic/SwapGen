import React from "react";
import MemeCard from "../components/Meme/MemeCard";
import MemePopUp from "../components/Meme/MemePopUp";

const memes = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10 my-10">
      <MemeCard />
      <MemeCard />
      <MemeCard />
    </div>
  );
};

export default memes;
