import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

const initState = []

const bookSlice = createSlice({
    name: 'books',
    initialState: initState,
    reducers: {
        addBook: (state, action) => {
            state.push({
                ...action.payload,
                isFavorite: false,
                id: uuidv4(),
            })
        },
        removeBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload)
        },
        toggleFavorite: (state, action) => {
            return state.map((book) =>
                book.id === action.payload
                    ? { ...book, isFavorite: !book.isFavorite }
                    : book
            )
        },
    },
})

export const { addBook, removeBook, toggleFavorite } = bookSlice.actions

export const thunkFunction = async (dispatch, getState) => {
    try {
        const res = await axios.get('http://localhost:4000/random-book')
        dispatch(addBook({ ...res.data, type: 'API' }))
    } catch (err) {
        alert(err.message)
    }
}

export default bookSlice.reducer
