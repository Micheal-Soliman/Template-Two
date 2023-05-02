import React from "react";
import MainTitle from "../MainTitle/MainTitle";
import about from "../../assests/about.jpg";
import "./About.css";


function About() {
  return (
    <div className="about">
      <MainTitle title={"About"} desc={"Less is more work"} />
      <div className="container">
        <div className="image">
          <img src={about} alt="about" />
        </div>
        <div className="info">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            placeat praesentium molestiae corporis voluptas iusto aspernatur,
            ducimus minima fuga ipsam cupiditate assumenda, asperiores nulla
            dolor veritatis voluptatibus architecto consequatur molestias.
          </p>
          <span></span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            placeat praesentium molestiae corporis voluptas iusto aspernatur,
            ducimus minima fuga ipsam cupiditate assumenda, asperiores nulla
            dolor veritatis voluptatibus architecto consequatur molestias.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
