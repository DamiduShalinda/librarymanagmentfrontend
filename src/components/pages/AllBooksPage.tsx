import { useState } from "react";
import BookList from "../others/BookList";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import AddBookForm from "../forms/AddBookForm";

const AllBooksPage = () => {

  const [isAddBook, setIsAddBook] = useState(true);

  return (
    <div>
      <Card className="w-[450px]">
        <CardHeader>
          <Button 
            className="mb-4"
              onClick={() => setIsAddBook(!isAddBook)}>
            {isAddBook ? "Add New Book" : "View All Books"}</Button>
          <CardTitle>All Books</CardTitle>
          <CardDescription>List All Books</CardDescription>
        </CardHeader>
        <CardContent>
          {isAddBook ? (
            <BookList /> ) : (
              <AddBookForm />
            )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AllBooksPage;
