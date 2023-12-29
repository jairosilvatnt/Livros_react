import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const linkCorrente = {
  color: "#027399"
};

const NavBar = () => {
  return (
    <ul>
      <li>
        <NavLink style={linkCorrente} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink style={linkCorrente} to="/frontend">Frontend</NavLink>
      </li>
      <li>
        <NavLink style={linkCorrente} to="/programacao">Programação</NavLink>
      </li>
      <li>
        <NavLink style={linkCorrente} to="/design">Desing</NavLink>
      </li>
      <li>
        <NavLink style={linkCorrente} to="/catalogo">Catalogo</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
