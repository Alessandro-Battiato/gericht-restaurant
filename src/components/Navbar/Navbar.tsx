import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

interface NavbarState {
  toggleMenu: boolean;
}

const Navbar = (props: NavbarState = { toggleMenu: false }) => {
  const [toggleMenu, setToggleMenu] = useState(props.toggleMenu);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div></div>
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={handleToggleMenu}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={handleToggleMenu}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home" onClick={handleToggleMenu}>
                  Home
                </a>
              </li>
              <li className="p__opensans">
                <a href="#about" onClick={handleToggleMenu}>
                  About
                </a>
              </li>
              <li className="p__opensans">
                <a href="#menu" onClick={handleToggleMenu}>
                  Menu
                </a>
              </li>
              <li className="p__opensans">
                <a href="#awards" onClick={handleToggleMenu}>
                  Awards
                </a>
              </li>
              <li className="p__opensans">
                <a href="#contact" onClick={handleToggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
