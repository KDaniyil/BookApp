import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: '',
    author: '',
    onlyFavorites: false,
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            return { ...state, title: action.payload }
        },
        setAuthorFilter: (state, action) => {
            return { ...state, author: action.payload }
        },
        resetFilters: () => {
            return initialState
        },
        setOnlyFavoritesFilter: (state) => {
            return { ...state, onlyFavorites: !state.onlyFavorites }
        },
    },
})
export const {
    setTitleFilter,
    setAuthorFilter,
    resetFilters,
    setOnlyFavoritesFilter,
} = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectOnlyFavoritesFilter = (state) => state.filter.onlyFavorites
export default filterSlice.reducer
