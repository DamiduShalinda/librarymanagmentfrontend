import { getBookById, updateBook } from '@/api/book';
import { TBookAdd } from '@/schema/BookAddSchema.ts';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import AddBookForm from '../../components/books/AddBookForm.tsx';
import { toast } from '../../components/ui/use-toast.ts';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card.tsx';

const EditBookPage = () => {

    const { id } = useParams();
    const bookId = parseInt(id!);
    const queryClient = useQueryClient();
    const { isLoading, data, error, isError } = useQuery<TBookAdd>({
      queryKey: ["books", bookId],
      queryFn: () => getBookById(bookId)
  });

  const editBookMutation = useMutation({
    mutationFn: (bookData: TBookAdd) => updateBook(bookData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authors"] });
      toast({
        title: "Author updated",
        variant: "default",
        duration: 1500,
      });
    },
  });

  return (
    <div>
    <Card className="w-5/6 border-none shadow-none">
        <CardHeader>
            <CardTitle>Edit Author</CardTitle>
            <CardDescription>Edit Author Details</CardDescription>
        </CardHeader>
        <CardContent>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error: {error.message}</div>
            ) : (
                <AddBookForm
                initialValues={data!}
                    onSubmit={(authorData) => editBookMutation.mutate(authorData)}
                />
            )}
        </CardContent>
    </Card>
</div>
  )
}

export default EditBookPage