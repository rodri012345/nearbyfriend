import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        NearbyFriend
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/services">Quienes Somos</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Mi Cuenta</NavLink>
        </li>
        <li>
          <NavLink to="/RegistroCliente">Registro</NavLink>
        </li>
      </ul>
    </nav>
  );
};