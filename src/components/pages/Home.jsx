import React from "react";
import Fondo from "../Fondo";
import { Layout } from "antd";
import Informacion from "../Informacion";
import Titulo from "../Titulo";
import Detalles from "../Detalles";
import Trabajo from "../Trabajo";
import Testimonios from "../Testimonios";
import Carrusel from "../Carrusel";

import BarraBusqueda from "../BarraBusqueda";
import Enlaces from "../Enlaces";
import Footer from "../Fotter";

const { Content } = Layout;
export const Home = ({ user, userID }) => {
    console.log("este es el uID", userID);
    return (
        <>
            <Content>
                {user && (
                    <>
                        <div
                            style={{
                                backgroundImage: `url("https://www.elplural.com/uploads/s1/11/08/54/6/simon-maage-tximrx3gc-g-unsplash.jpeg")` /* 'https://www.elplural.com/uploads/s1/11/08/54/6/simon-maage-tximrx3gc-g-unsplash.jpeg' */,
                                backgroundSize: "100% 100%",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                width: "100%",
                                height: "700px",
                            }}
                        >
                            <Fondo />
                        </div>
                        <Titulo
                            subTitulo="Aqui encontraras"
                            titulo="Amigos para toda ocacion"
                        />
                        <Enlaces />
                        <Titulo titulo="Amigos para toda ocacion" />
                        <div className="bar">
                            <BarraBusqueda />
                        </div>
                        <Titulo
                            subTitulo="Amigos con tus mismos gustos"
                            titulo="Ellos estan listos para ayudarte"
                        />
                        <Carrusel idCliente="EUyZf9qFA3l072WHbBbN" />
                    </>
                )}
                {!user && (
                    <>
                        <Fondo
                            titulo="El Amigo que necesitas para el momento que necesites"
                            subtitulo="Contamos con una amplia cantidad de amigos que comparten tus
                                        mismas aficiones y estan dispuestos a compañarte en
                                        cualquier momento para lo que necesites."
                            user={user}
                        />
                        <Titulo
                            subTitulo="Aqui encontraras"
                            titulo="Amigos para toda ocacion"
                        />
                        <Informacion />
                        <Detalles />
                        <Titulo
                            subTitulo="Trabaja con nosotros"
                            titulo="Tu tambien puedes ser un amigo"
                        />
                        <Trabajo />
                    </>
                )}
                <div className="bar">
                    <Titulo
                        subTitulo="Las experiencias hablan por si mismas"
                        titulo="Personas que comparten sus experiencias"
                    />
                    <Testimonios />
                </div>
            </Content>
            
        </>
    );
};
