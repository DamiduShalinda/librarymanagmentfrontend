import { Route, Routes } from 'react-router-dom'
import Navbar from './components/others/Navbar'
import AuthorPage from './components/pages/AuthorPage'
import BooksPage from './components/pages/BooksPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import Loadingpage from './components/pages/Loadingpage'
import { useSelector } from 'react-redux'
import { RootState } from './state/store'

function App() {

  const loading = useSelector((state: RootState) => state.loading.loading);
  console.log(loading);

  if(loading){
    return <Loadingpage />
  }

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <Navbar />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/authors' element={<AuthorPage />} />
        <Route path='/books' element={< BooksPage />} />
        <Route path='*' element={<div>404</div>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>} />
      </Routes>
    </div>
  )
}

export default App
