import React from 'react'
import './Fondo.css'
import flecha from '../img/dark-arrow.png'
import { Link, NavLink } from "react-router-dom";
const Fondo = ({titulo, subtitulo, user }) => {
  return (
    <div className='fondo'>
        <div className="texto-fondo">
            <h1>{titulo}</h1>
            <p>{subtitulo} 
            </p>
            <button className='btn'>
            <NavLink to={user ? '/ConoceMas' : '/RegistroCliente'}>Comienza Ahora</NavLink><img src={flecha} alt="" /></button>
        </div>
    </div>
  )
}

export default Fondo