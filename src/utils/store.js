import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchitemSlice from "./searchitemSlice";

const store = configureStore({
     reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatSlice,
        searchitem:searchitemSlice
     }
})

export default store;