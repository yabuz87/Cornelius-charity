import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import MainHome from './components/home/MainHome';
import Footer from "./components/Footer/Footer"
import About from './components/about/About';
import BlogAndNews from "./components/Blogs/BlogAndNews"
import { useAuthStore } from './components/store/useAuthStore';
import Signup from './components/SignUp/Signup';
import Login from "./components/SignUp/Login";
import Donate from './components/Donate/Donate';
import ProjectAndImpact from './components/Additional/stories/ProjectAndImpact';
import Gallery from './components/Additional/gallery/Gallery';
import UserDashBoard from './components/UserDashBoard';
import Contact from './components/about/contact';

const App = () => {
  const {authUser}=useAuthStore();
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<MainHome/>}/>
      <Route path="/userDashBoard" element={<UserDashBoard/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signupOrlogin" element={!authUser ?<Login/> : <Navigate to="/userDashBoard"/>}/>
      <Route path="/signup" element={!authUser ? <Signup/> : <Navigate to="/userDashBoard"/>}/>
      <Route path="/blog" element={<BlogAndNews/>}/>
      <Route path="/donate" element={<Donate/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/projects" element={<ProjectAndImpact/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
