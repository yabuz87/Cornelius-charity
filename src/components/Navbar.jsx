import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  
  const goto = (path) => {
    navigate(path);
    // Close mobile menu when a link is clicked
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-lg">
        <a className="navbar-brand" href="#" onClick={() => goto("/")}>
          <img src="/logo.png" alt="Cornelius Charity Logo" />
          <span>Cornelius Charity Org</span>
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a 
                className="nav-link" 
                aria-current="page" 
                href="#" 
                onClick={() => goto("/")}
              >
                <i className="bi bi-house-door me-1"></i> Home
              </a>
            </li>
            
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#" 
                onClick={() => goto("/about")}
              >
                <i className="bi bi-info-circle me-1"></i> About Us
              </a>
            </li>
            
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#" 
                onClick={() => goto("/signupOrlogin")}
              >
                <i className="bi bi-person me-1"></i> Sign Up/Login
              </a>
            </li>
            
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#" 
                onClick={() => goto("/projects")}
              >
                <i className="bi bi-lightbulb me-1"></i> Projects
              </a>
            </li>
            
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="bi bi-building me-1"></i> Visit Our Org
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a 
                    className="dropdown-item" 
                    onClick={() => goto("/gallery")}
                  >
                    <i className="bi bi-images me-2"></i> Gallery
                  </a>
                </li>
                <li>
                  <a 
                    className="dropdown-item" 
                    onClick={() => goto("/blog")}
                  >
                    <i className="bi bi-newspaper me-2"></i> News & Blogs
                  </a>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a 
                    className="dropdown-item" 
                    onClick={() => goto("/contact")}
                  >
                    <i className="bi bi-envelope me-2"></i> Contact Us
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          
          <div className="d-flex">
            <button 
              className="btn donate-btn" 
              onClick={() => goto("/donate")}
            >
              <i className="bi bi-heart-fill"></i> Donate Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;