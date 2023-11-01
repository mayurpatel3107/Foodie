import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer"; 
import { swiggy_api_URL } from "../../constants";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper"; // For reusability or readability filterData function is added in Helper.js file of Utils folder
import useResData from "../utils/useResData"; // imported custom hook useResData which gives All Restaurant and  Filtered Restaurant data from swigy api
import useOnline from "../utils/useOnline"; // imported custom hook useOnline which checks user is online or not


// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, FilterRes] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const isOnline = useOnline();
  // if user is not Online then return UserOffline component
  if (!isOnline) {
    return <h1>OOps! something went wrong</h1>
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  // if allRestaurants are empty don't render restaurants cards
  if (!allRestaurants) return <Shimmer />;

  return (
    <>
        <div className="flex justify-center p-3 m-1"> {/* Center the button */}
        <input
          type="text"
          id="search"
          className="bg-white border p-2 rounded-md w-96 focus:outline-none"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-orange-700 text-white rounded hover:bg-orange-600 ml-2" // Adjust styling
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data are fetched then display restaurants cards otherwise display Shimmer UI */}
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  {/* if we click on any restaurant card it will redirect to that restaurant menu page */}
                  <RestaurantCard {...restaurant?.info} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </>
  );
};

export default Body;

