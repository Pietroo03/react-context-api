import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './pages/DefaultLayout'
import Home from './pages/Homepage'
import About from './pages/About'
import Posts from './pages/Posts'
import CreatePost from './pages/CreatePost'
import PostPage from './pages/PostPage'
import NotFound from './pages/NotFound'
import GlobalContext from './contexts/GlobalContext'
import './App.css'

function App() {

  const api = 'http://127.0.0.1:3000'

  return (

    <>

      <GlobalContext.Provider value={api}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='/create' element={<CreatePost />} />
              <Route path='/posts/:slug' element={<PostPage />} />
              <Route path='*' element={<NotFound />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>

    </>

  )
}

export default App
