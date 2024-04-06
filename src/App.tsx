import { Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar.tsx'
import LoginPage from '@/pages/auth/LoginPage.tsx'
import RegisterPage from '@/pages/auth/RegisterPage.tsx'
import Loadingpage from '@/pages/Loadingpage'
import { useSelector } from 'react-redux'
import { RootState } from './state/store'
import BookBorrowPage from '@/pages/BookBorrowPage'
import AllAuthorsPage from '@/pages/author/AllAuthorsPage.tsx'
import AuthorPage from '@/pages/author/AuthorPage.tsx'
import AllBooksPage from '@/pages/books/AllBooksPage.tsx'
import BookPage from '@/pages/books/BookPage.tsx'
import AddNewBookPage from '@/pages/books/AddNewBookPage.tsx'
import AddNewAuthorPage from '@/pages/author/AddNewAuthorPage.tsx'
import ItemSearch from './components/common/ItemSearch.tsx'
import EditAuthorPage from '@/pages/author/EditAuthorPage.tsx'
import EditBookPage from '@/pages/books/EditBookPage.tsx'

function App() {

  const loading = useSelector((state: RootState) => state.loading.loading);
  const loginResponse = useSelector((state: RootState) => state.login);

  if(loading){
    return <Loadingpage />
  }

  return (
      <div className='flex flex-row gap-3 h-screen'>
        <Navbar/>
        <div className="pt-5 w-full">
          <ItemSearch/>
          <Routes>
            <Route path='/' element={<BookBorrowPage/>}/>
            <Route path='/authors' element={<AllAuthorsPage/>}/>
            <Route path='/authors/new' element={<AddNewAuthorPage/>}/>
            <Route path='/author/:id' element={<AuthorPage/>}/>
            <Route path='/author/:id/edit' element={<EditAuthorPage/>}/>
            <Route path='/books' element={< AllBooksPage/>}/>
            <Route path='/book/:id' element={<BookPage/>}/>
            <Route path='/book/:id/edit' element={<EditBookPage/>}/>
            <Route path='/books/new' element={<AddNewBookPage/>}/>
            <Route path='*' element={<div>404</div>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
          </Routes>
        </div>
      </div>
  )
}

export default App
