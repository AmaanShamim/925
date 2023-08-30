import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About us</div>
          <div className="text j1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus magnam, beatae omnis excepturi optio hic possimus nulla
            incidunt quae aspernatur qui id. Autem asperiores, quidem ipsam
            distinctio delectus repellat cum!
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Surat - Dumas Rd, Piplod, Surat, Gujarat, 395007
            </div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">xyz123@gmail.com</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">+91-9876543210</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Rings</span>
          <span className="text">Pendents</span>
          <span className="text">Necklace</span>
          <span className="text">Earring</span>
          <span className="text">Kada</span>
          <span className="text">Mangalsutra</span>
          <span className="text">Payal</span>
        </div>
        <div className="col">
          <div className="title">Home</div>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                925 Store® 2023 created by amaan shamim khan
            </div>
            <img src={Payment} alt='' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
