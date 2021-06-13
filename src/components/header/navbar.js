import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { ImHome3 } from "react-icons/im";
import logo1 from "../../assets/pngs/logo1.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
        
        
        <div id="logo">
          <Link to="/">
            <img height="90px" width="90px" src={logo1} alt="" />
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
            <li>
              <Link to="/team">
              <div className="leftSectionLinks">
                    O nama
                </div>
                </Link>
            </li>
            <li>
              <Link to="/contact">
                <div className="leftSectionLinks">
                  Kontakt
                </div>
                </Link>
            </li>
          </ul>

          {/* <div>
          <ul>
            <li>
              <Link to="/user">
                <TiUser id="user-Icon" />
              </Link>
            </li>
          </ul>
          <ul>
            <button className="btn-login">
              <Link to="login">PRIJAVI SE </Link>
            </button>
          </ul>
          <ul>
            <button className="btn-signup">
              <Link to="/signup">REGISTRUJ SE </Link>
            </button>
          </ul>
          </div> */}

          <ul className="rightSection">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
