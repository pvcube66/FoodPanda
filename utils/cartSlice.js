import {createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{ 
        items:[]
    },
    reducers:{
        //the state here is the initial state
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items=[];
        }
    }

})

//the createSlice method returns a object to the cartSlice which will have actions and reducer
//{
//
//}

export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;



// import {createSlice} from "@reduxjs/toolkit";

// const cartSlice=createSlice({
//     name:"cart",
//     initialState:{ 
//         items:[]
//     },
//     reducers:{
//         //the state here is the initial state
//         addItem:(state,action)=>{
//             state.items.push(action.payload);
//         },
//         removeItem:(state)=>{
//             state.items.pop();
//         },
//         clearCart:(state)=>{
//             state.items=[];
//         }
//     }

// })

// //the createSlice method returns a object to the cartSlice which will have actions and reducer
// //{
// //
// //}

// export const {addItem,removeItem,clearCart}=cartSlice.actions;

// export default cartSlice.reducer;
