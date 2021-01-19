import React from "react";

import './Navbar.scss';

export default function Navbar(props) {
  
  const showLogin = () => {
    document.location.href = "/login";
  };
  const showRegister = () => {
    document.location.href = "/registration";
  };
  return (
    <div className="topNav">
      <div data-ms-membership="6005a9b8d1c747000478175b" className="text" onClick={showRegister}>Register</div>
      <div data-ms-membership="6005a9b8d1c747000478175b" className="text" onClick={showLogin}>Login</div>
      <div className="text" onClick={showLogin}>logout</div>
    </div>
  );
}