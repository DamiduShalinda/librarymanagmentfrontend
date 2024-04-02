import LoginForm from "../forms/LoginForm"
import { Button } from "../ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card"

const BookBorrowPage = () => {
  return (
    <div>
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Borrowed Books</CardTitle>
        <CardDescription>Select books to borrow</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-center">

      </CardFooter>
    </Card>
  </div>
  )
}

export default BookBorrowPage