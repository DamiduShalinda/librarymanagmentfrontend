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
import { useQuery } from "@tanstack/react-query";
import { toast } from "../ui/use-toast";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../ui/select";
import { getAuthorsID } from "@/api/author";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/state/store";
import { setLoading } from "@/state/login/loadingSlice";
import { Textarea } from "../ui/textarea";

type AddBookFormProps = {
  onSubmit: (data: TBookAdd) => void;
  initialValues?: TBookAdd;
};


const AddBookForm = ({onSubmit , initialValues} : AddBookFormProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, data, error, isError } = useQuery<TAuthor[]>({
    queryKey: ["authors-id"],
    queryFn: getAuthorsID,
  });


  const form = useForm<TBookAdd>({
    resolver: zodResolver(BookAddSchema),
    defaultValues: {
      id: initialValues?.id || 0,
      bookName: initialValues?.bookName || "",
      authorName: initialValues?.authorName || "",
      isbn: initialValues?.isbn || "",
      bookDescription: initialValues?.bookDescription || "",
    },
  });

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

  function onFormSubmit(data: TBookAdd) {
    console.log(data);
    onSubmit(data);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-4 w-full">
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
          name="authorName"
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
        <FormField
          control={form.control}
          name="bookDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Book Description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Add a description about book
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create Book</Button>
      </form>
    </Form>
  );
};

export default AddBookForm;
