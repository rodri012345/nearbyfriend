import React, { useState } from 'react';
import './Login.css';
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { MdAlternateEmail } from "react-icons/md";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';


import { auth } from '../firebase/firebase-conf';
import { FaTimes } from 'react-icons/fa';
import { Input } from 'antd';


const Login = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const handleVisible = ()=>{
        setVisible(!visible);
    }
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Inicio de Sesion Correcto");
            window.location.href = "/";
            toast.success("Inicio de Sesion Exitoso!", {
                position: "top-center"
            });
        } catch (error) {
            console.log(error.message);
            let errorMessage = "Datos no correctos. Por favor, Revice e inténtelo de nuevo.";
            if (error.code === 'auth/wrong-password') {
                errorMessage = "La contraseña es incorrecta. Por favor, inténtelo de nuevo.";
            } else if (error.code === 'auth/user-not-found') {
                errorMessage = "El correo no está registrado. Por favor, regístrese.";
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = "El correo electrónico no es válido. Por favor, inténtelo de nuevo.";
            } else if (error.code === 'auth/invalid-credential') {
                errorMessage = "Credenciales inválidas. Por favor, inténtelo de nuevo.";
            } else if (error.code === 'auth/user-disabled') {
                errorMessage = "La cuenta ha sido deshabilitada. Por favor, contacte con soporte.";
            }
            toast.error(errorMessage, {
                position: "bottom-center"
            });
        }
    };

    return (
        <div className="wrapper">
            <button className="close-button" onClick={onClose}>
                <FaTimes />
            </button>
            <div className="form-box login">
                <form action="" onSubmit={handleRegister}>
                    <h1>Inicio Sesion</h1>
                    <div className="input-box">
                        <Input type="text"
                            placeholder='Correo'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <MdAlternateEmail className='icon' />
                    </div>
                    <div className="input-box">
                        <Input type = {visible ? "text" : "password"}
                            placeholder='Contraseña'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                        <span className='icon' onClick={handleVisible}>
                                {visible ? (
                                    <FaEye />
                                ) : (
                                    <FaEyeSlash />
                                )}
                            </span>
                    </div>
                    {/* <div className="remember-forgot">
                        <label><input type="checkbox" />Recuerdame</label>
                        <a href="#">Olvidaste tu Contraseña?</a>
                    </div> */}

                    <button className='btn-log' type='submit'>Iniciar Sesión</button>
                    <div className="register-link">
                        <p>¿No tienes una cuenta? <a href="/RegistroCliente">Registrarse como Cliente</a></p>
                        <p><a href="/RegistroAmigo">Registrarse como Amigo</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
