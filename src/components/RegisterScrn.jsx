import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

import './LoginScrn.scss';

export default function RegisterScrn(props) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleEmailInput = e => {
    setEmail(e.target.value);
  };

  const handleFirstNameInput = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameInput = e => {
    setLastName(e.target.value);
  };

  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordInput = e => {
    setConfirmPassword(e.target.value);
  }

  const registerUser = e => {
    e.preventDefault();
    if(password !== confirmPassword) {
      setLoginError("Password not confirmed");
    } else {
      localStorage.setItem('username', email);
      const frmData = new FormData(e.target);
      fetch("/signup/#/ms/signup/6005a9b8d1c747000478175b", {
        method: 'POST',
        body: frmData
      })
      .then(response => {
        console.log(response);
      });
    }
  };  
  return (
    <div className="loginscrn">
      <form data-ms-form="signup" onSubmit={registerUser}>
        <div className="loginbox">
          <div className="loginbox-row">
            <div className="login-label">Email</div>
            <div>
              <input data-ms-member="email"
                id="username"
                name="username"
                type="text"  
                className="login-textbox" 
                value={email}
                onChange={handleEmailInput} 
                required
                placeholder="Your Email"              
              />
            </div>
          </div>
          {/*
          <div className="loginbox-row">
            <div className="login-label">First Name</div>
            <div>
              <input 
                type="text"  
                className="login-textbox" 
                value={firstName}
                onChange={handleFirstNameInput} 
                required
                placeholder="First Name"               
              />
            </div>
          </div>

          <div className="loginbox-row">
            <div className="login-label">Last Name</div>
            <div>
              <input 
                type="text"  
                className="login-textbox" 
                value={lastName}
                onChange={handleLastNameInput} 
                required
                placeholder="Last Name"                 
              />
            </div>
          </div>
          */}
          <div className="loginbox-row">
            <div className="login-label">Password</div>
            <div>
              <input data-ms-member="password"
                id="password"
                name="password"              
                type="password"  
                className="login-textbox" 
                value={password}
                onChange={handlePasswordInput} 
                required
                placeholder="Your Password"               
              />
          </div>
          </div>      

          <div className="loginbox-row">
            <div className="login-label">Confirm</div>
            <div>
              <input 
                type="password" 
                className="login-textbox" 
                value={confirmPassword}
                onChange={handleConfirmPasswordInput} 
                required
                placeholder="Confirm Password"                 
              />
            </div>
          </div> 

          <div className="loginbotton-row">
            <button 
              type="submit"
              className="login-button"
            >
              Sign up
            </button>
          </div>
          <div className="login-error">
            <span>{loginError}</span>
          </div>        
        </div>
      </form>
    </div>
  );
}