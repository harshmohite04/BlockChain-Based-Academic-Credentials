import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import OtpVerification from './Components/OtpVerification';
import Dashboard from './Components/Dashboard';
// import RegisterM from './Components/RegisterM';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Register component at root ("/") */}
        <Route path="/" element={<Register/>} />

        {/* Route for Login component at "/login" */}
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OtpVerification/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
