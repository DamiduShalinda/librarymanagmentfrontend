import AddBookForm from '../forms/AddBookForm'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'

const AddNewBookPage = () => {
  return (
    <div>
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Add Book</CardTitle>
          <CardDescription>Add New Book to the database</CardDescription>
        </CardHeader>
        <CardContent>
        <AddBookForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default AddNewBookPage