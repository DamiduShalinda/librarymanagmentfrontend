import { AuthorsAPI } from "./Const";
import axios from "axios";
import { TAuthor } from "./models/Author";
import { useQuery } from "@tanstack/react-query";

    export default function App() {


        const getAuthors = async () => {
            const response = await axios.get<TAuthor[]>(AuthorsAPI);
            return response.data;
        };
        const { isLoading , data, error } =  useQuery<TAuthor[]>({
            queryKey: ["authors"],
            queryFn: getAuthors
        })

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        if (isLoading) {
            return <div>Loading...</div>;
        }
               
        return (
            <div>
                {data?.map((author) => (
                    <div key={author.id}>{author.authorName}</div>
                ))}
            </div>
        );
}
