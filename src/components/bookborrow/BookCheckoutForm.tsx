import { TBookCheckout } from "@/model/bookcheckout";
import { AppDispatch, RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";
import BookCheckoutItem from "../common/BookCheckoutItem";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { removeAllBooks, removeBook } from "@/state/login/bookSlice";
import { toast } from "../ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { checkoutBooks } from "@/api/borrow";

const BookCheckoutForm = () => {
  const bookList = useSelector((state: RootState) => state.book.books);
  const dispatch = useDispatch<AppDispatch>();
  const [date, setDate] = React.useState<Date>();

  const addCheckOutBooksMutation = useMutation({
    mutationFn : checkoutBooks,
    onError: (error , data) => {
      console.log(data);
      console.error(error);
      toast({
        title: "Error",
        description: error.message,
      });
    },
    onSuccess: () => {
      dispatch(removeAllBooks());
      toast({
        title: "Books Checked Out",
        description: "Books have been checked out successfully , Wait For Approval",
      });
    },
  
  });

  const onClickDeleteButton = (bookName: string) => {
    dispatch(removeBook(bookName));
    toast({
      title: "Book Removed",
      description: "Book has been removed from the list",
    });
  }

  const onBookCheckout = () => {
    if (!date) {
      toast({
        title: "Select Return Date",
        description: "Please select a return date for the books",
      });
      return;
    } else if (bookList.length === 0) {
      toast({
        title: "No Books Selected",
        description: "Please select books to checkout",
      });
      return;
    } else if (date < new Date()) {
      toast({
        title: "Invalid Date",
        description: "Please select a valid return date",
      });
      return;
    }
    const approveRequest : TBookCheckout = {
      bookList: bookList.map((book) => book.id),
      checkOutDate: date,
    };
    addCheckOutBooksMutation.mutate(approveRequest);
  }

  return (
    <div id="bookDataArray" className=" flex flex-col gap-5 w-2/3">
      <div>
      {bookList.map((book, index) => (
        <BookCheckoutItem key={index} data={book} onClickDeleteButton={onClickDeleteButton} />
      ))}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Select a day to return : </p>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>
        <Button onClick={onBookCheckout} variant={"secondary"} className="hover:bg-gray-300">Send Request to Approve</Button>
    </div>
  );
};

export default BookCheckoutForm;
