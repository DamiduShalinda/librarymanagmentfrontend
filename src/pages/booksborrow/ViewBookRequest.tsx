import { getCheckOutRequestById } from '@/api/borrow';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'

const ViewBookRequest = () => {

    const idString = useParams<{id : string}>().id;
    const id:number = parseInt(idString!);

    const {data, isLoading, isError, error} = useQuery({
        queryKey : ["getCheckOutRequestById", id],
        queryFn : () => getCheckOutRequestById(id)
    });

    if(isLoading) return <div>Loading...</div>;

    if(isError) return <div>Error : {error.message}</div>;

    if(!data) return null;

    return (
        <div>
            <div>
                <h1>View Book Request {id}</h1>
            </div>
            <div>
                <div>
                    <h2>Book Name : {data.bookName}</h2>
                </div>
                <div>
                    <h2>Requested By : {data.bookName}</h2>
                </div>
                <div>
                    <h2>Requested Date</h2>
                </div>
            </div>
        </div>
    )
}

export default ViewBookRequest
