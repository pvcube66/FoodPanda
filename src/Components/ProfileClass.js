import React from "react";
import Shimmer from "./Shimmer.js";
class Profile extends React.Component{

    constructor(props){
        super(props);
        console.log("1")

        this.state = {
            userInfo: null
        };

    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/pvcube66");
        const cleaned= await data.json()
        console.log("2")
        this.setState({
            userInfo:cleaned
        })
        this.timer=setInterval(() => {
            console.log("hi")
        }, (1000));
    }
componentDidUpdate(){
    console.log("3")
}

componentWillUnmount(){
    clearInterval(this.timer)
    console.log("4");

}
    render(){
        //this render method returns some jsx in the class based components
        return this.state.userInfo==null?<Shimmer/>:(
            <div>
                <h1>"Profile Class Component"</h1>
                <h1>{this.state.userInfo.name }</h1>
                <h1>{this.state.userInfo.id }</h1>
                <h1>{this.state.userInfo.followers}</h1>
                <img src={this.state.userInfo.avatar_url} alt="" /> 

            </div>
        )
    }

}

export default Profile;