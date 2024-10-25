// const Shimmer=()=>{
//     return(
//         <img id="loader" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxBcMvqBqxuiOVfffHmYBqWIXPj_33e8wCBA&s" alt="loading hui hui" />
//     )
// }

import { useState } from "react"


const Shimmer=()=>{
    {
        index=1;
    }
    return(
       
        <div id='shimset'>
            
            {Array(10).fill("").map((e)=>  <div key={index++}  id='shimmer'></div>        )    }
        </div>
    )
}
export default Shimmer