import React from "react";
import Modal from "../Modal";

const TrendCard = ({ image, title, description }) => {
  return (
    <div>
      <div classNameName="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            classNameName="p-8 rounded-t-lg"
            src={image}
            alt="product image"
          />
        </a>
        <div classNameName="px-5 pb-5">
          <a href="#">
            <h3 classNameName="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h3>
          </a>
          <Modal content={description} />
        </div>
      </div>
    </div>
  );
};

export default TrendCard;
