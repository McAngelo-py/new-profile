import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import './User.css';

const User = () => {
  return (
    <div className="user-container">
      <Navbar />
      <div className="user-content">
        <Profile />
      </div>
    </div>
  );
};

export default User;