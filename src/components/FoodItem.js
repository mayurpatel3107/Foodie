import React from "react";
import { ITEM_IMG_CDN_URL } from "../../constants";

const FoodItem = ({
  name, imageId, description,price,
}) => {
  return (
    <div className="w-72  p-4 m-4 shadow-lg rounded-lg bg-white">
      <div className="relative h-44">
        <img
          src={ ITEM_IMG_CDN_URL+ imageId}
          alt={name}
          className="rounded-t-lg w-full h-full object-cover"
        />
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-xl text-light-text-title">{name}</h2>
        <h3>{description}</h3>
       <h3>Rupees:{price/100}</h3>
      </div>
    </div>
  );
};

export default FoodItem;
