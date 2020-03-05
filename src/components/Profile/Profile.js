import React from 'react';
import './Profile.scss';
import logo from './images/popcorn.png';

function Profile() {
  return (
    <div className="login">
      <div className="login-left">
        <header>
          <img src={logo} alt="popcorn.png" />
          <div className="header-text">
            <h1>Log In</h1>
            <h6>Movie app</h6>
          </div>
        </header>
        <div className="login-left-buttons">
          <button>Log In</button>
          <button>Browse as Guest</button>
        </div>
        <p>Guest users have access to limited features</p>
      </div>
      <div className="login-right">
        <h1>Browse and rate your favourite tv shows</h1>
      </div>
    </div>
  )
}

export default Profile;