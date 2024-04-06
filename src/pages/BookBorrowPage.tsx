import LoginForm from "../components/auth/LoginForm.tsx"
import { Button } from "../components/ui/button.tsx"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card.tsx"

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