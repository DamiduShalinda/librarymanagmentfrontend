import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { AppDispatch, RootState } from "@/state/store";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {Trash } from "lucide-react";
import { removeAllBooks, removeBook } from "@/state/login/bookSlice";
import { useNavigate } from "react-router-dom";

const BookListButton = () => {
  const bookList = useSelector((state: RootState) => state.book);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const date =  new Date(new Date().setDate(new Date().getDate() + 14));

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button> View Book List {bookList.books.length}</Button>
        </PopoverTrigger>
        <PopoverContent>
          {bookList.books.length > 0 ? (
            <>
            <ul>
              {bookList.books.map((book) => (
                <BookListItem key={book.id} bookName={book.bookName} onClickDeleteButton={(bookName) => dispatch(removeBook(bookName))} />
              ))}
            </ul>
            <p className="text-sm font-medium py-3 px-2">Returned Date : {date.toDateString()}</p>
            <div className="flex flex-row justify-between items-center pt-3">
            <Button size={"sm"} variant={"secondary"} onClick={() => dispatch(removeAllBooks())}>Clear All</Button>
            <Button size={"sm"} variant={"secondary"} onClick={() => navigate("/borrow")}>Checkout</Button>
          </div>
            </>
          ) : (
            <p>No books in the list</p>
          )}
          
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default BookListButton;

const BookListItem = ({ bookName , onClickDeleteButton }: { bookName: string , onClickDeleteButton : (bookname: string) => void }) => {
  return (
    <div className="flex flex-row justify-between p-2 items-center hover:bg-gray-100 rounded-md">
      <li key={bookName}>{bookName}</li>
      <Trash onClick={() => onClickDeleteButton(bookName)} absoluteStrokeWidth size={15} strokeWidth={1.5}/>
    </div>
  );
};
