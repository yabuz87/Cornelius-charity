import React, { useState, useEffect } from "react";
import { banks } from "../../assets/imgs/banks";
import "./donate.css";

const Donate = () => {
  const [termsVisible, setTermsVisible] = useState(false);
  const [selectedBank, setSelectBank] = useState({ name: "", index: null });
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [progress, setProgress] = useState(0);
  const totalSteps = 4;

  useEffect(() => {
    let completedSteps = 0;
    if (fullName) completedSteps++;
    if (email) completedSteps++;
    if (country) completedSteps++;
    if (selectedBank.name) completedSteps++;

    setProgress((completedSteps / totalSteps) * 100);
  }, [fullName, email, country, selectedBank]);

  const handleBankSelect = (bank, index) => {
    setSelectBank({ name: bank.name, index: index });
  };

  const handleTermsVisibility = (e) => {
    e.preventDefault();
    setTermsVisible(!termsVisible);
  };

  return (
    <>
      <div className="container-fluid donate-img-page"></div>
      <h1 className="donation-title">Donation</h1>
      <h3 className="sub-title1">Thank You for Your Support!</h3>
      <p className="p-beneath-sub-title">
        Here is the form you can fill in with your appropriate choice to help this society and make a good impact on others.
      </p>

      <h2 className="text-center">Donation Form</h2>

      <div className="donation-form container-lg d-flex align-items-center justify-content-center flex-column">
        {/* Progress Bar Section */}
        <div className="progress-container">
          <progress value={progress} max="100"></progress>
          <p>Completion: {progress.toFixed(0)}%</p>
        </div>

        <div className="donating-form d-flex flex-column gap-2 justify-content-center align-items-center border rounded-3 w-50 p-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-75 rounded-1 p-1 shadow" 
            style={{ border: "none", outline: "none" }} 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)}
          />

          <input 
            type="text" 
            placeholder="Email" 
            className="w-75 rounded-1 p-1 shadow" 
            style={{ border: "none", outline: "none" }} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />

          <select 
            className="w-75 rounded-1 p-1 shadow" 
            style={{ border: "none", outline: "none" }} 
            value={country} 
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>Select Country</option>
            <option>Ethiopia</option>
            <option>United States of America</option>
            <option>Canada</option>
            <option>Israel</option>
            <option>United Kingdom</option>
            <option>China</option>
            <option>Switzerland</option>
            <option>South Africa</option>
            <option>Dubai</option>
            <option>United Arab Emirates (UAE)</option>
            <option>Other</option>
          </select>
        </div>

        <form className="needs-validation align-items-center justify-content-center border-none" noValidate>
          <h4 className="text-center my-3">Donating Methods</h4>
          <div className="bank-selection-part banks-container">
            {banks.map((oneBank, index) => (
              <div key={index} className="border m-1 rounded-1">
                <div 
                  className={`each-bank-container row bank-icon ${selectedBank.index === index ? "selected-bank-class" : ""}`} 
                  onClick={() => handleBankSelect(oneBank, index)}
                >
                  <div className="d-flex row justify-content-center align-items-center">
                    <img src={oneBank.img} alt={oneBank.name} className="banks-img" />
                  </div>
                  <div className="in-one-bank-div md-col-5">
                    <p>Name: {oneBank.name}</p>
                    <p>Account Name: {oneBank.accName}</p>
                    <p>Account: {oneBank.accNo}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button 
                    type="button" 
                    className={`btn my-1 ${selectedBank.index === index ? "btn-secondary" : "btn-success"}`}
                  >
                    {selectedBank.index === index ? "Selected" : "Select"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-12 my-5 p-2">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className={`terms-container ${termsVisible ? "show" : ""} border p-2 m-2 rounded-2`}>
                <h4 className="text-center">Privacy and Terms of Conditions</h4>
                <p>We deeply appreciate your generous and compassionate heart in supporting our cause...</p>
                <p>When you fill out the donation form, you will receive an encouraging message once a month...</p>
                <p>Additionally, we will send you updates on any new agendas...</p>
                <p>Thank you for being with us. Stay blessed.</p>
              </div>
              <div>
                <button className="btn btn-secondary" onClick={handleTermsVisibility}>
                  {termsVisible ? "Read Less" : "Read Terms and Privacy"}
                </button>
              </div>
              <div className="form-check pt-2">
                <input className="form-check-input" style={{ cursor: "pointer" }} type="checkbox" id="invalidCheck" required />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">You must agree before submitting.</div>
              </div>
            </div>
          </div>

          <div className="col-12 d-flex flex-column justify-content-center align-items-center p-2">
            <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Donate;