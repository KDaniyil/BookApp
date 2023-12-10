import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import booksData from '../../data/books.json'
import './BookForm.css'
import { addBook } from '../../redux/slices/bookSlice'

const BookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()
    const handleRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length)
        const randomBook = booksData[randomIndex]
        dispatch(addBook(randomBook))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //check if title and author are not empty
        if (title && author) {
            const newBook = {
                title,
                author,
            }
            dispatch(addBook(newBook))
            setTitle('')
            setAuthor('')
        }
    }
    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Add Book</button>
                <button onClick={() => handleRandomBook()}>
                    Add Random Book
                </button>
            </form>
        </div>
    )
}

export default BookForm
