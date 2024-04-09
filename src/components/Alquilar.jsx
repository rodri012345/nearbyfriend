import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf'; 
import './PerfilAmi.css'; 
import { Button, Modal, Input, DatePicker, Typography, Rate } from 'antd'; 

const { Title, Text } = Typography;

const PerfilAmi = ({ amigoId }) => {
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
                    <div className="foto-amigo">
                        <img src="src/img/450_1000.jpeg" alt="Foto del amigo" />
                
                <Rate defaultValue={3} />
            
                    </div>
                    
                    <div className="datos-hobbies">
                        <div className="datos-personales">
                            <Title level={4}>Datos Personales</Title>
                            <Text>Nombre: {amigo.formData.nombre}</Text>
                            <Text>Apellido: {amigo.formData.apellido}</Text>
                            <Text>Ciudad: {amigo.formData.departamento}</Text>
                            <Text>Correo: {amigo.formData.correo}</Text>
                            <Text>Teléfono: {amigo.formData.telefono}</Text>
                        </div>
                        <div className="hobbies">
                            <Title level={4}>Hobbies</Title>
                            <Text>Pintar</Text>
                            <Text>Cine</Text>
                            <Text>Musica</Text>
                            <Text>Viajes</Text>
                            <Text>{amigo.formData.hobbies}</Text>
                        </div>
                    </div>
                
                </div>
            )}
            <Button className='mon-n' type="primary" onClick={toggleModal} style={{ marginTop: '20px' }}>Solicitud de alquiler</Button>
            <Modal
                title="Agregar Evento"
                visible={modalAbierto}
                onCancel={toggleModal}
                onOk={handleSubmit}
            >
                <div>
                    <label htmlFor="fecha">Fecha:</label>
                    <DatePicker value={evento.fecha} onChange={(date, dateString) => setEvento({ ...evento, fecha: dateString })} />
                </div>
                <div>
                    <label htmlFor="hora">Hora:</label>
                    <Input type="time" value={evento.hora} onChange={(e) => setEvento({ ...evento, hora: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="duracion">Duración (horas):</label>
                    <Input type="number" min="1" value={evento.duracion} onChange={(e) => setEvento({ ...evento, duracion: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="descripcion">Descripción:</label>
                    <Input.TextArea rows={4} value={evento.descripcion} onChange={(e) => setEvento({ ...evento, descripcion: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="lugar">Lugar de encuentro:</label>
                    <Input value={evento.lugar} onChange={(e) => setEvento({ ...evento, lugar: e.target.value })} />
                </div>
            </Modal>
            <div className="descripcion">
                        <Title level={4}>Descripción</Title>
                        <Text>Ir de paseo en bicicleta, la aventura, los videojuegos</Text>
                    </div>
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

