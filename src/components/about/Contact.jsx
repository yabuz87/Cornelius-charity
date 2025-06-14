import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container d-flex flex-column align-items-center justify-content-center">
      <div className="contact-card">
        <h2 className="contact-title">Get In Touch</h2>
        
        <form>
          <textarea 
            className="contact-textarea" 
            rows="5" 
            placeholder="Your message here..."
          ></textarea>
          
          <input 
            type="email" 
            className="contact-input" 
            placeholder="Your email address"
            required
          />
          
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
        
        <p className="social-title">
          Or connect with us on social media
        </p>
        
        <div className="social-icons">
          <a href="#" className="icon youtube">
            <i className="bi bi-youtube"></i>
          </a>
          <a href="#" className="icon telegram">
            <i className="bi bi-telegram"></i>
          </a>
          <a href="#" className="icon facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="icon twitter">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;