import { Button } from "../ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "../ui/form";
import { Input } from "../ui/input";
import { TAuthor } from "@/schema/authorsSchema";
import { BookAddSchema, TBookAdd } from "@/schema/BookAddSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createBook } from "@/api/book";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "../ui/use-toast";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../ui/select";
import { getAuthorsID } from "@/api/author";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/state/store";
import { setLoading } from "@/state/login/loadingSlice";

const AddBookForm = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, data, error, isError } = useQuery<TAuthor[]>({
    queryKey: ["authors-id"],
    queryFn: getAuthorsID,
  });

  const createPostMutation = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      toast({
        title: "Book created",
        variant: "default",
        duration: 1500,
      });
      form.reset();
    },
  });

  const form = useForm<TBookAdd>({
    resolver: zodResolver(BookAddSchema),
    defaultValues: {
      id: 0,
      bookName: "",
      author: "",
    },
  });

  function onSubmit(data: TBookAdd) {
    toast({
      title: "Creating Book",
      description: `${data.author} is being created`,
      variant: "default",
      duration: 1500,
    });
  }

  if (isError) {
    dispatch(setLoading(false));
    toast({
      title: "Error",
      description: error.message,
      duration: 1500,
    });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="bookName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book's Title</FormLabel>
              <FormControl>
                <Input placeholder="Ex : The Luna's Eclipse" {...field} />
              </FormControl>
              <FormDescription>Enter the book's title</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isbn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISBN</FormLabel>
              <FormControl>
                <Input placeholder="Ex : 1510778365" {...field} />
              </FormControl>
              <FormDescription>Enter the book's ISBN</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.name}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an Author" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {data?.map((author) => (
                      <SelectItem key={author.id} value={author.authorName}>
                        {author.authorName}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
              <FormDescription>Select the author of the book</FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Create Book</Button>
      </form>
    </Form>
  );
};

export default AddBookForm;
