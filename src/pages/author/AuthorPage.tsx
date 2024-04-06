import { useParams } from 'react-router-dom'

const AuthorPage = () => {

    const { id } = useParams();
  return (
    <div>AuthorPage {id}</div>
  )
}

export default AuthorPage