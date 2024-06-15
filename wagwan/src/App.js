import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import logo from './logo192.png';
import Questionnaire from './Questionnaire';

function Login() {
  const [employeeID, setEmployeeID] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Directly navigate to the questionnaire page
    navigate('/questionnaire');
  };

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
              placeholder="Employee ID (eg., e6352037)"
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
