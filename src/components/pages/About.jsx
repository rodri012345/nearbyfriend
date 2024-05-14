import React from "react";
import Footer from "../Fotter";
import Carrusel from "../Carrusel";

import BarraBusqueda from "../BarraBusqueda";
import { Layout } from "antd";

import Enlaces from "../Enlaces";
import Fondo from "../Fondo";
import Titulo from "../Titulo";
import { useParams } from "react-router-dom";

const { Content } = Layout;

export const About = () => {
    const {clienteId} = useParams();
    console.log(clienteId);
    return (
        <>
            <Content>
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
                    titulo="Amigos para toda ocacion"
                />
                <div className="bar">
                    <BarraBusqueda />
                </div>
                <div>
                    <Enlaces />
                </div>
                <Titulo
                    subTitulo="Amigos con tus mismos gustos"
                    titulo="Ellos estan listos para ayudarte"
                />
                <Carrusel idCliente={clienteId} />
            </Content>
            <Footer />
        </>
    );
};
