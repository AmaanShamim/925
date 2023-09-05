import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {
  const [visibleText, setVisibleText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);
  const navigate = useNavigate();
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
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <div className="left" onClick={() => navigate("/")}>
            {visibleText}
          </div>
          <ul className="center">
            <li onClick={() => navigate("/")}>home</li>
            <li>shop</li>
            <li>about us</li>
            <li>social media</li>
            <li>bestsellers</li>
          </ul>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount} </span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
