import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  
  const navigate = useNavigate();
  const goto = (props) => {
    navigate(props);
  };

  return (
  
      <nav className="navbar navbar-expand-lg  bg-body-tertiary fixed-top">
        <div className="container-lg ">
          <a className="navbar-brand me-5" href="#" onClick={()=>goto("/")}><img src="/logo.png" style={{"width":"60px"}}></img><span className={{width:"70px"}}>Corneluis Charity Org</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-success" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item list ">
                <a className="nav-link ms-5 " aria-current="page" href="#" onClick={() => goto("/")}>Home</a>
              </li>
              <li className="nav-item list">
                <a className="nav-link " href="#" onClick={() => goto("/about")}>About Us</a>
              </li>
              <li className="nav-item list">
                <a className="nav-link " href="#" onClick={() => goto("/signupOrlogin")}>Sign Up/Login</a>
              </li>
              
              <li className="nav-item list">
                <a className="nav-link" href="#" onClick={() => goto("/projects")}>Projects and Impacts</a>
              </li>
              <li className="nav-item dropdown list">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Visit Our Org
          </a>
          <ul className="dropdown-menu">
            <li className="list"><a className="dropdown-item" onClick={()=>{goto("/gallery")}}>Gallery</a></li>
            <li className="nav-item list">
                <a className="nav-link" href="#" onClick={() => goto("/blog")}>News and Blogs</a>
              </li>
            <li><hr className="dropdown-divider"></hr></li>
            <li className="nav-item list">
                <a className="nav-link" href="#" onClick={() => goto("/contact")}>Contact Us</a>
              </li>
          </ul>
        </li>
            </ul>
            <div className="d-flex gap-2">
            <button className="btn btn-success p-2 " onClick={() => goto("/donate")}><i className="bi bi-envelope-paper-heart me-2 fs-4 text-black"></i>Donate</button>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
