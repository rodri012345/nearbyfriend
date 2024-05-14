import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf'; 
import './GestionDeSolicitudes.css';
import SolicitudReciente from './SolicitudesRecientes';
import SolicitudEnCurso from './SolicitudesEnCurso';
import SolicitudConcluida from './SolicitudesConclusas';

const GestionDeSolicitudes = () => {

    return (
        <div className='NotificaionesContainer'>
                <div className='Fila'>
                    <h2 className='Titulo'>Gestion de Solicitudes</h2>
                </div>
                <div className="Fila">
                    
                    <div className="Columna">
                    <h3 className='Solicitud'>Solicitudes </h3>
                        <div className="SolicitudNueva">
                        
            
                            <SolicitudReciente />
            
                        </div>
                    </div>
                    <div className="Columna">
                    <h3 className='Solicitud'>Solicitudes en Curso </h3>
                        <div className="SolicitudesAceptadas">
                        
                           <SolicitudEnCurso/>

                        </div>
                    </div>
                    <div className="Columna">
                    <h3 className='Solicitud'>Solicitudes Conclusas</h3>
                        <div className="SolicitudesConcluidas ">
                        
                        <SolicitudConcluida/>
            
                        </div>
                    </div>
                </div>
        </div>
    
        );
};



export default GestionDeSolicitudes;