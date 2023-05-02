import React from "react";
import "./Services.css";
import MainTitle from "../MainTitle/MainTitle";
import { BsFillPaletteFill } from "react-icons/bs";
import { TbVector } from "react-icons/tb";
import { FaSketch, FaPencilRuler } from "react-icons/fa";
import service from "../../assests/services.jpg";

function Services() {
  const services = [
    {
      img: <BsFillPaletteFill />,
      title: "Graphic Design",
      desc: "Graphic design is the process of visual communication and problem-solving using one or more of typography, photography and illustration.",
    },
    {
      img: <TbVector />,
      title: "Web Design",
      desc: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
    },
    {
      img: <FaSketch />,
      title: "UI & UX",
      desc: "Process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction.",
    },
    {
      img: <FaPencilRuler />,
      title: "Web Development",
      desc: "Web development is a broad term for the work involved in developing a web site for the Internet or an intranet.",
    },
  ];
  return (
    <div className="services">
      <MainTitle title={"Services"} desc={`Don't be busy, be productive`} />
      <div className="container">
        <div className="info">
          {services.map((service) => {
            return (
              <div className="box">
                {service.img}
                <div className="details">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="image">
          <img src={service} alt="service" />
        </div>
      </div>
    </div>
  );
}

export default Services;
