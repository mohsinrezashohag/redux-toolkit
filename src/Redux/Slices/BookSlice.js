import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import books from '../../fakeData/books.json'



// asynchronous works must have function to add as reducer
export const fetchBooks = createAsyncThunk(

    'book/fetchBooks',
    async () => {
        const response = await fetch('http://localhost:5000/books')
            .then(res => res.json())
        console.log("fetch working", response);

        return response

    }
)

// A demo function for adding "add books" function

// const addBooks = createAsyncThunk(
//     'book/fetchBooks',
//     async (userId, thunkAPI) => {
//         const response = await fetch('http://localhost:5000/books')
//             .then(res => res.json())
//         return response
//     }
// )


export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        // discover: books,
        discover: [],
        readingList: [],
        finishedList: [],
        status: ''
    },

    reducers: {
        addToReadingList: (state, action) => {
            state.readingList.push(action.payload)
        },

        removeFromReadingList: (state, action) => {
            state.readingList = state.readingList.filter(book => book.id !== action.payload)
        },

        // async and api related works will add as extra reducer

        extraReducers: (builder) => {

            builder.addCase(fetchBooks.fulfilled, (state, action) => {
                // Add user to the state array
                state.discover = action.payload;
                state.status = 'success'
            })

            builder.addCase(fetchBooks.pending, (state, action) => {
                // Add user to the state array
                state.status = 'pending'
            })

            // suppose actions for add books
            // builder.addCase(addBooks.fulfilled, (state, action) => {
            //     state..push(action.payload)
            // })



        }



    }

})





export const { addToReadingList, removeFromReadingList } = bookSlice.actions;

export default bookSlice.reducer;
