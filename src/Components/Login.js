import React from "react";
import { Link } from "react-router-dom";
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
// import "@fortawesome/fontawesome-free/css/all.min.css";

function Login() {
  return (
    <MDBContainer
      fluid
      className="p-4 mt-5 background-radial-gradient overflow-hidden"
    >
      <MDBRow>
      <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Academic Credentials Security Using
            <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>BLOCKCHAIN</span>
          </h1>

          <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
            Blockchain technology is revolutionizing the way academic
            credentials are stored, verified, and accessed. Traditionally,
            institutions have issued paper-based certificates, which can be
            easily lost or tampered with. Blockchain offers a decentralized,
            secure, and tamper-proof solution for managing academic records
          </p>
        </MDBCol>
        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard className="my-5 bg-glass">
            <h3
              className=" display-3 fw-bold ls-tight px-1 text-center mt-3"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              <span style={{ color: "#ad1fff" }}>LOGIN</span>
            </h3>
            <MDBCardBody className="p-5">
              <MDBInput
                wrapperClass="mb-4"
                label="Email or Wallet Address"
                id="form3"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="password"
                type="password"
              />

<MDBBtn className="w-100 mb-4" size="md">
                 Login
                </MDBBtn>

             
              <Link to="/">
   
                <MDBBtn className="w-100 mb-4" size="md">
                  sign up
                </MDBBtn>
              </Link>

              <div className="text-center">
                <p>or sign up with:</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
