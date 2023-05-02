import React from "react";
import "./Portfolio.css";
import MainTitle from "../MainTitle/MainTitle";
import project1 from "../../assests/portfolio-1.jpg";
import project2 from "../../assests/portfolio-2.jpg";
import project3 from "../../assests/portfolio-3.jpg";

function Portfolio() {
  const projects = [
    {
      img: project1,
      title: "Project Here",
      desc: "My creative ability is very difficult to measure because it can manifest in so many surprising and.",
    },
    {
      img: project2,
      title: "Project Here",
      desc: "My creative ability is very difficult to measure because it can manifest in so many surprising and.",
    },
    {
      img: project3,
      title: "Project Here",
      desc: "My creative ability is very difficult to measure because it can manifest in so many surprising and.",
    },
  ];
  return (
    <div className="portfolio">
      <MainTitle
        title={"Portfolio"}
        desc={"If you do it right, it will last forever."}
      />
      <di className="container">
        {projects.map((project) => {
          return (
            <div className="box">
              <img src={project.img} alt="project" />
              <div className="info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          );
        })}
      </di>
    </div>
  );
}

export default Portfolio;
