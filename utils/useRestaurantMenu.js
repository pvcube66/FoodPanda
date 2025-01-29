import { useEffect, useState } from "react";


const useRestaurantMenu = (id) => {

    //Creating Local state variables
    const [resInfo, setResInfo] = useState(null)
    
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);

        const json = await data.json();

        setResInfo(json.data)
    }

    return resInfo;
}

export default useRestaurantMenu;
