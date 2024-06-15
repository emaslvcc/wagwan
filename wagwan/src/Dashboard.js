// Dashboard.js

import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button> {/* Added fourth button */}
      </div>
      <div className="content">
        <div className="rectangles">
          <div className="rectangle">
            <h3>E-NPS</h3>
          </div>
          <div className="rectangle">
            <h3>E-SAT</h3>
          </div>
          <div className="rectangle">
            <h3>E-ES</h3>
          </div>
          <div className="rectangle">
            <h3>Most common Feedback</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
