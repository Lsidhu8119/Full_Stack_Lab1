import React from "react";
import logo from "../assets/logo.png"; // <-- Importing logo

export const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="Pixell River Logo" className="brand__logo" />
        <span className="brand__name">Pixell River Financial</span>
      </div>
      <div className="nav-links">
        <a href="#">Employees</a>
        <a href="#">Organization</a>
      </div>
    </nav>
  );
};
