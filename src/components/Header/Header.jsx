import React from "react";
import './Header.css';
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";


const Header = () => {
  return(
    <header className="header">
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;