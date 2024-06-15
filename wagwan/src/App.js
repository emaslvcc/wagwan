import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import logo from './logo192.png';

function App() {
  const [employeeID, setEmployeeID] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { employeeID });
      alert(response.data);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the login form.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

export default App;

