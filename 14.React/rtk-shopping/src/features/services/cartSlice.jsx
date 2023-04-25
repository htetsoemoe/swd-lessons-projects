import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    quantity: 0
}

// JS Cookie
// We only calculate value of items in cart cookie
const STORAGE_KEY = "cartItems"

const storedItems = Cookies.get(STORAGE_KEY)

/**If cookie is already exist **/
if (storedItems) {
    initialState.cartItems = JSON.parse(storedItems)

    initialState.totalAmount = calculateTotalAmountFromCookie(initialState.cartItems) 
    console.log(initialState.totalAmount);

    initialState.quantity = calculateQuantityFromCookie(initialState.cartItems)
    console.log(initialState.quantity);
}

// calculate 'Total Amount' of items in cart cookie
function calculateTotalAmountFromCookie(cartItems) {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), initialState.totalAmount)
}

// calculate 'Quantity' of items in cart cookie
function calculateQuantityFromCookie(cartItems) {
    return cartItems.reduce((total, item) => total + item.quantity, initialState.quantity)
}

/********************************/


function calculateTotalAmount(cartItems) {
    return cartItems.reduce((total, item) => total + item.price, 0)
}

function calculateQuantity(cartItems) {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
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

            state.quantity = calculateQuantity(state.cartItems)
            state.totalAmount = calculateTotalAmount(state.cartItems)
            Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems))
            console.log(state.totalAmount);
            // window.location.reload()
        },

        removeFromCart: (state, {payload}) => {
            // remove with product id
            state.cartItems = state.cartItems.filter(item => item.id !== payload.id)

            // There is no item in cart, we need to delete cookie.
            if (state.cartItems.length === 0) {
                Cookies.remove(storedItems)
                window.location.reload()
            }

            state.quantity = calculateQuantity(state.cartItems)
            state.totalAmount = calculateTotalAmount(state.cartItems)
            Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems))
            window.location.reload()

        },

        addItemsQuantity: (state, {payload}) => {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === payload.id) {
                    return {...item, quantity: item.quantity + 1}
                } else {
                    return item
                }
            });
            state.quantity = calculateQuantity(state.cartItems)
            state.totalAmount += calculateTotalAmount(state.cartItems)
            Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems))
            window.location.reload()
        },

        subtractItemQuantity: (state, {payload}) => {
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === payload.id) {
                    return { ...item, quantity: item.quantity - 1 }
                } else {
                    return item
                }
            })
            state.quantity = calculateQuantity(state.cartItems)
            state.totalAmount -= calculateTotalAmount(state.cartItems)
            Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems))
            window.location.reload()
        }
    }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, addItemsQuantity, subtractItemQuantity } = cartSlice.actions
export default cartSlice.reducer