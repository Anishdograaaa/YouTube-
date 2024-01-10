import { createSlice } from "@reduxjs/toolkit";

const searchitemSlice = createSlice({
    name:"searchitem",
    initialState:{
        searchitem:[]
    },
    reducers:{
        addsearchItems:(state,action) => {
           state.searchitem=action.payload
        }
    }



})

export default searchitemSlice.reducer;
export const {addsearchItems} = searchitemSlice.actions;