import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf'; // Asegúrate de importar tu configuración de Firebase
import './PerfilAmi.css';

const PerfilAmi= ({ amigoId }) => {
    const [amigo, setAmigo] = useState(null);
    const [modalAbierto, setModalAbierto] = useState(false);
    const [evento, setEvento] = useState({
        fecha: '',
        hora: '',
        duracion: '',
        descripcion: '',
        lugar: ''
    });

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

    const toggleModal = () => {
        setModalAbierto(!modalAbierto);
    };

    const handleChange = (e) => {
        setEvento({ ...evento, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const eventosRef = collection(db, "eventos");
            await addDoc(eventosRef, evento);
            console.log("Evento agregado correctamente a Firebase.");
            setModalAbierto(false);
        } catch (error) {
            console.error("Error al agregar el evento:", error);
        }
    };

    return (
        <div className="perfil-ami-container">
            {amigo && (
                <div className="perfil-ami-content">
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
                    <button onClick={toggleModal} style={{ marginTop: '20px' }}>Agregar Evento</button>
                    {modalAbierto && (
                        <div className="modal">
                            <h2>Agregar Evento</h2>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="fecha">Fecha:</label>
                                <input type="date" id="fecha" name="fecha" value={evento.fecha} onChange={handleChange} required />

                                <label htmlFor="hora">Hora:</label>
                                <input type="time" id="hora" name="hora" value={evento.hora} onChange={handleChange} required />

                                <label htmlFor="duracion">Duración (horas):</label>
                                <input type="number" id="duracion" name="duracion" min="1" value={evento.duracion} onChange={handleChange} required />

                                <label htmlFor="descripcion">Descripción:</label>
                                <textarea id="descripcion" name="descripcion" rows="4" value={evento.descripcion} onChange={handleChange} required></textarea>

                                <label htmlFor="lugar">Lugar de encuentro:</label>
                                <input type="text" id="lugar" name="lugar" value={evento.lugar} onChange={handleChange} required />

                                <button type="submit">Guardar</button>
                                <button type="button" onClick={toggleModal}>Cancelar</button>
                            </form>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
const App2 = () => {
    return (
        <div>
            <PerfilAmi amigoId="wLuH5ZXjLh4kWltUMTUo" />
        </div>
    );
};

export default App2;
