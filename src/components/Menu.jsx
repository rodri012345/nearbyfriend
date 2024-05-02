import React from 'react';
import './Menu.css';
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="perfil-menu">
      <ul>
        <li><NavLink to="/Inicio">Inicio</NavLink></li>
        <li><NavLink to="/Solicitudes">Solicitudes</NavLink></li>
        <li><NavLink to="/Modificar">Modificar Perfil</NavLink></li>
        <li><NavLink to="/Galeria">Galeria</NavLink></li>
        <li><NavLink to="/SeePerfil">Ver Perfil</NavLink></li>
        <li><NavLink to="/Ayuda">Ayuda</NavLink></li>
      </ul>
    </div>
  );
}

export default Menu;
