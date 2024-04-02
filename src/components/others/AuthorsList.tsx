import { deleteAuthor, getAuthors } from "@/api/author";
import { TAuthor } from "@/schema/authorsSchema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";


const AuthorsList = () => {
  const { isLoading, data, error, isError } = useQuery<TAuthor[]>({
    queryKey: ["authors"],
    queryFn: getAuthors,
  });

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const deleteMutation = useMutation({
    mutationFn: deleteAuthor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authors"] });
      toast({
        title: "Author deleted",
        variant: "destructive",
        duration: 1500,
      });
    },
  })

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const deletePost = (id: number) => {
    deleteMutation.mutate(id);
  }

  return (
    <div>
      <ol>
        {data?.map((author , index) => (
          <Button
            key={author.id}
            size={"lg"}
            onClick={() => navigate(`/author/${author.id}`)}
            className="w-full flex justify-start gap-1"
            variant={"ghost"}
          >
              <span>{index + 1}.</span>
              <span>{author.authorName}</span>
          </Button>
        ))}
      </ol>
    </div>
  );
};

export default AuthorsList;
