import { Route, Routes } from 'react-router-dom'
import Navbar from './components/others/Navbar'
import AuthorPage from './components/pages/AuthorPage'
import BooksPage from './components/pages/BooksPage'
import LoginPage from './components/pages/LoginPage'

function App() {

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <Navbar />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/authors' element={<AuthorPage />} />
        <Route path='/books' element={< BooksPage />} />
      </Routes>
    </div>
  )
}

export default App
