import { useMutation, useQueryClient } from "@tanstack/react-query";
import AddBookForm from "../../components/books/AddBookForm.tsx";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card.tsx";
import { createBook } from "@/api/book";
import { toast } from "../../components/ui/use-toast.ts";

const AddNewBookPage = () => {
  const queryClient = useQueryClient();

  const createBookMutation = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      toast({
        title: "Book created",
        variant: "default",
        duration: 1500,
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        duration: 1500,
      });
    },
  });
  return (
    <div>
      <Card className="w-5/6 border-none shadow-none">
        <CardHeader>
          <CardTitle>Add Book</CardTitle>
          <CardDescription>Add New Book to the database</CardDescription>
        </CardHeader>
        <CardContent>
          <AddBookForm onSubmit={(data) => createBookMutation.mutate(data)} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AddNewBookPage;
