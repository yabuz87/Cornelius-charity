import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div className="d-flex flex-column align-items-center  justify-content-center vh-100 ">
    <h2>Contact Us</h2>
      <div className="d-flex flex-column align-items-center  justify-content-center rounded-3 p-5" style={{border: "0.2px solid "}}> 
      
      <textarea rows="5" cols="90" className="shadow rounded-3 border p-3"  placeholder="write your message here to us"></textarea>
      <div className="m-3 w-100" style={{outline:"none"}}> <input type="mail" className=' w-100 p-1 shadow' placeholder="your email here"style={{outline:"none",border:"none"}} /></div>
      <button className="btn btn-primary px-4">Send</button>
      <p><span className="h1">Y</span>ou can also reach out us on different Social Media</p>
      <div className="d-flex  align-items-center justify-content-center">
      <i className="bi bi-youtube text-danger fs-3 icon m-2" style={{cursor: "pointer"}}></i>
      <i className="bi bi-telegram text-info fs-3 icon m-2" style={{cursor: "pointer"}}></i>
      <i className="bi bi-facebook text-primary fs-3 icon m-2" style={{cursor: "pointer"}}></i>
      <i className="bi bi-x text-dark fs-3 icon m-2" style={{cursor: "pointer"}}></i>
      </div>
      </div>
    </div>
  );
};

export default Contact;\