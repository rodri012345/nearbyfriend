import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import "./Navbar.css";

export const Navbar = () => {
    const [fijar, setFijar] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setFijar(true) : setFijar(false);
        });
    }, []);

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
        <nav className={`bar ${fijar ? "dark-bar" : ""}`}>
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
                    <NavLink to="/EditarPerfil/55q7TpIt8vhTt2AMTJ7w">Editar Perfil</NavLink>
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
        </nav>
    );
};

export default Navbar;
