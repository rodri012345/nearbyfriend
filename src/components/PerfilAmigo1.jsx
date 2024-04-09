import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase-conf';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
// Asegúrate de importar tu configuración de Firebase

function PerfilAmigo1({ amigoId }) {
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
        <div>
            <h2>Perfil del Amigo </h2>
            {amigo && (
                <div>
                    <h2>holamundo</h2>
                    <h3>{amigo.nombre} {amigo.apellido}</h3>
                    <p>Ciudad: {amigo.ciudad}</p>
                    <p>Correo: {amigo.correo}</p>
                    <p>Teléfono: {amigo.telefono}</p>
                    {/* Aquí puedes mostrar más detalles según tus necesidades */}
                </div>
            )}
        </div>
    );
}

export default PerfilAmigo1;
