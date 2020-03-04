import React from 'react';
import './Profile.scss';

function Profile() {
  return (
    <div className="login">
      <div className="login-left">
        <header>
          <img src="https://img.icons8.com/cotton/64/000000/3d-glasses.png"></img>
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
      <div className="login-right"></div>
    </div>
  )
}

export default Profile;