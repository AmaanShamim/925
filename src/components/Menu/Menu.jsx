import "./Menu.scss";
import React, { useState } from "react";
import MenuItem from "./MenuItem/MenuItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

export default function Menu() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="menu-bar" onClick={() => setMenu(!menu)}>
        <div className={`menu ${menu ? "menu-on" : ""}`}>
          {!menu ? <GiHamburgerMenu /> : <MdClose />}
          Menu
        </div>
        {menu && <MenuItem />}
      </div>
    </>
  );
}
