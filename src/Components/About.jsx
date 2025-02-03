import { Outlet } from "react-router-dom"
import React from "react"


const About=()=>{

    return(
        <div>
            <h1>this is about us  </h1>
            
        </div>

    )
}

class AboutUs extends React.Component{

    constructor(props){
        super(props);
        console.log("constructor")


    }
    
    componentDidMount(){
        //best place to make an api call

        console.log("component did mount");
    }

    render(){
        console.log("render")
        return <div>
            <h1>this is about us  </h1>
           
        </div>
    }
}



export default About