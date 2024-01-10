import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addchats:(state,action)=>{
            state.messages.splice(20,1);
            state.messages.push(action.payload);
        }
    }

})

export default chatSlice.reducer;
export const {addchats} = chatSlice.actions;