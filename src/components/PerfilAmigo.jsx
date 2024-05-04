import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf'; 

import './PerfilAmigo.css';
import { Image, Flex, Rate, notification } from 'antd';
import Alquilar from './Alquilar';
import imagen from '../img/image1.png'

const PerfilAmigo = ({amigoId}) => {
    
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
    <div className="perfil-ami-container">
        {amigo && (
            <div className="perfil-ami-content">
                <div className="foto-amigo">
                    <Image
                         width={300}
                         height={350}
                        src={amigo.imageURL}
                        alt="Foto del amigo"
                        fallback={imagen}
                    
                    />
                   <div>
                    <Image className='ImagenSolo'
                    width={100}
                    height={100}
                    src={amigo.imageURL1}
                    fallback={imagen}
                    />
                    <Image className='ImagenSolo'
                    width={100}
                    height={100}
                    src={amigo.imageURL2}
                    fallback= {imagen}
                    />
                    <Image className='ImagenSolo'
                    width={100}
                    height={100}
                    src={amigo.imageURL3}
                    fallback={imagen}
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
                                <p>{amigo.hobbies[0]}</p>
                                <p>{amigo.hobbies[1]}</p>
                                <p>{amigo.hobbies[2]}</p>
                                <p>{amigo.hobbies[3]}</p>
                                </div>

                                </div>

                        <div className='Fila'>
                         <div className="descripcion">
                        <h3 className='DesckTitulo'>Descripción</h3>
                        <p>{amigo.aboutText}
                        </p>
                     </div>
                    </div>
                    </div>
                   </div>
                
        )}
            <Alquilar amigoId={"BM52V0YevPDCB68c6yz4"} clienteId={"CWSstJixWZwlHQ0581h1"} />
    <div className='contenedor-reseña'>
        <div className="reseña">
            <h4>Reseña</h4>
            <p>Ir de paseo en bicicleta, la aventura, los videojuegos</p>
        </div>
        <div className="reseña">
            <h4>Reseña</h4>
            <p>Ir de paseo en bicicleta, la aventura, los videojuegos</p>
        </div>
        <div className="reseña">
            <h4>Reseña</h4>
            <p>Ir de paseo en bicicleta, la aventura, los videojuegos</p>
        </div>

        </div>
    </div>
);

}
export default PerfilAmigo;