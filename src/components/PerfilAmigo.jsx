import React, { useState, useEffect } from "react";
import { doc, getDoc,updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";
import { Link } from 'react-router-dom';
import "./PerfilAmigo.css";
import { Image, Switch, Flex, Rate, notification} from "antd";
import Titulo from "./Titulo";

const PerfilAmigo = ({ amigoId }) => {
    const [amigo, setAmigo] = useState(null);
    const [estado,setEstado] = useState(false);

    const cambiarEstado = async (checked) => {
        try {
            const amigoRef = doc(db, "amigos", amigoId);
            await updateDoc(amigoRef, {
                activo: checked
            });
            setEstado(checked);
            
        } catch (e) {
            console.error("Error al actualizar el documento: ", e);
        }
    };

    useEffect(() => {
        const obtenerAmigo = async () => {
            try {
                const amigoRef = doc(db, "amigos", amigoId);
                const docSnap = await getDoc(amigoRef);
                if (docSnap.exists()) {
                    const amigoData = { id: docSnap.id, ...docSnap.data() };
                    setAmigo(amigoData);
                    setEstado(amigoData.activo ?? false); 
                } else {
                    console.log("No se encontró el amigo.");
                }
            } catch (error) {
                console.error("Error al obtener el amigo:", error);
            }
            
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
                                width={"70%"}
                                height={350}
                            />
                        </div>
                        <div className="sub-cont">
                            <Image
                                src={amigo.imageURL}
                                alt="Foto del amigo"
                                className="det-img"
                                width={"23%"}
                                height={110}
                            />
                            <Image
                                src={amigo.imageURL}
                                alt="Foto del amigo"
                                className="det-img"
                                width={"23%"}
                                height={110}
                            />
                            <Image
                                src={amigo.imageURL}
                                alt="Foto del amigo"
                                className="det-img"
                                width={"23%"}
                                height={110}
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
                                        checked = {estado}
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
                            <div className="hobbies-perfil" >
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
                        <Link to={`/EditarPerfil/${amigoId}`}>
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
                        </Link>
                    </div>
                </div>
            </div>
        )
    );
};
export default PerfilAmigo;
