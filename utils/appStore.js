import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

//each slice will have a small reducers
//the reducer in the configureStore is a collection of all the reducers 

const appStore=configureStore({
    reducer:{
        //for each slice we will have a different reducer
        cart:cartReducer
    }
});
export default appStore;
