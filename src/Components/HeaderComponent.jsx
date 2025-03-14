import { useState,useContext} from 'react';
import { restuarantList } from './config';
import { Link } from 'react-router-dom';
import About from './About';
import UserContext from '../../utils/UserContext';
// import useCheckConnection from "../utils/useCheckConnection";
import { useSelector } from 'react-redux';

export function filterData(searchText,restuarantList){
    const Data=restaurants.filter((restaurant)=>{
        restaurant.info.name.includes(searchText);
    })
    return Data;

}



export function getFilteredData(searchText) {
    return filterData(searchText, restuarantList);
}
const Title=()=>(
    
        <div className='logo'>
                <a
                 onClick={()=>{
                    settitle("home")
                }}
                href="/">
                <img 
               
                src="https://www.foodpanda.com/wp-content/uploads/2023/06/foodpanda_logo_2023.svg" alt="logo" />
                </a>
        </div>
    
)

// const authenticateUser=()=>{
//     //check the authentication
//     // For demonstration purposes, let's assume the user is authenticated if logger is "logout"
//     return logger === "logout";
// }


const HeaderComponent=()=>{

    // const [title,settitle]=useState("Home");
    // let title="Home"
    const [searchText,setSearchText]=useState();
    const [restaurants,setRestaurants]=useState();
    const [logger,setLogger]=useState(true);

    const  {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser)

    const cartItems = useSelector((store) => {
        console.log("Store:", store); // Debug: Log the entire store
        return store.cart.items; // Access the `items` array from the `cart` slice
    });

    // console.log(cartItems)

        return(
            <div className='header'>
                <Title/>
                
                <div className='nav-items'>
                    <ul>
                    {/* <Link to="/">
                    <li>Online Status{}</li>
                    </Link> */}
                    <Link to="/grocery">
                    <li>Grocery</li>
                    </Link>
                    <Link to="/">
                    <li>Home</li>
                    </Link>
                    <Link to="/about">
                    <li >About</li>
                    </Link>
                    <Link to="/cart"><li>Cart({cartItems ? cartItems.length : 0})</li></Link>
                    <Link to="/contact">
                    <li>Contact</li>
                    </Link>

                    <li>Account</li>
                    <button
                    id="location">Choose Location</button>
                    <button 
                    onClick={()=>{
                        const pastBtn = document.getElementById('location');
                        if (pastBtn && pastBtn.tagName !== 'INPUT') {
                            const input = document.createElement('input');
                            input.id = "location";
                            input.placeholder="               Search"
                            pastBtn.replaceWith(input);
                            input.addEventListener('change', (e) => {
                                setSearchText(e.target.value);
                                // console.log(e.target.value);
                                //filter cheyu
                                const filteredData=filterData(searchText,restuarantList)
                                setRestaurants(filterData)
                                //kotha data render cheyu
                            });
                        }
                    }}
                    className='search-btn'>
                        <img id='search-icon' src="https://www.freeiconspng.com/uploads/search-icon-png-5.png" alt="search" />
                    </button>
                   { (logger) ? <button onClick={() => setLogger(false)}>Logout</button> : <button onClick={() => setLogger(true)}>Login</button> }
                   {/* <li>{loggedInUser}</li> */}

                    
    
                    </ul>
                </div>
            </div>
        )
    }


 
export default HeaderComponent;