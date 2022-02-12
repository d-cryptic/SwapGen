import React from "react";
import Modal from "../Modal";

const AbbreviationCard = ({ word, meaning }) => {
  return (
    <div>
      <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {word}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {meaning}
        </p>
      </div>
    </div>
  );
};

export default AbbreviationCard;
