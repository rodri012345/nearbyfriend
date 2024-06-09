import React from 'react'
import './Enlaces.css'
import info1 from '../img/informacion1.png'
import info2 from '../img/informacion2.png'
import info3 from '../img/informacion3.png'
import info1_icono from '../img/info1-icono.png'
import info2_icono from '../img/info2-icono.png'
import info3_icono from '../img/info3-icono.png'

function Enlaces() {
  return (
    <div className='informaciones bar'>
        <div className="informacion">
            <img src={info1} alt="" />
            <div className="captura">
                <img src={info1_icono} alt="" />
                <p>Amigos Para Reuniones</p>
            </div>
        </div>
        <div className="informacion">
            <img src={info2} alt="" />
            <div className="captura">
                <img src={info2_icono} alt="" />
                <p>Amigos Para Estudiar y aprender</p>
            </div>
        </div>
        <div className="informacion">
            <img src={info3} alt="" />
            <div className="captura">
                <img src={info3_icono} alt="" />
                <p>Amigos Para Actividades</p>
            </div>
        </div>
    </div>
  )
}
export default Enlaces