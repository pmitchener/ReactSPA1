import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

import './LoginScrn.scss';

export default function LoginScrn(props) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleEmailInput = e => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };

  const logonUser = e => {
    e.preventDefault();
    if(email === 'pmitchener@rogers.com' 
    && password === 'test') {
      localStorage.setItem('username', email);
      history.push("/");
    }
    setLoginError("Login Failed");
  };
  return (
    <div className="loginscrn">
      <form data-ms-form="login"  onSubmit={logonUser}>
        <div className="loginbox">
          <div className="loginbox-row">
            <div className="login-label">Email</div>
            <div>
              <input 
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

          <div className="loginbox-row">
            <div className="login-label">Password</div>
            <div>
              <input 
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

          <div className="loginbotton-row">
            <button 
              type="submit"
              className="login-button" 
            >
              Login
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