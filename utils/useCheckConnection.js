
import {useState,useEffect} from "react";
const useCheckConnection=()=>{
   
    const[onlineStatus,setOnlineStatus]=useState(true);

    useEffect(() => {
        
        window.addEventListener('offline',()=>{
            setOnlineStatus(false)
        });

        window.addEventListener('online',()=>{
            setOnlineStatus(true)
        })
        
    }, []);
    return onlineStatus;
}

export default useCheckConnection;