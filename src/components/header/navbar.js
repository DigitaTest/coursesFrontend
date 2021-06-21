import React from "react";
import { useAuth } from "../contexts/authContext";
import { NavbarLoggedIn } from "./navbarLoggedIn";
import { NavbarLoggedOut } from "./navbarLoggedOut";

const Navbar = () => {
  const { currentUser } = useAuth();
  if (currentUser) {
    return <NavbarLoggedIn />;
  }
  return <NavbarLoggedOut />;
};

export default Navbar;
