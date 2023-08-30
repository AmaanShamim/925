import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="big-text">
            Join us
        </span>
        <span className="small-text">
          We will let you know when we have new arrivals, events and promo's
          don't worry we send them infrequently, just a friendly hi now and
          again!
        </span>
        <div className="form">
          <input type="text" placeholder="Enter your email" />
          <AiOutlineMail />
        </div>
          <span className="text">
            Will be used in accordance with our Privacy Policy.
          </span>
          <div className="social-icons">
            <div className="icons">
                <FaFacebookF />
            </div>
            <div className="icons">
                <FaTwitter />
            </div>
            <div className="icons">
                <FaInstagram />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Newsletter;
