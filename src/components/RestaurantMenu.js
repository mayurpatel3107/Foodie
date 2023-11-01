import React from "react";
import { useParams } from "react-router-dom";
import {
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
  swiggy_menu_api_URL
} from "../../constants";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import useOnline from "../utils/useOnline";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, menuItems] = useResMenu(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

  const dispatch = useDispatch();
  const addFoodItem = (item) =>{
    dispatch(addItem(item));
  }
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Oops! Something went wrong</h1>;
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu bg-white rounded-lg shadow-md p-4">
      <div className="restaurant-summary flex ">
        <img
          className="restaurant-img w-24 h-24 object-cover rounded-md mr-4"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title text-xl font-semibold">
            {restaurant?.name}
          </h2>
          <p className="restaurant-tags text-gray-600">
            {restaurant?.cuisines?.join(", ")}
          </p>
          <div className="restaurant-details flex items-center space-x-2 text-gray-500">
            <div
              className={`restaurant-rating rounded-full px-2 py-1 ${
                restaurant?.avgRating < 4
                  ? "bg-red-400"
                  : restaurant?.avgRating === "--"
                  ? "bg-white border-gray-300"
                  : "bg-green-400"
              }`}
            >
              <i className="fa-solid fa-star text-yellow-400"></i>
              <span className="ml-1">{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content mt-4">
        <div className="menu-items-container">
          <div className="menu-title-wrap flex justify-between items-center">
            <h3 className="menu-title text-lg font-semibold">
              Recommended
            </h3>
            <p className="menu-count text-gray-600">
              {menuItems.length} ITEMS
            </p>
          </div>
          <div className="menu-items-list mt-2">
            {menuItems.map((item) => (
              <div className="menu-item border-b py-4 flex justify-between items-center" key={item?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title text-lg font-semibold">
                    {item?.name}
                  </h3>
                  <p className="item-cost mt-1 text-gray-600">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc mt-2 text-gray-500">
                    {item?.description}
                  </p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img w-16 h-16 object-cover rounded-md"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn mt-2 bg-green-500 text-white px-2 py-1 rounded-md" onClick={() => addFoodItem(item)}>
                    ADD +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
