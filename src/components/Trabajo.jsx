import React from 'react'
import './Trabajo.css'
import dinero from '../img/gana-dinero.png'
import horario from '../img/horarios.png'
import seguro from '../img/seguro.png'
import experiencia from '../img/experiencias.png'
import dinero_icono from '../img/dinero-icono.png'
import reloj from '../img/reloj-icono.png'
import seguro_icono from '../img/seguro-icono.png'
import sol_icono from '../img/sol-icono.png'
import flecha from '../img/light-arrow.png'

const Trabajo = () => {
    return (
        
        <div className='btn-tra bar'>
            <div className='trabajo-info'>
                <div className="info">
                    <img src={dinero} alt="" />
                    <div className="captura">
                        <img src={dinero_icono} alt="" />
                        <p>Genera Buenos Ingresos</p>
                    </div>
                </div>
                <div className="info">
                    <img src={horario} alt="" />
                    <div className="captura">
                        <img src={reloj} alt="" />
                        <p>Trabaja en tu Tiempo Libre</p>
                    </div>
                </div>
                <div className="info">
                    <img src={seguro} alt="" />
                    <div className="captura">
                        <img src={seguro_icono} alt="" />
                        <p>Seguridad en Todo Momento</p>
                    </div>

                </div>
            </div>
            <button className='btn-down'>Comienza Ahora <img src={flecha} alt="" /></button>
        </div>

    )
}

export default Trabajo