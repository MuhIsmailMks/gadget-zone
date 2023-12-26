'use client'

import { Provider } from "react-redux";
import store from './store';
import { ShoppingBagProvider } from "../context/ShoppingBagContext";

export function Providers({children}){
    return(
        <Provider store={store}> 
                {children} 
        </Provider>
    )
}


