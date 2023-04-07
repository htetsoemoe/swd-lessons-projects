import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './services/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice
    },
})