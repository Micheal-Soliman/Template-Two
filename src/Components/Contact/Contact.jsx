import React from "react";
import "./Contact.css";
import MainTitle from "../MainTitle/MainTitle";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <MainTitle title={"Contact"} desc={"We are born to create"} />
      <div className="container">
        <div className="info">
          <h2>Feel free to drop us a line at:</h2>
          <h3>michealsoliman2@gmail.com</h3>
          <div>
            Find Us On Social Networks
            <FaFacebookF />
            <FaYoutube />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
