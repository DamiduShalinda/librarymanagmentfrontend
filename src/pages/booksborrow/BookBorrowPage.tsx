import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../components/ui/card.tsx"
import BookCheckoutForm from "@/components/bookborrow/BookCheckoutForm.tsx"

const BookBorrowPage = () => {
  return (
    <div>
    <Card className="w-5/6 border-none shadow-none">
      <CardHeader>
        <CardTitle>Checkout Books</CardTitle>
        <CardDescription>Select books to borrow</CardDescription>
      </CardHeader>
      <CardContent>
        <BookCheckoutForm />
      </CardContent>
      <CardFooter className="flex justify-center">
      </CardFooter>
    </Card>
  </div>
  )
}

export default BookBorrowPage