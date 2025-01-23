import {useState,useEffect} from "react";

const useRestaurantData=()=>{
    const [restaurant,setRestaurant]=useState([])

   useEffect(()=>{
    getRestaurantData();
   },[])

   async function getRestaurantData() {
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.9324914&lng=83.42679729999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    const restaurantsData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const restaurantsData2=json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    if (restaurantsData) {
      // const limitedRestaurants = restaurantsData.slice(0, 8);
      setRestaurant(restaurantsData);
    }
    else if(restaurantsData2){
      setRestaurant(restaurantsData2);

    } 
    else {
      console.error("Failed to fetch restaurants data");
    }
    
   }
   return restaurant;
}

export default useRestaurantData;