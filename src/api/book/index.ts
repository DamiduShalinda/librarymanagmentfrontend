import axios from 'axios';
import { BooksAPI } from '../const';
import { TBookAdd } from './../../schema/BookAddSchema';


const getBooks = async function () {
    const response = await axios.get<TBookAdd[]>(BooksAPI);
    return response.data;
}

const createBook = async function (book: TBookAdd) {
    const response = await axios.post<TBookAdd>(BooksAPI, book);
    return response.data;
}

const updateBook = async function (book: TBookAdd) {
    const response = await axios.put<TBookAdd>(`${BooksAPI}/${book.id}`, book);
    return response.data;
}

const deleteBook = async function (id: number) {
    const response = await axios.delete(`${BooksAPI}/${id}`);
    return response.data;
}

export { getBooks, createBook, updateBook, deleteBook };