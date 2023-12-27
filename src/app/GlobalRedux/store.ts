
 import { configureStore } from "@reduxjs/toolkit";
 import counterReducer from './Features/counter/counterSlice';
import shoppingSlice from "./Features/shoppingSlice"; 
import bagSlice from "./Features/bagActions"

const store = configureStore({
    reducer:{
        counter:counterReducer,
        shopping:shoppingSlice,
        bag:bagSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store