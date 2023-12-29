import React from "react";
import './Logo.css';
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="logo">
        <span>Editora MaujorTec</span>
      </h1>
    </Link>
  );
}
export default Logo;