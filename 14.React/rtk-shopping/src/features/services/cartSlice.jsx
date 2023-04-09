import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    quantity: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
            state.cartItems = [...state.cartItems, {payload, quantity: 1}]
        }
    }
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer