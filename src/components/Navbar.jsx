import React, { useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../img/logo.png'
import "./Navbar.css";

export const Navbar = () => {
  
  const [fijar, setFijar] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setFijar(true) : setFijar(false);
    })
  },[])
  
    return (
      <nav className={`bar ${fijar? 'dark-bar' : ''}`}>
      <Link to="/" className="title">
        <img src= {logo} alt="" className="logo"/>
      </Link>
      <ul>
        <li>Inicio</li>
        <li>Conoce Mas</li>
        <li>Se un Amigo</li>
        <li><button className="btn">Inicia Sesion</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
