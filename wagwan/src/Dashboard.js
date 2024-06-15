// Dashboard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <button>menu</button>
        <button>home</button>
        <button>filter</button>
        <button>settings</button> {/* Added fourth button */}
      </div>
      <div className="content">
        <div className="rectangles">
          <div className="rectangle" onClick={() => handleNavigation('/enps')}>
            <h3>E-NPS</h3>
          </div>
          <div className="rectangle" onClick={() => handleNavigation('/esat')}>
            <h3>E-SAT</h3>
          </div>
          <div className="rectangle" onClick={() => handleNavigation('/ees')}>
            <h3>E-ES</h3>
          </div>
          <div className="rectangle" onClick={() => handleNavigation('/feedback')}>
            <h3>Most common Feedback</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
