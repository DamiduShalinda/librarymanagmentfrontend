import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getBookNames, getUserNameList } from "@/api/borrow";
import { TBookBorrow, BookBorrowSchema } from "@/schema/bookBorrowSchema";
import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "lucide-react";

const BookBorrowForm = () => {
  const {
    isLoading: isLoadingBookNames,
    error: bookNamesError,
    data: bookNamesData,
  } = useQuery({
    queryKey: ["booksName"],
    queryFn: getBookNames,
  });
  console.log(bookNamesData);
  const {
    isLoading: isLoadingUserNames,
    error: userNamesError,
    data: userNamesData,
  } = useQuery({
    queryKey: ["userNames"],
    queryFn: getUserNameList,
  });
  const form = useForm<TBookBorrow>({
    resolver: zodResolver(BookBorrowSchema),
    defaultValues: {
      bookName: "",
      userName: "",
      dateBorrowed: new Date(new Date().setDate(new Date().getDate() + 14)),
    },
  });

  function onFormSubmit(data: TBookBorrow) {
    console.log(data);
  }

  if (isLoadingBookNames || isLoadingUserNames) {
    return <div>Loading...</div>;
  } else if (
    bookNamesError ||
    userNamesError ||
    bookNamesData === undefined ||
    userNamesData === undefined
  ) {
    return (
      <div>
        Error {bookNamesError?.message} {userNamesError?.message}
      </div>
    );
  } else {
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onFormSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="bookName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Name</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Username" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {userNamesData.map((userName) => (
                      <SelectItem key={userName} value={userName}>
                        {userName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your{" "}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bookName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Book Name</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Book" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {bookNamesData.map((bookName) => (
                      <SelectItem key={bookName} value={bookName}>
                        {bookName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your{" "}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateBorrowed"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  }
};

export default BookBorrowForm;
