import { useState } from "react"

const Profile=()=>{ 

    const [counter,setCounter]=useState(0);
    
    return(
        <>
        <h1>This is the profile page component</h1>
        <h2>name: Vishnu Vardhan</h2>
        <h2>age: infinity</h2>
        </>
    )
}



export default Profile