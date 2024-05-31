import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf'; 
import './GestionDeSolicitudes.css';
import SolicitudesRecientes from './SolicitudesRecientes';
import SolicitudesEnCurso from './SolicitudesEnCurso';
import SolicitudesConclusas from './SolicitudesConclusas';
const GestionDeSolicitudes = ({amigoId}) => {

    return (
        <div className='NotificaionesContainer' style={{marginTop:'20px'}}>
                <div className='Fila'>
                    <h2 className='Titulo'>Gestion de Solicitudes</h2>
                </div>
                <div className="Fila">
                    
                    <div className="Columna">
                    <h3 className='Solicitud'>Solicitudes </h3>
                        <div className="SolicitudNueva">
                        
            
                            <SolicitudesRecientes amigoId={amigoId}/>
            
                        </div>
                    </div>
                    <div className="Columna">
                    <h3 className='Solicitud'>Solicitudes en Curso </h3>
                        <div className="SolicitudesAceptadas">
                        
                           <SolicitudesEnCurso amigoId={amigoId}/> 
                        </div>
                    </div>
                    <div className="Columna">
                    <h3 className='Solicitud'>Solicitudes Conclusas</h3>
                        <div className="SolicitudesConcluidas ">
                        
                        <SolicitudesConclusas amigoId={amigoId}/>
            
                        </div>
                    </div>
                </div>
        </div>
    
        );
};



export default GestionDeSolicitudes;