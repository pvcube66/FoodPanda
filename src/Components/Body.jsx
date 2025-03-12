import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { withOpenLabel } from "./RestaurantCard";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  const RestaurantCardOpened = withOpenLabel(RestaurantCard);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch("/api/swiggy"); // Calls the Vercel proxy
      if (!response.ok) throw new Error("Failed to fetch data");

      const newData = await response.json();
      const restaurantsData =
        newData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurants(restaurantsData || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {restaurants.map((restaurant) => (
        <Link to={"restaurant/" + restaurant.info.id} key={restaurant.info.id}>
          {restaurant?.info?.isOpen ? (
            <RestaurantCardOpened props={restaurant} />
          ) : (
            <RestaurantCard props={restaurant} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default Body;
