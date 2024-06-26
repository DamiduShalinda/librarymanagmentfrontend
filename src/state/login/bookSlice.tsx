import { TSimpleBook } from "@/model/simplebook";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface BookState {
    books: TSimpleBook[];
}

const initialState: BookState = {
    books: []
}

const MAX_BOOKS = 3;

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<TSimpleBook>) => {
            if (state.books.includes(action.payload)) {
                return;
            } else if (state.books.length >= MAX_BOOKS) {
                console.error('Maximum number of books reached');
                return;
            } else {
                state.books.push(action.payload);
            }
        },
        removeBook: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(book => book.bookName !== action.payload);
        },
        removeAllBooks: (state) => {
            state.books = [];
        }
    }
});

export const { addBook, removeBook, removeAllBooks } = bookSlice.actions;
export default bookSlice.reducer;
