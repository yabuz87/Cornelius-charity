import React, { useState } from "react";
import "./Login.css";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Login = () => {
  const { isLoggingIn, login } = useAuthStore();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const gotoSignup = () => {
    navigate("/signup");
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    login(loginData);
  };

  return (
    <div className="Login-page">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p className="subtext">Please enter your credentials to continue</p>
        <form onSubmit={handleSubmitData}>
          <input
            type="text"
            placeholder="Email address"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            required
          />

          <button type="submit" disabled={isLoggingIn}>
            {isLoggingIn ? "Logging In..." : "Login"}
          </button>
        </form>

        <p className="signup-text">
          Don’t have an account?{" "}
          <span className="link" onClick={gotoSignup}>
            Sign up
          </span>
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
    </div>
  );
};

export default Login;
