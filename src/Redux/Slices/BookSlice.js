import { createSlice } from '@reduxjs/toolkit'
import books from '../../fakeData/books.json'

export const bookSlice = createSlice({

    name: 'book',
    initialState: {
        discover: books,
        readingList: [],
        finishedList: [],
    },

    reducers: {
        addToReadingList: (state, action) => {
            state.readingList.push(action.payload)
        },

        removeFromReadingList: (state, action) => {
            state.readingList = state.readingList.filter(book => book.id !== action.payload)
        },
    },

})





export const { addToReadingList, removeFromReadingList } = bookSlice.actions;

export default bookSlice.reducer;
