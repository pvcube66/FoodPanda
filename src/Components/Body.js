import { useState } from 'react';
// import { restuarantList} from './config';
import  RestaurantCard  from './RestaurantCard';
import { useState } from 'react';
import { getFilteredData } from './HeaderComponent';



const Body=()=>{


{
  //here the first one should be the variable name the second should be the function which is used to modify the variable
  // let [searchText,setSearchText]=useState();
  // the above is similar to declaring a variable without initializing
  // eg: const searchText


}

  // let [searchText,setSearchText]=useState("");
//here the parameter in useState is the default value set to the searchText variable and the setSearchText is the function


// let [searchClicked,setSearchClicked]=useState("false");
// const [restaurants,setRestaurants]=useState(restuarantList);


    return (
    
        <div className='body'>
       
          {
            restuarantList.map((restaurant)=>{
                return <RestaurantCard props={restaurant} key={restaurant.info.id} />
            })
          }

        </div>

    )
}
export default Body