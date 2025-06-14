import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Toaster, toast } from "react-hot-toast";

const VerifyOtp = () => {
  const { createAccount, emailForVerify } = useAuthStore();
  const navigate = useNavigate();

  const [verify, setVerify] = useState({
    email: emailForVerify || "",
    otp: ""
  });
  const [loading, setLoading] = useState(false);

  const styles = {
    page: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f6fa",
    },
    container: {
      width: "100%",
      maxWidth: "420px",
      padding: "40px 30px",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
      textAlign: "center",
    },
    heading: {
      fontSize: "26px",
      marginBottom: "15px",
      fontWeight: "600",
      color: "#2d3436",
    },
    text: {
      fontSize: "15px",
      marginBottom: "20px",
      color: "#636e72",
    },
    input: {
      width: "100%",
      padding: "12px",
      fontSize: "17px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      marginBottom: "20px",
      outline: "none",
    },
    button: {
      width: "100%",
      padding: "12px",
      fontSize: "16px",
      backgroundColor: "#6c5ce7",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
    },
  };

 const handleVerify = async () => {
  if (verify.otp.length !== 6 || !/^\d{6}$/.test(verify.otp)) {
    toast.error("❗ OTP must be 6 numeric digits.");
    return;
  }

  try {
    setLoading(true);
    await createAccount(verify);  // toast handled inside here
    navigate("/userDashBoard");
  } catch (error) {
    // Error already toasted inside `createAccount`, so no need to repeat
  } finally {
    setLoading(false);
  }
};
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>🔐 Verify Your Email</h2>
        <p style={styles.text}>
          We’ve sent a 6-digit OTP to your email <strong>{emailForVerify}</strong>.
          <br />Please check your inbox (and spam folder) and enter it below.
        </p>
        <input
          type="text"
          maxLength="6"
          pattern="\d*"
          inputMode="numeric"
          placeholder="Enter 6-digit OTP"
          value={verify.otp}
          onChange={(e) =>
            setVerify((prev) => ({ ...prev, otp: e.target.value }))
          }
          style={styles.input}
        />
        <button
          onClick={handleVerify}
          disabled={loading || verify.otp.length !== 6}
          style={{
            ...styles.button,
            backgroundColor:
              loading || verify.otp.length !== 6 ? "#a29bfe" : styles.button.backgroundColor,
            cursor: loading ? "not-allowed" : "pointer"
          }}
        >
          {loading ? "Verifying..." : "Verify & Create Account"}
        </button>
      </div>
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

export default VerifyOtp;
