import { useDispatch } from 'react-redux'
import './BookList.css'
import { useSelector } from 'react-redux'
import { BsBookmarkStar } from 'react-icons/bs'
import { BsBookmarkStarFill } from 'react-icons/bs'
import {
    selectAuthorFilter,
    selectOnlyFavoritesFilter,
    selectTitleFilter,
} from '../../redux/slices/filterSlice'
import { removeBook, toggleFavorite } from '../../redux/slices/bookSlice'

const BookList = () => {
    const books = useSelector((state) => state.books)
    const filterTitle = useSelector(selectTitleFilter)
    const filterAuthor = useSelector(selectAuthorFilter)
    const onlyFavorites = useSelector(selectOnlyFavoritesFilter)
    const dispatch = useDispatch()

    const filteredBooks = books.filter((book) => {
        const titleMatch = book.title
            .toLowerCase()
            .includes(filterTitle.toLowerCase())

        const authorMatch = book.author
            .toLowerCase()
            .includes(filterAuthor.toLowerCase())

        const onlyFavoritesMatch = onlyFavorites ? book.isFavorite : true

        return titleMatch && authorMatch && onlyFavoritesMatch
    })

    const highlightText = (text, filter) => {
        if (!filter) return text
        const regex = new RegExp(`(${filter})`, 'gi')
        return text.split(regex).map((subStr, i) => {
            if (subStr.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={i} className="highlight">
                        {subStr}
                    </span>
                )
            }
            return subStr
        })
    }
    return (
        <div className="app-block book-list">
            <h2>BookList</h2>
            {filteredBooks.length > 0 ? (
                <ul>
                    {filteredBooks.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {i + 1}.{' '}
                                {highlightText(book.title, filterTitle)} by{' '}
                                <strong>
                                    {highlightText(book.author, filterAuthor)}
                                </strong>{' '}
                                ({book.type})
                            </div>

                            <div className="book-actions">
                                <span
                                    onClick={() =>
                                        dispatch(toggleFavorite(book.id))
                                    }
                                >
                                    {book.isFavorite ? (
                                        <BsBookmarkStarFill className="star-icon" />
                                    ) : (
                                        <BsBookmarkStar className="star-icon" />
                                    )}
                                </span>

                                <button
                                    onClick={() =>
                                        dispatch(removeBook(book.id))
                                    }
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No books to display</p>
            )}
        </div>
    )
}

export default BookList
