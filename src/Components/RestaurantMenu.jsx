import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import {img_cdn} from "./config"
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import {RestaurantMenuUrl} from"../../utils/Constants.js";
import RestaurantCategory from "./RestaurantCategory.jsx";


const RestaurantMenu = () => {

const { id } = useParams();

const [menu,setMenu]=useState(null);



const [restaurant, setRestaurant] = useState(null)
// const restaurant=useRestaurantMenu(id);

useEffect(()=>{
    getRestaurantInfo();
    
},[])

async function getRestaurantInfo() {
    try {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log(json+"hello");
        // setRestaurant(json.data.cards[2].card.card.info);
        setRestaurant(json.data);
        console.log(restaurant.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories)
        const filteredItems=restaurant.cards[4].groupedCard.cardGroupMap.REGULAR.cards.map((c)=>c.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
    } catch (error) {
        console.error("Error fetching restaurant data:", error);
    }
}



//restaurant.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories  this is an array of objects

    // return (restaurant === null) ? <Shimmer /> : (
    //     <>
    //     <h1>Restaurant id: {restaurant.cards[2].card.card.info.id}</h1>
    //     <h1>{restaurant.cards[2].card.card.info.name}</h1>
    //     <img src={img_cdn + restaurant.cards[2].card.card.info.cloudinaryImageId} alt={restaurant.name} />
    //     <h3>{restaurant.cards[2].card.card.info.avgRating} Stars</h3>
    //     <h3>Cost for Two: {restaurant.cards[2].card.card.info.costForTwo/100}</h3>
    //     </>
    // )

    return (restaurant==null)?<Shimmer/>:(
        <RestaurantCategory props={restaurant}/>
    )
}

export default RestaurantMenu