import { TAuthor } from "@/schema/authorsSchema";
import { AuthorsAPI } from "../const";
import axios from "axios";

const getAuthors = async () => {
    const response = await axios.get<TAuthor[]>(AuthorsAPI);
    return response.data;
};

const createAuthor = async (author: TAuthor) => {
    const response = await axios.post<TAuthor>(AuthorsAPI, author);
    return response.data;
};

const updateAuthor = async (author: TAuthor) => {
    const response = await axios.put<TAuthor>(`${AuthorsAPI}/${author.id}`, author);
    return response.data;
};

const deleteAuthor = async (id: number) => {
    const response = await axios.delete(`${AuthorsAPI}/${id}`);
    return response.data;
};


export { getAuthors , createAuthor, updateAuthor, deleteAuthor};