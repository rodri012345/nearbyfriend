import React from 'react'
import './Fondo.css'
import flecha from '../img/dark-arrow.png'
const Fondo = () => {
  return (
    <div className='fondo'>
        <div className="texto-fondo">
            <h1>El Amigo que necesitas para el momento que necesites</h1>
            <p>Contamos con una amplia cantidad de amigos que comparten tus mismas aficiones
                y estan dispuestos a compañarte en cualquier momento para lo que necesites. 
            </p>
            <button className='btn'>Comienza Ahora <img src={flecha} alt="" /></button>
        </div>
    </div>
  )
}

export default Fondo