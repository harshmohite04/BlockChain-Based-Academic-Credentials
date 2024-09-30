import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Register component at root ("/") */}
        <Route path="/" element={<Register />} />

        {/* Route for Login component at "/login" */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
