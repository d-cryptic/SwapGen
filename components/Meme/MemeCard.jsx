import React from "react";
import MemePopUp from "../Modal";

const MemeCard = ({ image, contextEnglish, contextHindi }) => {
  return (
    <a
      href="#"
      class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 font-medium tracking-tight text-gray-800 dark:text-white">
          {contextEnglish}
        </h5>

        <MemePopUp content={contextHindi} />
      </div>
    </a>
  );
};

export default MemeCard;
