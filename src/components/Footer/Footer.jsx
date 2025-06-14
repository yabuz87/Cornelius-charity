import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Show footer when near bottom (50-60px from bottom)
      if (currentScrollPos + clientHeight >= scrollHeight - 60) {
        setIsVisible(true);
      } 
      // Hide when scrolling up
      else if (prevScrollPos > currentScrollPos && currentScrollPos + clientHeight < scrollHeight - 200) {
        setIsVisible(false);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <footer className={`footer-container ${isVisible ? 'visible' : ''}`}>
      <div className="footer-content">
        <a href="/" className="footer-logo">
          <i className="bi bi-heart-pulse"></i>
          <span>Cornelius</span>
        </a>
        
        <div className="footer-links">
          <a href="/about" className="footer-link">
            <i className="bi bi-info-circle"></i> About
          </a>
          <a href="/projects" className="footer-link">
            <i className="bi bi-lightbulb"></i> Projects
          </a>
          <a href="/blog" className="footer-link">
            <i className="bi bi-newspaper"></i> Stories
          </a>
          <a href="/contact" className="footer-link">
            <i className="bi bi-chat-dots"></i> Contact
          </a>
        </div>
        
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Making the world better
        </div>
      </div>
    </footer>
  );
};

export default Footer;