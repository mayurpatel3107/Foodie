import React from "react";
import { IMG_CDN_URL } from "../../constants";

const RestaurantCard = ({
  name, cuisines, cloudinaryImageId, costForTwo, avgRatingString, areaName
}) => {
  return (
    <div className="w-72  p-4 m-4 shadow-lg rounded-lg bg-white">
      <div className="relative h-44">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
          className="rounded-t-lg w-full h-full object-cover"
        />
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-xl text-light-text-title">{name}</h2>
        <p className="text-light-text-color text-sm mt-1">{cuisines.join(" , ")}</p>
        <p className="text-light-text-color mt-1">Cost: {costForTwo}</p>
        <p className="text-light-text-color text-sm mt-1">{avgRatingString}</p>
        <p className="text-light-text-color text-sm mt-1">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
