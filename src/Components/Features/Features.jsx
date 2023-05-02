import React from "react";
import "./Features.css";
import { BsMagic, BsGem, BsGlobeAmericas } from "react-icons/bs";

function Features() {
  const features = [
    {
      img: <BsMagic />,
      title: "Tell Us Your Idea",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque blanditiis repudiandae, consequuntur modi deleniti nam iste tempora placeat recusandae sunt velit corrupti, consequatur non suscipit quaerat accusamus temporibus architecto! Ipsam.",
    },
    {
      img: <BsGem />,
      title: "We Will Do All The Work",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque blanditiis repudiandae, consequuntur modi deleniti nam iste tempora placeat recusandae sunt velit corrupti, consequatur non suscipit quaerat accusamus temporibus architecto! Ipsam.",
    },
    {
      img: <BsGlobeAmericas />,
      title: "Your Product is Worldwide",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque blanditiis repudiandae, consequuntur modi deleniti nam iste tempora placeat recusandae sunt velit corrupti, consequatur non suscipit quaerat accusamus temporibus architecto! Ipsam.",
    },
  ];
  return (
    <div className="features">
      <div className="container">
        {features.map((feature) => {
          return (
            <div className="box">
              {feature.img}
              <h3>{feature.title}</h3>
              <p title={feature.desc}>{feature.desc.slice(0,100)}...</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
