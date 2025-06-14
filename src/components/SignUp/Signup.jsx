import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";

const Signup = () => {
  const navigate = useNavigate();
  const { isSigningUp, signup,emailForVerify,setEmailForVerify} = useAuthStore();

  const [signUpData, setSignUpData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    membership: "",
  });

  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleNavigate = () => navigate("/signupOrlogin");
    const navigateToVerify=()=> navigate("/verfiyOtp");

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+251\d{9}$/;

    if (!emailRegex.test(signUpData.email)) {
      alert("Please enter a valid email address!");
      return false;
    }

    if (!phoneRegex.test(signUpData.phone)) {
      alert("Please enter a valid phone number (e.g., +251...)!");
      return false;
    }
    if (signUpData.password !== confirmedPassword) {
      alert("Passwords do not match!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
       setEmailForVerify(signUpData.email);
      await signup(signUpData);
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed! Please try again.");
    }
  };

  const isFormComplete = Object.values(signUpData).every(
    (field) => field.trim() !== ""
  );

  return (
    <div className="Signup-container">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={signUpData.fullName}
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, fullName: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Phone (+251...)"
          value={signUpData.phone}
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={signUpData.email}
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={signUpData.password}
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />

        <label className="membership-label">Membership Type:</label>
        <div className="account-type-choice">
          <label className="account-type-label">
            <input
              type="radio"
              name="accountType"
              value="Permanent Donator"
              checked={signUpData.membership === "Permanent Donator"}
              onChange={(e) =>
                setSignUpData((prev) => ({
                  ...prev,
                  membership: e.target.value,
                }))
              }
              className="account-type-input"
            />
            Permanent Donator
          </label>

          <label className="account-type-label">
            <input
              type="radio"
              name="accountType"
              value="One time Donator"
              checked={signUpData.membership === "One time Donator"}
              onChange={(e) =>
                setSignUpData((prev) => ({
                  ...prev,
                  membership: e.target.value,
                }))
              }
              className="account-type-input"
            />
            One-Time Donator
          </label>
        </div>

        <button type="submit" disabled={isSigningUp || !isFormComplete} onClick={navigateToVerify}>
          {isSigningUp ? "Signing Up..." : "Sign Up"}
        </button>
      </form>

      <h3>Already have an account?</h3>
      <p onClick={handleNavigate}>
        Sign in here <i className="bi bi-person-check text-info"></i>
      </p>

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            margin: "50px",
            padding: "15px",
          },
        }}
      />
    </div>
  );
};

export default Signup;



// import React, { useState } from "react";
// import "./Signup.css";
// import { useNavigate } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import { useAuthStore } from "../store/useAuthStore";
// import { requestSignupOtp } from "../utils/api"; // You must implement this API call

// const Signup = () => {
//   const navigate = useNavigate();
//   const { isSigningUp } = useAuthStore(); // Removed `signup` since it's no longer used here

//   const [signUpData, setSignUpData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     password: "",
//     membership: "",
//   });

//   const [confirmedPassword, setConfirmedPassword] = useState("");

//   const handleNavigate = () => navigate("/signupOrlogin");
   

//   const validateInputs = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\+251\d{9}$/;

//     if (!emailRegex.test(signUpData.email)) {
//       alert("Please enter a valid email address!");
//       return false;
//     }
//     if (!phoneRegex.test(signUpData.phone)) {
//       alert("Please enter a valid phone number (e.g., +251...)!");
//       return false;
//     }
//     if (signUpData.password !== confirmedPassword) {
//       alert("Passwords do not match!");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateInputs()) return;

//     try {
//       // Send OTP to email
//       await signup(signUpData); // Sends OTP, no account yet

//       // Go to OTP verification page with form data
//       navigate("/verify-otp", { state: signUpData });
//     } catch (error) {
//       alert(error?.response?.data?.message || "Failed to send OTP. Try again.");
//     }
//   };

//   const isFormComplete = Object.values(signUpData).every(
//     (field) => field.trim() !== ""
//   );

//   return (
//     <div className="Signup-container">
//       <h2>Create Your Account</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={signUpData.fullName}
//           onChange={(e) =>
//             setSignUpData((prev) => ({ ...prev, fullName: e.target.value }))
//           }
//         />
//         <input
//           type="text"
//           placeholder="Phone (+251...)"
//           value={signUpData.phone}
//           onChange={(e) =>
//             setSignUpData((prev) => ({ ...prev, phone: e.target.value }))
//           }
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={signUpData.email}
//           onChange={(e) =>
//             setSignUpData((prev) => ({ ...prev, email: e.target.value }))
//           }
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={signUpData.password}
//           onChange={(e) =>
//             setSignUpData((prev) => ({ ...prev, password: e.target.value }))
//           }
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmedPassword}
//           onChange={(e) => setConfirmedPassword(e.target.value)}
//         />

//         <label className="membership-label">Membership Type:</label>
//         <div className="account-type-choice">
//           <label className="account-type-label">
//             <input
//               type="radio"
//               name="accountType"
//               value="Permanent Donator"
//               checked={signUpData.membership === "Permanent Donator"}
//               onChange={(e) =>
//                 setSignUpData((prev) => ({
//                   ...prev,
//                   membership: e.target.value,
//                 }))
//               }
//               className="account-type-input"
//             />
//             Permanent Donator
//           </label>

//           <label className="account-type-label">
//             <input
//               type="radio"
//               name="accountType"
//               value="One time Donator"
//               checked={signUpData.membership === "One time Donator"}
//               onChange={(e) =>
//                 setSignUpData((prev) => ({
//                   ...prev,
//                   membership: e.target.value,
//                 }))
//               }
//               className="account-type-input"
//             />
//             One-Time Donator
//           </label>
//         </div>

//         <button type="submit" disabled={isSigningUp || !isFormComplete}  onClick={}>
//           {isSigningUp ? "Sending OTP..." : "Sign Up"}
               
//         </button>
//       </form>

//       <h3>Already have an account?</h3>
//       <p onClick={handleNavigate}>
//         Sign in here <i className="bi bi-person-check text-info"></i>
//       </p>

//       <Toaster
//         position="top-center"
//         toastOptions={{
//           style: {
//             margin: "50px",
//             padding: "15px",
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default Signup;
