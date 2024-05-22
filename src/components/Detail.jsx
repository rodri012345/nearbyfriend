import React from 'react'
import './Detail.css'
import img_detail from '../img/img-detail.png'
import flecha from '../img/light-arrow.png'
import { Link, NavLink } from "react-router-dom";

const Detalles = () => {
  return (
    <div className='detail bar'>
        <div className="detail_der">
            <h3>Atreve a Explorar</h3>
            <h2>Conoceras algo nuevo</h2>
            <p >En<strong >NearbyFriend </strong> encontraras a la persona ideal que estas buscando para la actividad que necesites, ya sea
            conocerla ciudad, una cena de trabajo, hacer deporte, ir al cine. Tambien puedes encontrar a la persona que quieras que te escuche
            que te comprenda.</p>
            <p>Tenemos mas de 100 amigos que estan listos para escucharte y compartir contigo esa aventura y experiencia que tanto quieres. Todos y
                cadauno de ellos capacitado de la mejor manera para que puedan dar el mejor servicio.
        </p>
        
        </div>
        <div className='detail_izq'>
            <img src={img_detail} alt="" className='detail-img'/>
        </div>
        
    </div>
  )
}

export default Detalles