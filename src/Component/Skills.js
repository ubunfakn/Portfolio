import React from "react";
import '../Utils/CSS/skillstyle.css';

export default function Skills() {
  return (
    <div>
      <div className="inner">
        <div className="header">
          <h1>My-Skills</h1>
        </div>
        <div className="container" id="container-skill">
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={require ('../Utils/Rest-API.png')} alt="" />
              </div>
              <h3>Rest API</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={require ('../Utils/springboot.png')} alt="" />
              </div>
              <h3>Spring Boot</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={require ('../Utils/hibernate.png')} alt="" />
              </div>
              <h3>Hibernate</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={require ('../Utils/mysql.png')} alt="" />
              </div>
              <h3>My-SQL</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={require ('../Utils/nodejs.png')} alt="" />
              </div>
              <h3>Node js</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={require ('../Utils/express.png')} alt="" />
              </div>
              <h3>Express js</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={require ('../Utils/mongodb.png')} alt="" />
              </div>
              <h3>Mongodb</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={require ('../Utils/React-icon.svg.png')} alt="" />
              </div>
              <h3>React js</h3>
            </div>
          </div>

          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={require ('../Utils/html.png')} alt="" />
              </div>
              <h3>HTML</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={require ('../Utils/boots.jpg')} alt="" />
              </div>
              <h3>Bootstrap</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={require ('../Utils/js.png')} alt="" />
              </div>
              <h3>Javascript</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                <img className="skill-icon" src={require ('../Utils/git.png')} alt="" />
              </div>
              <h3>Git</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
