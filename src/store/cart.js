import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

const slice = createSlice({
    name: "carts",
    initialState: initialState,
    reducers: {
        addProductToCart: (carts, action) => {
            carts.push({
                id: ++lastId,
                productName: action.payload.productName,
                price: action.payload.price,
                quantity: action.payload.quantity,
            });
        },
        updateQuantity: (carts, action) => {
            const index = carts.findIndex(cart => cart.id === action.payload.id);
            if (index > -1) {
                carts[index].quantity = action.payload.quantity;
            }
        }
    }
});

export const { addProductToCart, updateQuantity } = slice.actions;
export default slice.reducer;