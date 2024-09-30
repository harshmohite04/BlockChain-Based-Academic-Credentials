import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

import "mdb-react-ui-kit/dist/css/mdb.min.css";

function OtpVerification() {
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to generate a random 6-digit OTP
  const generateOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    console.log(`Generated OTP: ${otp}`); // For demo purposes, log it to the console.
  };

  // Handle OTP input and verification
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (enteredOtp === generatedOtp) {
      setOtpVerified(true);
      setError("");
      
      // Redirect to /dashboard after successful verification
      navigate("/login"); // Use navigate for redirection
    } else {
      setError("Invalid OTP, please try again.");
      setOtpVerified(false);
    }
  };

  return (
    <MDBContainer
      fluid
      className="p-4 d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MDBRow className="w-100 d-flex justify-content-center align-items-center">
        <MDBCol md="6" lg="4">
          <MDBCard
            className="bg-glass"
            style={{ borderRadius: "1rem", backgroundColor: "rgba(255,255,255,0.9)" }}
          >
            <MDBCardBody className="p-5">
              <div className="text-center mb-4">
                <MDBIcon icon="lock" size="3x" style={{ color: "#ad1fff" }} />
                <h3 className="mt-3">OTP Verification</h3>
                <p>Enter the OTP sent to your email to verify your identity</p>
              </div>

              {!generatedOtp && (
                <MDBBtn
                  className="mb-4 w-100"
                  color="purple"
                  onClick={generateOtp}
                >
                  Generate OTP
                </MDBBtn>
              )}

              {generatedOtp && (
                <>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Enter OTP"
                    id="otpInput"
                    type="text"
                    value={enteredOtp}
                    onChange={(e) => setEnteredOtp(e.target.value)}
                  />

                  <MDBBtn
                    className="mb-4 w-100"
                    color="purple"
                    onClick={handleOtpSubmit}
                  >
                    Verify OTP
                  </MDBBtn>

                  <p className="text-center text-muted">
                    <small>
                      Generated OTP (For Demo): <strong>{generatedOtp}</strong>
                    </small>
                  </p>
                </>
              )}

              {otpVerified && (
                <div className="text-center mt-3">
                  <MDBIcon
                    icon="check-circle"
                    size="2x"
                    style={{ color: "#28a745" }}
                  />
                  <p className="mt-2 text-success">OTP Verified Successfully!</p>
                </div>
              )}
              {error && <p className="text-danger text-center">{error}</p>}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default OtpVerification;
