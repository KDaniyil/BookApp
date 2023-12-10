import * as actionTypes from './actionTypes'
import { v4 as uuidv4 } from 'uuid'

export const addBook = (newBook) => {
    const id = uuidv4()
    return {
        type: actionTypes.ADD_BOOK,
        payload: { ...newBook, id },
    }
}

export const removeBook = (id) => {
    return {
        type: actionTypes.REMOVE_BOOK,
        payload: id,
    }
}
