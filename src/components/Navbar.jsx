import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registroOpen, setRegistroOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setRegistroOpen(false); 
  };

  const toggleRegistro = () => {
    setRegistroOpen(!registroOpen);
  };

  return (
    <nav>
      <Link to="/" className="title">
        NearbyFriend
      </Link>
      <div className="menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu-items ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/about">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/services">Quienes Somos</NavLink>
        </li>
        <li>
          <NavLink to="/Perfil">Cuenta</NavLink>
        </li>
        <li className="registro-item">
          <span onClick={toggleRegistro}>Registro</span>
          {registroOpen && (
            <ul className="sub-menu">
              <li>
                <NavLink to="/RegistroCliente">Cliente</NavLink>
              </li>
              <li>
                <NavLink to="/RegistroAmigo">Amigo</NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
