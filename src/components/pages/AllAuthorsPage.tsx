import AuthorsForm from "../forms/AuthorsForm";
import AuthorsList from "../others/AuthorsList";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

const AllAuthorsPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Add New Author</CardTitle>
          <CardDescription>Add new Author</CardDescription>
        </CardHeader>
        <CardContent>
          <AuthorsForm />
        </CardContent>
      </Card>
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Authors</CardTitle>
          <CardDescription>All Authors</CardDescription>
        </CardHeader>
        <CardContent>
          <AuthorsList />
        </CardContent>
      </Card>
    </div>
  );
};

export default AllAuthorsPage;
