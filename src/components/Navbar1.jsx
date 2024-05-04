import React, { useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../img/logo.png'
import "./Navbar1.css";

export const Navbar = () => {
    return (
      <div className="barra bar">
      <Link to="/" className="title">
        <img src= {logo} alt="" className="logo"/>
      </Link>
      <ul>
        <li><NavLink to = '/RegistroCliente'>Inicio</NavLink></li>
        <li>Conoce Mas</li>
        <li>Se un Amigo</li>
        <li><button className="btn">Inicia Sesion</button></li>
      </ul>
      </div>
  );
};

export default Navbar;
