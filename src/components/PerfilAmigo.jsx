import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";
import "./PerfilAmigo.css";
import { Image, Switch, Flex, Rate, notification, Carousel } from "antd";
import Titulo from "./Titulo";

const PerfilAmigo = ({ amigoId }) => {
    const [amigo, setAmigo] = useState(null);

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
        amigo && (
            <div className="perfil-container">
                <Titulo titulo={`${amigo.nombre} ${amigo.apellido}`} />
                <div className="perfil-content">
                    <div className=" perfil-izq">
                        <div>
                            <Image
                                src={amigo.imageURL}
                                alt="Foto del amigo"
                                className="det-img"
                                width={"75%"}
                                height={400}
                            />
                        </div>
                        <div className="sub-cont">
                            <Image
                                src={amigo.imageURL}
                                alt="Foto del amigo"
                                className="det-img"
                                width={"25%"}
                                height={150}
                            />
                            <Image
                                src={amigo.imageURL}
                                alt="Foto del amigo"
                                className="det-img"
                                width={"25%"}
                                height={150}
                            />
                            <Image
                                src={amigo.imageURL}
                                alt="Foto del amigo"
                                className="det-img"
                                width={"25%"}
                                height={150}
                            />
                        </div>
                    </div>
                    <div className="cont-der">
                        <div className="perfil-der">
                            <div className="sub-contenedor">
                                <h2>Datos personales:</h2>
                                <div className="switch-wrapper">
                                    <h2 className="h2-style">Estado: </h2>
                                    <Switch
                                        defaultChecked
                                        onChange={cambiarEstado}
                                        className="style-switch switch-aling"
                                    />
                                </div>
                            </div>

                            <div className="usr-info">
                                <h4>Departamento: {amigo.departamento}</h4>
                                <h4>Correo: {amigo.correo}</h4>
                                <h4>Teléfono: {amigo.telefono}</h4>
                                <h4>Genero: {amigo.genero}</h4>
                            </div>

                            <h2>Hobies y gustos:</h2>
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
                        <button
                            className="mon-n"
                            style={{
                                margin: "20px",
                                width: "200px",
                                display: "iline-block",
                            }}
                        >
                            Editar perfil
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};
export default PerfilAmigo;
