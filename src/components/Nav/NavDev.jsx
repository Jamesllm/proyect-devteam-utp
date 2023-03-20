import React from "react";
import { Link } from "react-router-dom";
import "./navdev.css";

export const NavDev = () => {
  return (
    <nav className="navbar">
      <div className="navbar_wrap">
        <div className="logo">
          <Link to="/">{"</>"} DEVTEAM</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavDev;
