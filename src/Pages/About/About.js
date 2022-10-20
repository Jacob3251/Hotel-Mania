import React from "react";
import propic from "../../images/propic.png";
import "./About.css";
const About = () => {
  return (
    <div className="container">
      <div>
        <div className="container about-dev emptybox">
          <img src={propic} />
          <h3>Greetings from Md. Nayeem Hasan Adil</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
