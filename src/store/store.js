import { configureStore } from "@reduxjs/toolkit";
import recipe_slice from "./recipe_slice";

const store=configureStore({
    reducer:{
        recipe_slice
    }
})
export default store