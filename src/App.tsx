import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import Loadingpage from './components/pages/Loadingpage'
import { useSelector } from 'react-redux'
import { RootState } from './state/store'
import BookBorrowPage from './components/pages/BookBorrowPage'
import AllAuthorsPage from './components/pages/AllAuthorsPage'
import AuthorPage from './components/pages/AuthorPage'
import AllBooksPage from './components/pages/AllBooksPage'
import BookPage from './components/pages/BookPage'
import AddNewBookPage from './components/pages/AddNewBookPage'
import AddNewAuthorPage from './components/pages/AddNewAuthorPage'
import NavBarSearch from './components/navbar/NavBarSearch'
import EditAuthorPage from './components/pages/EditAuthorPage'

function App() {

  const loading = useSelector((state: RootState) => state.loading.loading);
  const loginResponse = useSelector((state: RootState) => state.login);

  if(loading){
    return <Loadingpage />
  }

  if(true){
    return (
      <div className='flex flex-row gap-3 h-screen'>
        <Navbar />
        <div className="pt-5 w-full">
          <NavBarSearch />
          <Routes>
            <Route path='/' element={<BookBorrowPage />} />
            <Route path='/authors' element={<AllAuthorsPage />} />
            <Route path='/authors/new' element={<AddNewAuthorPage />} />
            <Route path='/author/:id' element={<AuthorPage />} />
            <Route path='/author/:id/edit' element={<EditAuthorPage />} />
            <Route path='/books' element={< AllBooksPage />} />
            <Route path='/book/:id' element={<BookPage/>} />
            <Route path='/books/new' element={<AddNewBookPage />} />
            <Route path='*' element={<div>404</div>} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage/>} />
          </Routes>
        </div>
      </div>
    )
  } else {
    return (
      <LoginPage />
    )
  }
}

export default App
