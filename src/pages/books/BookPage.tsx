import { useParams } from "react-router-dom";


const BookPage = () => {

    const { id } = useParams();
  return (
    <div>BookPage {id}</div>
  )
}

export default BookPage