import React from "react";
import {Link} from 'react-router-dom';
import '../Utils/CSS/aboutstyle.css';

export default function About() {
  return (
    <div className="container-fluid text-white mt-3">
      <h1>About Me</h1>
      <h3 className="about-text mt-5" align="left|justify">
        Welcome to my portfolio website! I'm thrilled to have you here. Allow me
        to introduce myself—I'm Ankit Kumar Nashine, a passionate web-developer.
        I have a strong enthusiasm for creating beautiful and functional
        websites that deliver exceptional user experiences.
        <br />
        <br />
        As a fresher in the field of web development, I'm eager to embark on
        this exciting journey of turning ideas into reality through coding and
        design. I am constantly pushing myself to learn and grow, staying
        updated with the latest technologies and industry trends.
        <br />
        <br />I believe that the web is a powerful tool that can bring positive
        change to the world. It has the potential to connect people, bridge
        gaps, and enhance communication. I'm committed to leveraging my skills
        in web development to contribute to this transformative space.
        <br />
        <br />
        In my journey as a web developer, I have worked on a range of projects,
        including building responsive websites and web-apps, implementing
        user-friendly interfaces, as well as user authentication. Each project
        has been a stepping stone in my growth, allowing me to gain valuable
        experience and insight.
        <br />
        <br />
        Thank you for taking the time to visit my portfolio website. I hope you
        enjoy exploring the <Link to={"/projects"}>projects</Link> I've worked on so far.
        <br />
        <br />
        I'm excited to connect with you and be a part of your web development journey!
      </h3>
    </div>
  );
}
