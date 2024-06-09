import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";
import "./PerfilCliente.css";
import { Image, Flex } from "antd";

const PerfilCliente = ({ clienteId }) => {
    const [cliente, setCliente] = useState(null);
    useEffect(() => {
        const obtenerCliente = async () => {
            try {
                const clienteRef = doc(db, "clientes", clienteId);
                const docSnap = await getDoc(clienteRef);
                console.log(cliente);
                if (docSnap.exists()) {
                    setCliente({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No se encontró el cliente.");
                }
            } catch (error) {
                console.error("Error al obtener ecliente:", error);
            }
        };

        obtenerCliente();
    }, []);

    return (
        <div className="perfil-ami-container">
            {cliente && (
                <div className="perfil-ami-content">
                    <div className="foto-amigo">
                        <Image
                            className="ImagenSolo"
                            width={300}
                            height={200}
                            src={cliente.imageURL}
                            alt="Foto del amigo"
                        />

                        <Flex gap="middle" vertical>
                            {/*<Rate allowHalf
                                 style={{color: "",     Esto todavia no :randal :b
                              fontSize: 40,}} />*/}
                        </Flex>
                    </div>
                    <div className="datos-hobbies-descripcion">
                        <div className="Fila">
                            <div className="datos-personales">
                                <h4>Datos Personales</h4>
                                <p>Nombre: {cliente.nombre}</p>
                                <p>Apellido: {cliente.apellido}</p>
                                <p>Ciudad: {cliente.departamento}</p>
                                <p>Correo: {cliente.correo}</p>
                                <p>Teléfono: {cliente.telefono}</p>
                                <p>Genero: {cliente.genero}</p>
                            </div>
                            <div className="hobbies">
                                <h4>Hobbies</h4>
                                <p>{cliente.hobbies[0]}</p>
                                <p>{cliente.hobbies[1]}</p>
                                <p>{cliente.hobbies[2]}</p>
                                <p>{cliente.hobbies[3]}</p>
                            </div>
                        </div>

                        <div className="Fila">
                            <div className="descripcion">
                                <h3 className="DesckTitulo">Descripción</h3>
                                <p>{cliente.aboutText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PerfilCliente;
