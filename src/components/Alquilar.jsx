import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf'; 
import './Alquilar.css';
import { Image, Flex, Rate, notification } from 'antd'
import imagen1 from '../img/image1.png'

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
    //const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [value, setValue] = useState(3);
        
    const today = new Date().toISOString().split('T')[0];
    const maxDate = new Date(today);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    useEffect(() => {
        const obtenerAmigo = async () => {
            try {
                const amigoRef = doc(db, "amigos", amigoId);
                console.log(amigoId)
                const docSnap = await getDoc(amigoRef);
                if (docSnap.exists()) {
                    // console.log("datos: ",{ ...docSnap.data(), id: docSnap.id  })
                    setAmigo({ ...docSnap.data(), id: docSnap.id  });
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
               // description: 'El evento ha sido agregado correctamente.'
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
                        <Image 
                             width={300}
                             height={200}
                            src={amigo.imageURL}
                            alt="Foto del amigo"
                            fallback=""
                        
                        />
                       <div>
                        <Image
                        width={100}
                        height={100}
                        src={amigo.imageURL1}
                        fallback={imagen1}
                        />
                        <Image
                        width={100}
                        height={100}
                        src={amigo.imageURL2}
                        fallback= {imagen1}
                        />
                        <Image
                        width={100}
                        height={100}
                        src= {amigo.imageURL3}
                        fallback= {imagen1}
                        />
                        </div>
                            <Flex gap="middle" vertical>
                            <Rate allowHalf
                                 style={{color: "",
                                 fontSize: 40,}} />
                            
                            </Flex>
                    </div>
                    <div className="datos-hobbies-descripcion">
                    <div className="Fila">

                    <div className="datos-personales" >
                        <h4>Datos Personales</h4>
                            <p>Nombre: {amigo.nombre}</p>
                            <p>Apellido: {amigo.apellido}</p>
                            <p>Ciudad: {amigo.departamento}</p>
                            <p>Correo: {amigo.correo}</p>
                            <p>Teléfono: {amigo.telefono}</p>
                            <p>Genero: {amigo.genero}</p>
                            </div>
                                <div className="hobbies">
                                    <h4>Hobbies</h4>
                                    <p>Pintar</p>
                                     <p>Cine</p>
                                     <p>Musica</p>
                                    <p>Viajes</p>
                                    <p>{amigo.hobbies}</p>
                                    </div>

                                    </div>

                            <div className='Fila'>
                             <div className="descripcion">
                            <h3 className='DesckTitulo'>Descripción</h3>
                            <p>Ir de paseo en bicicleta, la aventura, los videojuegos
                            </p>
                         </div>
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
        <div className='contenedor-reseña'>
            <div className="reseña">
                <h4>Reseña</h4>
                <p>Ir de paseo en bicicleta, la aventura, los videojuegos</p>
            </div>
            <div className="reseña">
                <h4>Reseña</h4>
                <p>Ir al gimnacoion a hacer rutina</p>
            </div>
            <div className="reseña">
                <h4>Reseña</h4>
                <p>Ir al cine a ver la pelicula de extreno</p>
            </div>

            </div>
        </div>
    );
};



export default PerfilAmi;


