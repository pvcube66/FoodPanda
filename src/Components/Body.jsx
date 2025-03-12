import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const RestaurantCardOpened = withOpenLabel(RestaurantCard);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.9324914&lng=83.42679729999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      if (!response.ok) throw new Error("Failed to fetch data");

      const newData = await response.json();
      const restaurantsData = newData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      const restaurantsData2 = newData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setRestaurants(restaurantsData || restaurantsData2 || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  return restaurants.length === 0 ? <Shimmer /> : (
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
