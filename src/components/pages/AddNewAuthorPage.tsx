import AuthorsForm from "../forms/AuthorsForm";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

const AddNewAuthorPage = () => {
  return (
    <div>
      <Card className="w-5/6 border-none shadow-none">
        <CardHeader>
          <CardTitle>Add Authors</CardTitle>
          <CardDescription>Add New Author to the database</CardDescription>
        </CardHeader>
        <CardContent>
        <AuthorsForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default AddNewAuthorPage;
