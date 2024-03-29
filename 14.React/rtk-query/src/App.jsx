import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './components/Blogs'
import Detail from './components/Detail'
import CreateBlog from './components/CreateBlog'
import Edit from './components/Edit'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<CreateBlog />}/>
        <Route path='/edit/:id' element={<Edit />}/>
      </Routes>
    </div>
  )
}

export default App
