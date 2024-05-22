import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../img/logo.png";
import Modal from "react-modal";
import Login from "./Login";
import "./Navbar.css";


export const Navbar = () => {
    const location = useLocation();

    const [fijar, setFijar] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [registroOpen, setRegistroOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const toggleRegistro = () => {
        setRegistroOpen(!registroOpen);
    };

    useEffect(() => {
        const isHome = location.pathname === "/";

        if (!isHome) {
            setFijar(true);
        }

        if (isHome) {
            const handleScroll = () => {
                window.scrollY > 50 ? setFijar(true) : setFijar(false);
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [location.pathname]);

    return (
        <nav className={`bar ${fijar ? "dark-bar" : ""}`}>
            <Link to="/" className="title">
                <img src={logo} alt="" className="logo" />
            </Link>
            <ul>
                <li>
                    <NavLink to="/">Inicio</NavLink> 
                </li>
                <li>
                    <NavLink to="/services">Solicitud</NavLink>
                </li>
                <li>
                    <NavLink to="/EditarPerfil/55q7TpIt8vhTt2AMTJ7w">
                        Editar Perfil
                    </NavLink>
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
                    <button className="btn" onClick={openModal}>
                        Inicia Sesion
                    </button>
                </li>
            </ul>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                className="modal"
                overlayClassName="overlay"
            >
                <Login onClose={closeModal} />
            </Modal>
        </nav>
    );
};

export default Navbar;
