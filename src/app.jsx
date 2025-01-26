import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client'
import logo from '../assets/logo.png'; // Go up one level to access assets
import HeaderComponent from './Components/HeaderComponent'
import Body from './Components/Body'
import Footer from './Components/Footer';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import About from './Components/About';
import ContactUs from './Components/Contact';
// import Profile from "./Components/Profile"
import ErrorPage from './Components/ErrorPage';
import RestaurantMenu from './Components/RestaurantMenu';
import Profile from "./Components/ProfileClass"
import TryProfile from './Components/TryProfile';
import Shimmer from './Components/Shimmer';

// import Grocery from './Components/Grocery';

//header
            // --logo 
            // --nav items
            //  --cart
        //body
        //   -- search
        //  --resturaent lists
        //  --restuarant cards
            // --image
                // name
                // rating 
                // cuisines  

        //footer
        //  --links
        //  --copyrights


//app layout

//for lazy loading..
const Grocery =lazy(()=> import("./Components/Grocery"));

const AppLayout=()=>{
    return(
        <>
        <HeaderComponent/>
        {/* <About/> */}
        {/* <Body/> */}
        {
            //this is the outlet we have to fill diff pages.

        }
        <Outlet/>
        <Footer/>
        {/* <ContactUs/> */}
        </>
    )
}


//creating routes

const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
        children:[

            {
                //ee children asala enti ante
                //main first unde path / nindi okala /about ki velte em 

            },
            {

                path:"/",
                element:<Body/>,
                errorElement:<ErrorPage/>
        
            },
            {
                path:"about",
                element:<Outlet/>,
                errorElement:<ErrorPage/>,
                children :[
                    {
                        path:"profile",
                        element:<Profile/>,
                        errorElement:<ErrorPage/>

                    },
                    {
                        path:"",
                        element:<About/>,
                        errorElement:<ErrorPage/>

                    }
                ]
        
            },
            {
                path:"/contact",
                element:<ContactUs/>,
                errorElement:<ErrorPage/>
        
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
                errorElement:<ErrorPage/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>,
                errorElement:<ErrorPage/>
            }

        ]
    },
    {
        path:"/about",
        element:<About/>,
        errorElement:<ErrorPage/>

    },
    {
        path:"/contact",
        element:<ContactUs/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/footer",
        element:<Footer/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/grocery",
        element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/restaurant/id",
        element:<RestaurantMenu/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/profile",
        element:<Profile/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/temp",
        element:<TryProfile/>,
        errorElement:<ErrorPage/>
    }

])


//header component:



//restaurant cards


//Body component



const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter}/>)











