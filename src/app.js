import React from 'react';
import ReactDOM from 'react-dom/client'
import logo from '../assets/logo.png'; // Go up one level to access assets
import HeaderComponent from './Components/HeaderComponent'
import Body from './Components/Body'
import Footer from './Components/Footer'


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

const AppLayout=()=>{
    return(
        <>
        <HeaderComponent/>
        <Body/>
        
        <Footer/>
        </>
    )
}
//header component:



//restaurant cards


//Body component



const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)











