import { Route, Routes } from 'react-router-dom'
import Navbar from './components/others/Navbar'
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

function App() {

  const loading = useSelector((state: RootState) => state.loading.loading);
  const loginResponse = useSelector((state: RootState) => state.login);

  if(loading){
    return <Loadingpage />
  }

  if(loginResponse.flag){
    return (
      <div className='flex flex-col justify-center items-center gap-10'>
        <Navbar />
        <Routes>
          <Route path='/' element={<BookBorrowPage />} />
          <Route path='/authors' element={<AllAuthorsPage />} />
          <Route path='/author/:id' element={<AuthorPage />} />
          <Route path='/books' element={< AllBooksPage />} />
          <Route path='/book/:id' element={<BookPage/>} />
          <Route path='*' element={<div>404</div>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage/>} />
        </Routes>
      </div>
    )
  } else {
    return (
      <LoginPage />
    )
  }
}

export default App
