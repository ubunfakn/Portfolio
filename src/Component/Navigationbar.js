import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigationbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'rgb(4 13 42)'}}>
        <NavLink style={{fontSize:'2rem', fontFamily:'Libre Baskerville'}} className="navbar-brand" to={"/"}>
          My-Portfolio
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" style={{fontSize:'140%'}}>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/about"}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/skills"}>
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/projects"}>
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
