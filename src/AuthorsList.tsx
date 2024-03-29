import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AuthorsAPI } from './Const';
import { TAuthor } from './models/Author';
import { Box, List } from '@mantine/core';

const AuthorsList = () => {
    
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
        <Box maw={340} mx={"auto"}>
        <List type='ordered' withPadding>
            {data?.map((author) => (
                <List.Item key={author.id}>{author.authorName}</List.Item>
            ))}
        </List>
        </Box>
    );
}

export default AuthorsList
