import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";

const TryProfile = ()=>{

    async function getuser() {
        const dirty=await fetch("https://api.github.com/users/pvcube66");
        const cleaned=await dirty.json();
        // console.log(cleaned)
        setData(cleaned);
        
        
    }

    const [data,setData]=useState(null);
    useEffect(()=>{
        getuser();
    })
  return data==null?<Shimmer/>:(
    <div>
    <h1>"Profile Class Component"</h1>
    <h1>{data.name }</h1>
    <h1>{data.id }</h1>
    <h1>{data.followers}</h1>
    <img src={data.avatar_url} alt="" /> 

</div>
  )



}
export default TryProfile;