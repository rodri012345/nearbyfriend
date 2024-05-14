import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import "./Navbar1.css";

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [registroOpen, setRegistroOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setRegistroOpen(false); // Siempre que se abra/cierre el menú principal, cerrar el submenú de registro
    };

    const toggleRegistro = () => {
        setRegistroOpen(!registroOpen);
    };
    return (
        <div className="barra bar">
            <Link to="/" className="title">
                <img src={logo} alt="" className="logo" />
            </Link>
            <ul>
                <li>
                    <NavLink to="/about/EUyZf9qFA3l072WHbBbN">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Solicitud</NavLink>
                </li>
                <li>
                    <NavLink to="/EditarPerfil/978cbAJbe46Gqm1p6ejN">Editar Perfil</NavLink>
                </li>
                <li>
                    <NavLink to="/Perfil/55q7TpIt8vhTt2AMTJ7w">Cuenta</NavLink>
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

                <li>
                <button className="btn">Inicia Sesion</button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
