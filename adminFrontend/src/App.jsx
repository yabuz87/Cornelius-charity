import React from 'react'
import Navbar from './component/Navbar'
import { Toaster } from 'react-hot-toast';
import BlogPostPage from './component/BlogPostPage'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import ProjectPost from './component/ProjectPost'
import Home from './component/Home'
import GallleryPost from './component/GallleryPost'

const App = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/uploadGallery" element={<GallleryPost/>}/>
      <Route path="/uploadblog" element={<BlogPostPage/>}/>
      <Route path="/uploadproject" element={<ProjectPost/> }/>
      </Routes>
      <Toaster />
      </Router>
  )
}

export default App
