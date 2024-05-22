import React, { useState, useEffect } from "react";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";
import Slider from "react-slick";

import "./PerfilAmigoCliente.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, Switch, Flex, Rate, notification, Carousel } from "antd";
import Alquilar from "./Alquilar";

const PerfilAmigoCliente = ({ amigoId }) => {
    const [amigo, setAmigo] = useState(null);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const cambiarEstado = (checked) => {
        console.log(`switch to ${checked}`);
    };

    useEffect(() => {
        const obtenerAmigo = async () => {
            try {
                const amigoRef = doc(db, "amigos", amigoId);
                const docSnap = await getDoc(amigoRef);
                if (docSnap.exists()) {
                    setAmigo({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No se encontró el amigo.");
                }
            } catch (error) {
                console.error("Error al obtener el amigo:", error);
            }
            console.log(amigo);
        };

        obtenerAmigo();
    }, [amigoId]);

    return (
        <div className="perfil-container">
            {amigo && (
                <div className="perfil-content">
                    <div className="slider-container perfil-izq">
                        <Slider {...settings}>
                            <div>
                                <Image
                                    src={amigo.imageURL}
                                    alt="Foto del amigo"
                                    className="det-img"
                                    width={'80%'}
                                    height={450}
                                />
                            </div>
                            <div>
                                <Image
                                    src={amigo.imageURL1}
                                    alt="Foto del amigo"
                                    className="det-img"
                                    width={'80%'}
                                    height={450}
                                />
                            </div>
                            <div>
                                <Image
                                    src={amigo.imageURL2}
                                    alt="Foto del amigo"
                                    className="det-img"
                                    width={'80%'}
                                    height={450}
                                />
                            </div>
                            <div>
                                <Image
                                    src={amigo.imageURL3}
                                    alt="Foto del amigo"
                                    className="det-img"
                                    width={'80%'}
                                    height={450}
                                />
                            </div>
                        </Slider>
                    </div>

                    <div className="perfil-der">
                        <div className="sub-contenedor">
                            <h1>
                                {amigo.nombre} {amigo.apellido}
                            </h1>
                            <div className="switch-wrapper">
                                <h2 style={{ fontSize: "20px" }}>
                                    Precio: 50Bs/hr
                                </h2>

                                {/* <h2 className="h2-style">Estado: </h2>
                                <Switch
                                    defaultChecked
                                    onChange={cambiarEstado}
                                    className="style-switch switch-aling"
                                /> */}
                            </div>
                        </div>
                        <h3>{amigo.departamento}</h3>

                        <div className="usr-info">
                            <h4>Correo: {amigo.correo}</h4>
                            <h4>Teléfono: {amigo.telefono}</h4>
                            <h4>Genero: {amigo.genero}</h4>
                        </div>

                        <h2>Mis Hobies y gustos Son:</h2>
                        <div className="hobbies-perfil">
                            {amigo.hobbies &&
                                amigo.hobbies.map((hobby, index) => (
                                    <h4 key={index}>{hobby}</h4>
                                ))}
                        </div>
                        <h2>Cuéntanos más sobre ti:</h2>
                        <div className="usr-det">
                            <h4>{amigo.aboutText}</h4>
                        </div>
                    </div>
                </div>
            )}
            <Alquilar
                amigoId={"55q7TpIt8vhTt2AMTJ7w"}
                clienteId={"EUyZf9qFA3l072WHbBbN"}
            />
        </div>
    );
};
export default PerfilAmigoCliente;
