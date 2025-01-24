import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import {img_cdn} from "./config"
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {

const { id } = useParams();


// const restaurant=useRestaurantMenu(id);  


const [restaurant, setRestaurant] = useState(null)

useEffect(()=>{
    getRestaurantInfo();
    
},[])

async function getRestaurantInfo() {
    try {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log(json+"hello");
        setRestaurant(json.data.cards[2].card.card.info);
    } catch (error) {
        console.error("Error fetching restaurant data:", error);
    }
}




    return (restaurant === null) ? <Shimmer /> : (
        <>
        <h1>Restaurant id: {restaurant.id}</h1>
        <h1>{restaurant.name}</h1>
        <img src={img_cdn + restaurant.cloudinaryImageId} alt={restaurant.name} />
        <h3>{restaurant.avgRating} Stars</h3>
        <h3>Cost for Two: {restaurant.costForTwo}</h3>
        </>
    )
}

export default RestaurantMenu