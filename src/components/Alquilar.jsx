import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf'; 
import './PerfilAmi.css'; 

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
    const today = new Date().toISOString().split('T')[0];
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
    const { name, value } = e.target;

    
    if (name === 'duracion' && !/^\d*$/.test(value)) {
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
        <div className="perfil-ami-container">
            {amigo && (
                <div className="perfil-ami-content">
                    <div className="foto-amigo">
                        <img src="src/img/450_1000.jpeg" alt="Foto del amigo" />
                        {}
                    </div>
                    
                    <div className="datos-hobbies">
                        <div className="datos-personales">
                            <h4>Datos Personales</h4>
                            <p>Nombre: {amigo.formData.nombre}</p>
                            <p>Apellido: {amigo.formData.apellido}</p>
                            <p>Ciudad: {amigo.formData.departamento}</p>
                            <p>Correo: {amigo.formData.correo}</p>
                            <p>Teléfono: {amigo.formData.telefono}</p>
                        </div>
                        <div className="hobbies">
                            <h4>Hobbies</h4>
                            <p>Pintar</p>
                            <p>Cine</p>
                            <p>Musica</p>
                            <p>Viajes</p>
                            <p>{amigo.formData.hobbies}</p>
                        </div>
                    </div>
                
                </div>
            )}
            <button className='mon-n' onClick={toggleModal} style={{ marginTop: '20px' }}>Solicitud de Alquiler</button>
            {modalAbierto &&
           <div className="modal">
           <div className="modal-content">
               <span className="close" onClick={toggleModal}>&times;</span>
               <form onSubmit={handleSubmit}>
                   <div>
                       <label htmlFor="fecha">Fecha:</label>
                       <input type="date" name="fecha" value={evento.fecha} min={today} onChange={handleChange} />
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
                   <button type="submit">Aquilar</button>
               </form>
           </div>
       </div>
            }
            <div className="descripcion">
                <h4>Descripción</h4>
                <p>Ir de paseo en bicicleta, la aventura, los videojuegos</p>
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


