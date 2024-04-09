import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf'; // Asegúrate de importar tu configuración de Firebase
import './PerfilAmi.css';

const PerfilAmi = ({ amigoId }) => {
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
        };

        obtenerAmigo();
    }, [amigoId]);

    return (
        <div className="perfil-ami-container">
            {amigo && (
                <div className="perfil-ami-content">
                    <div className="foto-amigo">
                        <img src="src/img/450_1000.jpeg" alt="Foto del amigo" />
                    </div>
                    <div className="datos-hobbies">
                        <div className="datos-personales">
                            <h3>Datos Personales</h3>
                            <p>Nombre: {amigo.formData.nombre}</p>
                            <p>Apellido: {amigo.formData.apellido}</p>
                            <p>Ciudad: {amigo.formData.departamento}</p>
                            <p>Correo: {amigo.formData.correo}</p>
                            <p>Teléfono: {amigo.formData.telefono}</p>
                        </div>
                        <div className="hobbies">
                            <h3>Hobbies</h3>
                            <p>Pintar</p>
                            <p> Cine </p>
                            <p>Musica</p>
                            <p>Viajes</p>
                            <p>{amigo.formData.hobbies}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const App1 = () => {
    return (
        <div>
            <PerfilAmi amigoId="wLuH5ZXjLh4kWltUMTUo" />
        </div>
    );
};

export default App1;




