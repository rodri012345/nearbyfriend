import React from 'react'
import './InfoTrabajo.css'
import ingresos from '../img/ingresos.png'
import flecha from '../img/light-arrow.png'
import { Link, NavLink } from "react-router-dom";

const InfoTrabajo = () => {
  return (
    <div className='info bar'>
        <div className='info_izq'>
            <img src={ingresos} alt="" className='detalle-img'/>
        </div>
        <div className="info_der">
            <h3>Se un Amigo y Genera Ingresos</h3>
            <h2>Obtendras Estos Beneficios</h2>
            <ul className='lista'>
                <li>Horarios de a cuerdo a tu disponibilidad</li>
                <li>Genera Buenos Ingresos</li>
                <li>Utiliza tus habilidades y Talentos</li>
                <li>Recibe Capacitaciones</li>
                <li>Seguridad en Todo Momento</li>
                <li>Nuevas Experiencias</li>
            </ul>
        </div>
    </div>
  )
}

export default InfoTrabajo