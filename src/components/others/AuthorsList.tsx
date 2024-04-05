import { deleteAuthor, getAuthors } from "@/api/author";
import { TAuthor } from "@/schema/authorsSchema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Ellipsis } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

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
  });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const deletePost = (id: number) => {
    deleteMutation.mutate(id);
  };

  return (
    <div>
      <ol>
        {data?.map((author, index) => (
          <Button
            key={author.id}
            size={"lg"}
            className="w-full flex justify-between"
            variant={"ghost"}
          >
            <div className="flex flex-row justify-start gap-1" onClick={() => navigate(`/author/${author.id}`)}>
              <span>{index + 1}.</span>
              <span>{author.authorName}</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Ellipsis size={16} strokeWidth={1} absoluteStrokeWidth />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate(`/author/${author.id}`) }>View Author</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate(`/author/${author.id}/edit`) }>Edit</DropdownMenuItem>
                <DropdownMenuItem onClick={() => deletePost(author.id)} className="text-red-600">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Button>
        ))}
      </ol>
    </div>
  );
};

export default AuthorsList;
