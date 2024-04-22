import {createSlice} from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:
    {

        // reducer functions always take two parameters i.e state and action
        add:(state,action)=>{
            // jo bhi input parameters we gave to add is here represented by the payload
            state.push(action.payload);
        },

        remove:(state,action)=>{
            // removing using the filter method
            // so this basically implies that now the state will hold only those elements whose id is not equal to the payload provided
            // this function basically returns us a new state where id of elements in it is not equal to the payload
            return state.filter( (item) => item.id !== action.payload );
        },
    }
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;
