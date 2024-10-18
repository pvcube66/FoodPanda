import { useState,useEffect } from 'react';
import { restuarantList } from './config';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
// import { getFilteredData } from './HeaderComponent';

export function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  // const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=>{
    getRestaurants()
  },[])
 
  console.log("pavuuuu");

  //if restaurants is empty => shimmer ui
  // if restaurant has data => actual data ui
  
  async function getRestaurants() {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.9324914&lng=83.42679729999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // console.log(response)
    const newData = await response.json();
    console.log(newData);
    const restaurantsData = newData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const restaurantsData2=newData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    if (restaurantsData) {
      // const limitedRestaurants = restaurantsData.slice(0, 8);
      setRestaurants(restaurantsData);
    }
    else if(restaurantsData2){
      setRestaurants(restaurantsData2);

    } 
    else {
      console.error("Failed to fetch restaurants data");
    }
  }
  return (restaurants.length===0)?<Shimmer/> : (
    <>
   

      <div className='body'>
        {restaurants.map((restaurant) => (
          <RestaurantCard props={restaurant} key={restaurant.info.id} />
        ))}
      </div> 
    </>
  );
}

export default Body;
