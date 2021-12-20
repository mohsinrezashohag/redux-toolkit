import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './Slices/BookSlice'



export const store = configureStore({

    reducer: {

        books: bookReducer

    }
})