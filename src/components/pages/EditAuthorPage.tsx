import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthorsForm from '../forms/AuthorsForm';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from '../ui/use-toast';
import { getAuthorsById, updateAuthor } from '@/api/author';
import { TAuthor } from '@/schema/authorsSchema';

const EditAuthorPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    // Ensure id is a valid number
    const authorId = parseInt(id!);


    const { isLoading, data, error, isError } = useQuery<TAuthor>({
        queryKey: ["authors", authorId],
        queryFn: () => getAuthorsById(authorId)
    });

    const editAuthorMutation = useMutation({
        mutationFn: (authorData: TAuthor) => updateAuthor(authorData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['authors'] });
            toast({
                title: "Author Updated",
                variant: "default",
                duration: 1500
            });
            navigate('/authors');
        }
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
                        <AuthorsForm
                        initialData={data!}
                            onSubmit={(authorData) => editAuthorMutation.mutate(authorData)}
                        />
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default EditAuthorPage;
