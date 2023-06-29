import React from "react";
import "../Utils/CSS/homestyle.css";
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <div className="col-md-8 offset-md-2">
        <div className="card mt-2 mb-5">
          <img src={require('../Utils/hi.webp')} style={{maxHeight:'50vh'}} className="card-img-top" alt="" />
          <div className="card-body">
            <h1>Hi.......</h1>
            <h4 className="head-title mt-5">
              I am <em style={{ color: "blueviolet" }}>ANKIT KUMAR NASHINE</em>
            </h4>
            <h4 className="head-title mt-4">I'm a Web Developer</h4>
            <div className="container">
              <Link to={"/skills"}  className="btn btn-primary btn-lg mt-5">
                Check out my skills
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
