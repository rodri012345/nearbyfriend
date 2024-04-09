import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Col, Row} from 'antd';
 // Asegúrate de importar tu configuración de Firebase

function PerfilAmigo() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const datosRef = collection(db, "amigos");
                const snapshot = await getDocs(datosRef);
                const datosAmigos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setDatos(datosAmigos);
            } catch (error) {
                console.error("Error al obtener los datos de los amigos:", error);
            }
        };

        obtenerDatos();
    }, []);

    return (
        <div>
            <h2>Perfiles de Amigos</h2>
            {datos.map(amigo => (
                <div key={amigo.id}>
                    <h3>{amigo.formData.nombre} {amigo.formData.apellido}</h3>
                    <p>Ciudad: {amigo.formData.ciudad}</p>
                    <p>Correo: {amigo.formData.correo}</p>
                    <p>Teléfono: {amigo.formData.telefono}</p>
                    {/* Aquí puedes mostrar más detalles según tus necesidades */}
                </div>
            ))}
        </div>
    );
}

export default PerfilAmigo;



