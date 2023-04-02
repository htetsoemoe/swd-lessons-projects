import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../feature/counterSlide'

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})