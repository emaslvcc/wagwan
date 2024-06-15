// Dashboard.js

import React from 'react';
import { CiFilter } from 'react-icons/ci';
import { GoGear } from 'react-icons/go';
import { HiOutlineMenu } from 'react-icons/hi'; // Correct import based on available icons
import { IoHomeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <button onClick={() => handleNavigation('/')} className="icon-button">
          <HiOutlineMenu size={20} /> {/* Use HiOutlineMenu or the correct icon name */}
        </button>
        <button onClick={() => handleNavigation('/home')} className="icon-button">
          <IoHomeOutline size={20} />
        </button>
        <button onClick={() => handleNavigation('/filter')} className="icon-button">
          <CiFilter size={20} />
        </button>
        <button onClick={() => handleNavigation('/settings')} className="icon-button">
          <GoGear size={20} />
        </button>
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
