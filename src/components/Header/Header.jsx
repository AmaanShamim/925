import { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

// import { Search } from "./Search/Search";
// import { Cart } from "../Cart/Cart";
// import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {
  const [visibleText, setVisibleText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const logo = "nine.";

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < logo.length) {
        setVisibleText((prevVisibleText) => [
          ...prevVisibleText,
          logo[currentIndex],
        ]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setVisibleText([]);
        setCurrentIndex(0);
      }
    }, 700);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, logo]);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, []);

  return (
    <header className={`main-header ${scrolled? 'sticky-header' : ''}`}>
      <div className="header-content">
        <div className="left">{visibleText}</div>
        <ul className="center">
          <li>home</li>
          <li>shop</li>
          <li>about us</li>
          <li>social media</li>
          <li>bestsellers</li>
        </ul>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cart-icon">
            <CgShoppingCart />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
