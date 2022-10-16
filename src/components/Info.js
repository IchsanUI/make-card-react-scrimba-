import React from "react";
import logoEmail from "../Assets/Mail.png";
import logoLinkedin from "../Assets/linkedin.png";
import profile from "../Assets/P1.jpg"

function Info() {
  return (
      <div>
        <div className="Image">
          <img src={profile} width="200px"/>
        </div>
        <div className="Title">
          <h2>Laura Smith</h2>
          <h5>Front End Developer</h5>
          <h6>Portfolio.mo</h6>
        </div>
        <div className="Button">
          <div className="ButtonEmail">
            <img src={logoEmail} />
            <h4>Email</h4>
          </div>
          <div className="ButtonLinkedIn">
            <img src={logoLinkedin} />
            <h4>LinkedIn</h4>
          </div>
        </div>
      </div>
  );
}

export default Info;
