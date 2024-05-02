import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf'; 
import './Alquilar.css';
import { Image, Flex, Rate, notification } from 'antd'

const Alquilar = ({ clienteId, amigoId }) => { 

    const [modalAbierto, setModalAbierto] = useState(false);
    const [evento, setEvento] = useState({
        fecha: '',
        hora: '',
        duracion: '',
        descripcion: '',
        lugar: '',
        clienteId: '',
        amigoId: '', 
        estado: ''
    });
   
    const [value, setValue] = useState(3);
        
    const today = new Date().toISOString().split('T')[0];
    const maxDate = new Date(today);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    const toggleModal = () => {
        setModalAbierto(!modalAbierto);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === 'duracion' && !/^\d*$/.test(value) ) {
            return;
        }
    
        setEvento({ ...evento, [name]: value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (
                evento.fecha.trim() === '' ||
                evento.hora.trim() === '' ||
                evento.duracion.trim() === '' ||
                evento.descripcion.trim() === '' ||
                evento.lugar.trim() === '' 
            ) {
                alert('Todos los campos son obligatorios');
                return;
            }
            
            // Agregar los IDs de cliente y amigo al objeto evento
            evento.clienteId = {clienteId}
            evento.amigoId = {amigoId}
            evento.estado = 'inactivo';
            
            const eventosRef = collection(db, "eventos");
            await addDoc(eventosRef, evento);
            console.log("Evento agregado correctamente a Firebase.");
            setModalAbierto(false);
            
            setEvento({
                fecha: '',
                hora: '',
                duracion: '',
                descripcion: '',
                lugar: ''
            });
            notification.success({
                message: 'Solicitud enviada',
            });
        } catch (error) {
            console.error("Error al agregar el evento:", error);
        }
    };
    
    const handleCancel = () => {
        setModalAbierto(false);
        
        setEvento({
            fecha: '',
            hora: '',
            duracion: '',
            descripcion: '',
            lugar: ''
        });
    };

    return (
        <div>
            <button className='mon-n' onClick={toggleModal} style={{ marginTop: '20px' }}>Solicitud de Alquiler</button>
            {modalAbierto &&
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="fecha">Fecha:</label>
                                <input type="date" name="fecha" value={evento.fecha} min={today} onChange={handleChange} max={maxDate.toISOString().split('T')[0]}/>
                            </div>
                            <div>
                                <label htmlFor="hora">Hora:</label>
                                <input type="time" name="hora" value={evento.hora} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="duracion">Duración (horas):</label>
                                <input type="number" min="1" max="5" name="duracion" value={evento.duracion} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="descripcion">Descripción:</label>
                                <textarea rows={4}  maxLength={80} name="descripcion" value={evento.descripcion} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="lugar">Lugar de encuentro:</label>
                                <input  maxLength={40} name="lugar" value={evento.lugar} onChange={handleChange} />
                            </div>
                            <button type="button" onClick={handleCancel}>Cancelar</button>
                            <button type="submit" onclick="return confirm('¿Estás seguro de que deseas alquilar a este amigo?')">Alquilar</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};

export default Alquilar;




