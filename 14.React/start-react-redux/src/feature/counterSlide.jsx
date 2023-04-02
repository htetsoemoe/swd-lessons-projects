import { createSlice } from "@reduxjs/toolkit";

// Create Initial State
const initialState = {
    count: 0,
}

// Using createSlice
/**
 * A function that accepts an initial state, an object of reducer functions, and a "slice name",
 *  and automatically generates action creators and action types that correspond to the reducers and state.
 */
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload
        },
        decrement: (state, action) => {
            state.count -= action.payload
        },
    },
});

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer