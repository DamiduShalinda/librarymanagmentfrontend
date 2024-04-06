import { useMutation, useQueryClient } from "@tanstack/react-query";
import AuthorsForm from "../forms/AuthorsForm";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { createAuthor } from "@/api/author";
import { toast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";

const AddNewAuthorPage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const createAuthorMutation = useMutation({
    mutationFn: createAuthor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authors"] });
      toast({
        title: "Author created",
        variant: "default",
        duration: 1500,
      });
      navigate("/authors");
    },
  });

  return (
    <div>
      <Card className="w-5/6 border-none shadow-none">
        <CardHeader>
          <CardTitle>Add Authors</CardTitle>
          <CardDescription>Add New Author to the database</CardDescription>
        </CardHeader>
        <CardContent>
        <AuthorsForm onSubmit={(data) => createAuthorMutation.mutate(data)} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AddNewAuthorPage;
