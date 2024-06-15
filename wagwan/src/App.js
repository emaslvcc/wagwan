import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import logo from './logo192.png';
import Questionnaire from './Questionnaire';

function Login() {
  const [employeeID, setEmployeeID] = useState('');
  //const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Directly navigate to the questionnaire page
    navigate('/questionnaire');
  };
  /*
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { employeeID, password });
      alert(response.data);
      navigate('/questionnaire');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the login form.');
    }
  };
  */

  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="Login-logo" alt="logo" />
        <div className="login-container">
          <h1>Login to Precedence BV</h1>
          <p>Enter your employee details to login</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={employeeID}
              onChange={(e) => setEmployeeID(e.target.value)}
              placeholder="Employee ID"
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
