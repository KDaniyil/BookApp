import React from 'react'
import { useDispatch } from 'react-redux'
import './BookList.css'
import { useSelector } from 'react-redux'
import { removeBook } from '../../redux/books/actionCreators'

const BookList = () => {
    const books = useSelector((state) => state.books)
    const dispatch = useDispatch()
    return (
        <div className="app-block book-list">
            <h2>BookList</h2>
            {books.length > 0 ? (
                <ul>
                    {books.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {i + 1}. {book.title} by{' '}
                                <strong>{book.author}</strong>
                            </div>
                            <div className="book-actions">
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
