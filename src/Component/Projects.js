import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="container-fluid">
      <div className="row mt-5 mb-3">
        <div className="col-md-3">
          <div className="card mt-2">
            <img
              src={require("../Utils/e-com-ss.png")}
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <div className="card-title">
                <h4>Buy-in(Shopping-Web-App)</h4>
                <p className="card-text">
                  Developed fully functional E-Commerce website with spring
                  boot. Implemented Role based authentication, shopping cart
                  functionality, E-mail service, forgot password module.{" "}
                </p>
                <Link to={"https://github.com/ubunfakn/E-Commerce"} className="btn btn-outline-danger btn-lg">
                  Source code on Github
                </Link>
              </div>
            </div>
            <div className="card-footer">
              <h6 className="d-flex">Tools: Spring Boot,My-SQL,Thymeleaf,Code-gpt</h6>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mt-2">
            <img
              src={require("../Utils/mern-e-com-dash-ss.png")}
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <div className="card-title">
                <h4>E-COM-DASHBOARD</h4>
                <p className="card-text">
                  Developed a single page user-friendly Web-app with React where
                  user can perform CRUD operations on products. Implemented user
                  authentication with JWT.{" "}
                </p>
                <Link to={"https://github.com/ubunfakn/E-COM-DASHBOARD-SERVER"} className="btn btn-outline-danger mt-4 btn-lg">
                  Source code on Github
                </Link>
              </div>
            </div>
            <div className="card-footer">
              <h6 className="d-flex">Tools: MERN-Stack,Code-gpt</h6>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mt-2">
            <img
              src={require("../Utils/smart-c-m-ss.png")}
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <div className="card-title">
                <h4>SMART CONTACT MANAGER</h4>
                <p className="card-text">
                  Developed a dynamic Web-app for saving contacts in database.
                  Implemented User authentication using spring security and
                  integrated razorpay payment API in it{" "}
                </p>
                <Link to={"https://github.com/ubunfakn/Smart-Contact-Manager"} className="btn btn-outline-danger btn-lg">
                  Source code on Github
                </Link>
              </div>
            </div>
            <div className="card-footer">
            <h6 className="d-flex">Tools: Spring Boot,My-SQL,Thymeleaf,jQuery</h6>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mt-2">
            <img
              src={require("../Utils/chatroom-ss.png")}
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <div className="card-title">
                <h4>CHATROOM</h4>
                <p className="card-text">
                  Developed a Chatroom with Websocket using spring boot. In
                  chatroom thymeleaf is used for developing frontend and
                  javascript is used for handling various requests.{" "}
                </p>
                <Link to={"https://github.com/ubunfakn/chatroom"} className="btn btn-outline-danger btn-lg">
                  Source code on Github
                </Link>
              </div>
            </div>
            <div className="card-footer">
            <h6 className="d-flex">Tools: Spring Boot,Web-Socket,jQuery</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
