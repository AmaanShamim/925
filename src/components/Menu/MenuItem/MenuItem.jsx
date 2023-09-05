import "./MenuItem.scss"
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MenuItem() {
  const navigate = useNavigate();
  return (
    <>
      <div className="menu-item">
        <span onClick={() => navigate("/")}>home</span>
        <span onClick={() => navigate("/shop")}>shop</span>
        <span onClick={() => navigate("/about")}>about us</span>
        <span>bestsellers</span>
      </div>
    </>
  );
}
