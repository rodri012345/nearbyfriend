import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../img/logo.png'
import user_1 from '../img/user-1.png'
import "./NavbarRegistro.css";

export const NavbarRegistro = () => {

    const [fijar, setFijar] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setFijar(true) : setFijar(false);
        })
    }, [])

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const clickOutsideRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`bar ${fijar ? 'dark-bar' : ''}`}>
            <Link to="/" className="title">
                <img src={logo} alt="" className="logo" />
            </Link>
            <ul>
                <li><NavLink to='/'>Inicio</NavLink></li>
                <li><NavLink to='/ConoceMas'>Conoce Mas</NavLink></li>
                <li><NavLink to='/SeAmigo'>Se un Amigo</NavLink></li>
                <li>
                    <div className="user-menu" ref={menuRef}>
                        <div className="user-avatar" onClick={toggleMenu}>
                            <img src={user_1} alt="Usuario" />
                        </div>
                        {menuOpen && (
                            <div className="menu-options" ref={clickOutsideRef}>
                                <ul>
                                    <li>Ver perfil</li>
                                    <li>Configuraciones</li>
                                    <li>Cerrar sesión</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default NavbarRegistro;
