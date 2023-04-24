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
            // Check item is already existed in a cart
            const isExisted = state.cartItems.find(item => item.id === payload.id)

            if (isExisted) {
                return state // return previous state
            } else {
                state.cartItems = [...state.cartItems, {...payload, quantity: 1}]
            }

            state.quantity++
            state.totalAmount += payload.price
        },

        removeFromCart: (state, {payload}) => {
            state.cartItems = state.cartItems.filter(item => item.id !== payload.id)
            state.quantity--
            state.totalAmount -= payload.price * payload.quantity
        },

        addItemsQuantity: (state, {payload}) => {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === payload.id) {
                    return {...item, quantity: item.quantity + 1}
                } else {
                    return item
                }
            });
            state.quantity++
            state.totalAmount += payload.price
        },

        subtractItemQuantity: (state, {payload}) => {
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === payload.id) {
                    return { ...item, quantity: item.quantity - 1 }
                } else {
                    return item
                }
            })
            state.quantity--
            state.totalAmount -= payload.price
        }
    }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, addItemsQuantity, subtractItemQuantity } = cartSlice.actions
export default cartSlice.reducer