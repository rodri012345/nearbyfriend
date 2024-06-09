import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf';

import './PerfilUsuario.css';
import { Image, Flex, Rate, notification } from 'antd';

import imagen from '../img/image1.png'

const PerfilUsuario1 = ({clienteID}) => {

    const [cliente, setCliente] = useState(null);
    useEffect(() => {
        const obtenerCliente = async () => {
            try {
                const usuarioRef = doc(db, "clientes",clienteID);
                const docSnap = await getDoc(usuarioRef);
                if (docSnap.exists()) {
                    setCliente({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No se encontró el usuario.");
                }
            } catch (error) {
                console.error("Error al obtener el usuario:", error);
            }
            
        };

        obtenerCliente();
    }, [clienteID]);

    return (
        <div className="perfil-container">
            {cliente && (
                <div className="perfil-content">
                    <div className="perfil-izq">
                        <Image src={cliente.imageURL} alt="Foto del amigo" fallback={imagen} className='det-img' />
                    </div>
                    <div className="perfil-der">
                        <h1>{cliente.nombre} {cliente.apellido}</h1>
                        <h3>{cliente.departamento}</h3>
                        <div className="usr-info">
                            <h4>Correo: {cliente.correo}</h4>
                            <h4>Teléfono: {cliente.telefono}</h4>
                            <h4>Genero: {cliente.genero}</h4>
                        </div>
                        <h2>Mis Hobies Son:</h2>
                        <div className="hobbies-perfil">
                            {cliente.hobbies && cliente.hobbies.map((hobby, index) => (
                                <h4 key={index}>{hobby}</h4>
                            ))}
                        </div>
                        <h2>Mis Pasa Tiempos Son:</h2>
                        <div className="usr-det">
                            <h4>{cliente.aboutText}</h4>
                        </div>

                    </div>
                </div>

            )}
            
        </div>
    );

}
export default PerfilUsuario1;