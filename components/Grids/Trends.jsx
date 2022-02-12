import React, { useState } from "react";
import TrendCard from "../Trends/TrendCard";
import TrendsData from "../Trends/TrendsData";

const Emoji = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10 my-10">
      {TrendsData.map((trend) => {
        return (
          <TrendCard
            title={trend.title}
            description={trend.description}
            image={trend.image}
          />
        );
      })}
    </div>
  );
};

export default Emoji;
