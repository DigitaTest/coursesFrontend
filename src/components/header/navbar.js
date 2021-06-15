import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { ImHome3 } from "react-icons/im";
import logo1 from "../../assets/pngs/logo1.png";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
        
        
        <div id="logo">
          <Link to="/">
            <img height="80px" width="80px" src={logo1} alt="" />
          </Link>
        </div>

          <ul className="leftSection">
            <li>
              <Link to="/courses">
                <div className="leftSectionLinks">
                  Kursevi
                </div>
                </Link>
            </li>
            <li className="line">|</li>
            <li>
              <Link to="/team">
              <div className="leftSectionLinks">
                    O nama
                </div>
                </Link>
            </li>
            <li className="line">|</li>
            <li>
              <Link to="/contact">
                <div className="leftSectionLinks">
                  Kontakt
                </div>
                </Link>
            </li>
          </ul>

          <ul className="rightSection">
            <li>
              <Link to="/user">
                <div className="userIcon">
                  <BiUser />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
