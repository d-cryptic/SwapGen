import React from "react";
import MovieCard from "../Movie/MovieCard";
import TrendCard from "../Trends/TrendCard";

const Trends = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10 my-10">
      <TrendCard />
    </div>
  );
};

export default Trends;
