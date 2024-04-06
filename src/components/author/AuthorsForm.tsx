import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form.tsx";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import { AuthorSchema, TAuthor } from "@/schema/authorsSchema.ts";

type AuthorsFormProps = {
  onSubmit: (data: TAuthor) => void;
  initialData?: TAuthor;
};

const AuthorsForm = ({onSubmit , initialData} : AuthorsFormProps) => {


  const form = useForm<TAuthor>({
    resolver: zodResolver(AuthorSchema),
    defaultValues: {
      id: initialData?.id || 0,
      authorName: initialData?.authorName || "",
    },
  });

  function onFormSubmit(data: TAuthor) {
    onSubmit(data);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-4">
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
              <FormDescription>Enter an author's name</FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Create Author</Button>
      </form>
    </Form>
  );
};

export default AuthorsForm;
