import React from "react";
import "./About.scss";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <div>
      <div className="container">
        <div className="title">nine.</div>
        <div className="sub-title">
          We provide 92.5 hallmark silver jewellery💍
        </div>
        <div className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          laboriosam quo, sequi nulla libero distinctio quia ratione, molestias
          molestiae, quis voluptates! Culpa ea labore quia suscipit inventore
          quidem placeat excepturi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quis ex quia, cum quaerat perferendis aliquid sed
          necessitatibus voluptate tempora assumenda hic accusamus laboriosam?
          Distinctio ad corporis magni, voluptatibus rem dolorem?
        </div>
        <div className="map">
            <dvi className="map-title">find us here:</dvi>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1481.9828661832094!2d86.14810199422314!3d23.66368892330956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4230152cf89eb%3A0x84ce0fac9d55c3f3!2sAirtel%20Service%20centre!5e0!3m2!1sen!2sin!4v1693942262266!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="social-icons">
          <div className="icons">
            <FaFacebookF /> Facebook
          </div>
          <div className="icons">
            <FaTwitter /> Twitter
          </div>
          <div className="icons">
            <FaInstagram /> Instagram
          </div>
        </div>
      </div>
    </div>
  );
}
