import { getBooks } from "@/api/book";
import { TBookAdd } from "@/schema/BookAddSchema.ts";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button.tsx";

const BookList = () => {
  const navigate = useNavigate();
  const { isLoading, data, error, isError } = useQuery<TBookAdd[]>({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>
    <ol>
      {data?.map((book , index) => (
        <Button
        key={book.id}
        size={"lg"}
        onClick={() => navigate(`/book/${book.id}`)}
        className="w-full flex justify-start gap-1"
        variant={"ghost"}
      >
          <span>{index + 1}.</span>
          <span>{book.bookName}</span>
      </Button>
      ))}
    </ol>
  </div>;
};

export default BookList;
