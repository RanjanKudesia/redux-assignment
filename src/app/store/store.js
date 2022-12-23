import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../functions/cart/cartSlice';



const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});


export default store;