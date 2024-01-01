
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    quantity: 0,
    total: 0, 
}

const shoppingSlice = createSlice({
    name: "shopping",
    initialState,
    reducers: {
        addToBag: (state,{payload}) => {
            const {...product} = payload
            const newItem = {
                ...product,
                quantity:1
            }

            return {
                ...state,
                products: [...state.products, newItem] 
            };
        },
        increaseQuantity: (state, { payload }) => {
            const { id } = payload;
            const updatedProducts = state.products.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                return item;
            });

            return {
                ...state,
                products: updatedProducts
            };
        },
        decreaseQuantity: (state, { payload }) => {
            const { id } = payload;
            const updatedProducts = state.products.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity !== 1 ? item.quantity -1 : 1
                    };
                }
                return item;
            });

            return {
                ...state,
                products: updatedProducts
            };
        },
        removeItems: (state, {   payload }) => {
            const updatedProducts = state.products.filter(item => item.id !== payload.id);
            return {
              ...state,
              products: updatedProducts
            };
        },
        
    }
});

export const { increaseQuantity ,decreaseQuantity,removeItems,addToBag} = shoppingSlice.actions;
export default shoppingSlice.reducer;
