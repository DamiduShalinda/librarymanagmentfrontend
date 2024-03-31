import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { toast } from "../ui/use-toast";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { AuthorSchema, TAuthor } from "@/schema/authorsSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAuthor } from "@/api/author";

const AuthorsForm = () => {
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: createAuthor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authors"] });
      toast({
        title: "Author created",
        variant: "default",
        duration: 1500,
      });
      form.reset();
    },
  });

  const form = useForm<TAuthor>({
    resolver: zodResolver(AuthorSchema),
    defaultValues: {
      id: 0,
      authorName: "",
    },
  });

  function onSubmit(data: TAuthor) {
    createPostMutation.mutate(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="authorName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author's Name</FormLabel>
              <FormControl>
                <Input placeholder="Author's Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create Author</Button>
      </form>
    </Form>
  );
};

export default AuthorsForm;
