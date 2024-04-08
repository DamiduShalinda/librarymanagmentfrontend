import { useNavigate } from "react-router-dom";
import { AllBooksTable } from "../../components/books/BookTable.tsx";
import { Button } from "../../components/ui/button.tsx";
import { TBookView } from "@/schema/BookAddSchema.ts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteBook, getBooks } from "@/api/book";
import { toast } from "../../components/ui/use-toast.ts";


const AllBooksPage = () => {

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {data , isError , error , isLoading} = useQuery<TBookView[]>({
    queryKey: ["books"],
    queryFn: getBooks
  });

const deleteMutation = useMutation({
  mutationFn: deleteBook,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["books"] });
    toast({
      title: "Author deleted",
      variant: "destructive",
      duration: 1500,
    });
  },
});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="w-full px-10" id="all-books-page">
      <div className="flex flex-row justify-between items-center" id="all-books-page-header">
      <div id="all-books-page-header-title" className="">
          <h1 className="text-3xl font-medium">All Books</h1>
          <p className="text-sm">List All Books</p>
        </div>
        <Button variant="default" className="mt-5 w-1/5" onClick={() => navigate("new")}>
          Add New Book
        </Button>
      </div>
      <AllBooksTable dataList={data!} 
        onDelete={(id) => deleteMutation.mutate(id)} 
        onEdit={(id) => navigate(`/book/${id}/edit`)} 
      />
    </div>
  );
};

export default AllBooksPage;
