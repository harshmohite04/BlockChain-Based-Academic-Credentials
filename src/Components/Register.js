import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
// import UserRegistry from "../contracts/UserRegistry.json";
// import Web3 from "web3";
import axios from 'axios';

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Register() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");

  // const [password, setPassword] = useState("");
  // const [showPopup, setShowPopup] = useState(false);
  // const [walletAddress, setWalletAddress] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // Initialize Web3
  // const loadWeb3 = async () => {
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum);
  //     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //   } else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider);
  //   } else {
  //     window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
  //   }
  // };

//   const loadWeb3 = async () => {
//     const web3 = new Web3('http://127.0.0.1:8545'); // Default Ganache address
//     window.web3 = web3;
//     return web3;
// };

  // Load Blockchain Data
  // const registerAccount = async () => {
  //   await loadWeb3();
  //   const web3 = window.web3;

  //   // Get the network ID
  //   const networkId = await web3.eth.net.getId();
  //   const networkData = UserRegistry.networks[networkId];

  //   if (networkData) {
  //     const userRegistry = new web3.eth.Contract(UserRegistry.abi, networkData.address);

  //     const accounts = await web3.eth.getAccounts();
  //     const userAccount = accounts[0];

  //     // Assuming we are registering a user with password (hashed, for security purposes)
  //     const registrationPassword = web3.utils.sha3(password);

  //     // Interact with the contract to register the account
  //     await userRegistry.methods.register(userAccount, registrationPassword).send({ from: userAccount });

  //     // After successful registration, show the popup
  //     setWalletAddress(userAccount);
  //     setShowPopup(true);
  //   } else {
  //     window.alert("UserRegistry contract not deployed to detected network.");
  //   }
  // };




//   const registerAccount = async () => {
//     try {
//         await loadWeb3();
//         const web3 = window.web3;

//         // Log the network ID to ensure it matches
//         const networkId = await web3.eth.net.getId();
//         console.log('Network ID:', networkId);

//         // If the network ID is correct, load the contract
//         if (networkId === 1727671899844) { // Use integer format
//             console.log('Entered If block');
//             const userRegistryAddress = '0xCd33Ef5C9e29DaeE95565Cbb203daEBDf445D3Fc'; // Your deployed contract address
//             const userRegistry = new web3.eth.Contract(UserRegistry.abi, userRegistryAddress);

//             const accounts = await web3.eth.getAccounts();
//             const userAccount = accounts[0];

//             // Assuming you get these values from a form in the frontend
//             const username = document.getElementById('username').value;
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;

//             // Ensure username, email, and password are not empty
//             if (!username || !email || !password) {
//                 throw new Error("Username, email, and password are required.");
//             }

//             const registrationPassword = web3.utils.sha3(password); // Hash the password on the frontend

//             // Interact with the contract to register the account
//             await userRegistry.methods.register(username, email, password).send({ from: userAccount });

//             setWalletAddress(userAccount);
//             setShowPopup(true);
//         } else {
//             window.alert("UserRegistry contract not deployed to detected network.");
//         }
//     } catch (error) {
//         console.error("Error registering account:", error);
//         window.alert(error.message);
//     }
// };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   registerAccount();
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send POST request to the backend
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        password,
      });

      if (response.data.success) {
        // Show success popup
        setShowPopup(true);
       
      } else {
        alert('Registration failed.');
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert('An error occurred while registering.');
    }
  };


  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden"
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
            secure, and tamper-proof solution for managing academic records.
          </p>
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <MDBCard className="my-5 bg-glass">
            <h3
              className="display-3 fw-bold ls-tight px-1 text-center mt-3"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              <span style={{ color: "#ad1fff" }}>REGISTER</span>
            </h3>
            <MDBCardBody className="p-5">
              <form onSubmit={handleSubmit}>
                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Username" // New Username input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      id="form3"
                      type="text"
                      value={email} // bind to email state
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Confirm Password"
                  id="co-password"
                  type="password"
                  required
                />

                <MDBBtn type="submit" className="w-100 mb-4" size="md">
                  Sign Up
                </MDBBtn>
              </form>

              <Link to="/login">
                <MDBBtn className="w-100 mb-4" size="md">
                  Login
                </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>

          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <h3>Registration Successful!</h3>
                <p>Your account has been successfully registered.</p>
                <Link to=""></Link>
                <MDBBtn onClick={() => navigate("/otp-verification")}>Close</MDBBtn>
              </div>
            </div>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
