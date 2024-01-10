import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleMenu:(state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closetoggleMenu:(state)=>{
            state.isMenuOpen = false
        }
    }



})

export default appSlice.reducer;
export const {toggleMenu,closetoggleMenu} = appSlice.actions;