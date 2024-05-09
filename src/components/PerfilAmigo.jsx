import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf';

import './PerfilAmigo.css';
import { Image, Flex, Rate, notification } from 'antd';
import Alquilar from './Alquilar';
import imagen from '../img/image1.png'

const PerfilAmigo = ({ amigoId }) => {

    const [amigo, setAmigo] = useState(null);
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
                    <div className="perfil-izq">
                        <Image src={amigo.imageURL} alt="Foto del amigo" fallback={imagen} className='det-img' />
                    </div>
                    <div className="perfil-der">
                        <h1>{amigo.nombre} {amigo.apellido}</h1>
                        <h3>{amigo.departamento}</h3>
                        <div className="usr-info">
                            <h4>Correo: {amigo.correo}</h4>
                            <h4>Teléfono: {amigo.telefono}</h4>
                            <h4>Genero: {amigo.genero}</h4>
                        </div>
                        <h2>Mis Hobies Son:</h2>
                        <div className="hobbies-perfil">
                            {amigo.hobbies && amigo.hobbies.map((hobby, index) => (
                                <h4 key={index}>{hobby}</h4>
                            ))}
                        </div>
                        <h2>Mis Pasa Tiempos Son:</h2>
                        <div className="usr-det">
                            <h4>{amigo.aboutText}</h4>
                        </div>

                    </div>
                </div>

            )}
            
        </div>
    );

}
export default PerfilAmigo;