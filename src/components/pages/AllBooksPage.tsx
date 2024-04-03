import { useNavigate } from "react-router-dom";
import { DataTableDemo } from "../BookTable";
import { Button } from "../ui/button";

const AllBooksPage = () => {

  const navigate = useNavigate();

  return (
    <div className="w-full px-10" id="all-books-page">
      <div className="flex flex-row justify-between items-center" id="all-books-page-header">
      <div id="all-books-page-header-title" className="">
          <h1 className="text-3xl font-medium">All Books</h1>
          <p className="text-sm">List All Books</p>
        </div>
        <Button variant="default" className="mt-5 w-1/5" onClick={() => navigate("new")}>
          Add New Book
        </Button>
      </div>
      <DataTableDemo />
    </div>
  );
};

export default AllBooksPage;
