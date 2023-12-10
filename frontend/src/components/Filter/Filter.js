import React from 'react'
import './Filter.css'
import { useDispatch, useSelector } from 'react-redux'
import {
    resetFilters,
    selectAuthorFilter,
    selectOnlyFavoritesFilter,
    selectTitleFilter,
    setAuthorFilter,
    setOnlyFavoritesFilter,
    setTitleFilter,
} from '../../redux/slices/filterSlice'

const Filter = () => {
    const dispatch = useDispatch()
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)
    const onlyFavoritesFilter = useSelector(selectOnlyFavoritesFilter)

    const handleTitleFilter = (e) => {
        dispatch(setTitleFilter(e.target.value))
    }

    const handleAuthorFilter = (e) => {
        dispatch(setAuthorFilter(e.target.value))
    }

    const handleOnlyFavoritesFilter = () => {
        dispatch(setOnlyFavoritesFilter())
    }
    return (
        <div className="app-block filter">
            <h2>Filters</h2>
            <div className="filter-row">
                <div className="filter-group">
                    <input
                        type="text"
                        value={titleFilter}
                        placeholder="Filter by title..."
                        onChange={handleTitleFilter}
                    />
                </div>
                <div className="filter-group">
                    <input
                        type="text"
                        value={authorFilter}
                        placeholder="Filter by author..."
                        onChange={handleAuthorFilter}
                    />
                </div>
                <div className="filter-group">
                    <label>
                        <input
                            type="checkbox"
                            id="only-favorite"
                            checked={onlyFavoritesFilter}
                            onChange={handleOnlyFavoritesFilter}
                        />
                        Only Favorite
                    </label>
                </div>

                <button onClick={() => dispatch(resetFilters())}>
                    Reset Filters
                </button>
            </div>
        </div>
    )
}

export default Filter
