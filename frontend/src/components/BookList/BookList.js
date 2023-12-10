import { useDispatch } from 'react-redux'
import './BookList.css'
import { useSelector } from 'react-redux'
import { removeBook, toggleFavorite } from '../../redux/books/actionCreators'
import { BsBookmarkStar } from 'react-icons/bs'
import { BsBookmarkStarFill } from 'react-icons/bs'
import {
    selectAuthorFilter,
    selectTitleFilter,
} from '../../redux/slices/filterSlice'

const BookList = () => {
    const books = useSelector((state) => state.books)
    const filterTitle = useSelector(selectTitleFilter)
    const filterAuthor = useSelector(selectAuthorFilter)
    const dispatch = useDispatch()

    const filteredBooks = books.filter((book) => {
        return (
            book.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
            book.author.toLowerCase().includes(filterAuthor.toLowerCase())
        )
    })
    return (
        <div className="app-block book-list">
            <h2>BookList</h2>
            {filteredBooks.length > 0 ? (
                <ul>
                    {filteredBooks.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {i + 1}. {book.title} by{' '}
                                <strong>{book.author}</strong>
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
