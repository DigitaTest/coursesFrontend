import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { ImHome3 } from "react-icons/im";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <div id="header" className="container">
        <div id="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <section id="menu">
          <ul>
            <li>
              <Link to="/">
                <ImHome3 />
              </Link>
            </li>
            <li>
              <Link to="/courses">Kursevi</Link>
            </li>
            <li>
              <Link to="/team">O nama</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
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
          <ul>
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
        </section>
      </div>
    </>
  );
};

export default Navbar;
