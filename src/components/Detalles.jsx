import React from 'react'
import './Detalles.css'
import detalle_img from '../img/detalle-icono.png'
import flecha from '../img/light-arrow.png'

const Detalles = () => {
  return (
    <div className='detalle bar'>
        <div className='detalle_izq'>
            <img src={detalle_img} alt="" className='detalle-img'/>
        </div>
        <div className="detalle_der">
            <h3>Conoce Mas</h3>
            <h2>Que es NearbyFriend?</h2>
            <p ><strong >NearbyFriend </strong> permite a los usuarios pagar para que alguien te 
            acompañe al cine, o que haga de guía local cuando estas de viaje en una ciudad o incluso para que vaya 
            contigo a realizar la compra y así te ayude. Según el amigo que se esté buscando, puedes elegir a una persona o a otra. 
            Todo se basa en que los clientes "paguen" por hacer nuevos amigos. Si eres nuevo en la ciudad o incluso es de esos días que 
            te sientes un poco solo, puedes entrar en la web, buscar y "pagar", según lo que pactes, y alquilar un amigo 
            en <strong >NearbyFriend </strong>. Lo ideal es que conoscas nueva gente y hagas amigos . Es fácil, ¿te atreves a probarlo?
        </p>
        <button className='btn-blue'>Comienza Ahora <img src={flecha} alt="" /></button>
        </div>
    </div>
  )
}

export default Detalles