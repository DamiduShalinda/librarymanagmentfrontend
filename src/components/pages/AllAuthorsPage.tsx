import { useNavigate } from "react-router-dom";
import AuthorsList from "../others/AuthorsList";
import { Button } from "../ui/button";

const AllAuthorsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full px-10 flex flex-col gap-4" id="all-authors-page">
      <div
        className="flex flex-row justify-between items-center"
        id="all-authors-page-header"
      >
        <div id="all-authors-page-header-title" className="">
          <h1 className="text-3xl font-medium">All Authors</h1>
          <p className="text-sm">List All Authors</p>
        </div>
        <Button
          variant="default"
          className="mt-5 w-1/5"
          onClick={() => navigate("new")}
        >
          Add New Author
        </Button>
      </div>
      <AuthorsList />
    </div>
  );
};

export default AllAuthorsPage;
