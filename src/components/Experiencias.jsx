import React, { useRef } from 'react'
import { Link, NavLink } from "react-router-dom";
import './Experiencias.css'
import next_icon from '../img/next-icon.png'
import back_icon from '../img/back-icon.png'
import ami_1 from  '../img/ami-1.png'
import ami_2 from  '../img/ami-2.png'
import ami_3 from  '../img/ami-3.png'
import ami_4 from  '../img/ami-4.png'

const Experiencias = () => {
  const slider = useRef();
    let tx = 0;
  const slideForwar = ()=>{
    if(tx>-50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackwar = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  

  return (
    <div className='experiencia'>
        <img src={next_icon} alt="" className='next-boton' onClick={slideForwar}/>
        <img src={back_icon} alt="" className='back-boton' onClick={slideBackwar}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-Info">
                  <img src={ami_1} alt="" />
                  <div>
                    <h3>Hector Gutierrez</h3>
                    <span>Cochabamba, Bolivia</span>
                  </div>
                </div>
                <p>Para mi trabajar como un amigo en NearbyFriend es la mejor experienca que he tenido. He podido conocer a gente nueva y poder ayudar con mis conocimientos y talentos 
                    y a su ves ganar dinero.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-Info">
                  <img src={ami_2} alt="" />
                  <div>
                    <h3>Valentina Arias</h3>
                    <span>La Paz, Bolivia</span>
                  </div>
                </div>
                <p>Cuando comence en NearbyFriend no tenia un trabajo, un amigo me dijo que podia generar nuevos ingresos. Confie en el y me registre. Para la 
                    primera cita estaba muy nerviosa, pero al final fue algo maravilloso. Ahora tengo ingresos y conosco mas ente.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-Info">
                  <img src={ami_3} alt="" />
                  <div>
                    <h3>Damian Fernandez</h3>
                    <span>Santa Cruz, Bolivia</span>
                  </div>
                </div>
                <p>Personalmente creia que no tenia lo suficiente para ser un amigo, pero luego de inscribirme como amigo las capacitaciones que recibi me 
                    ayudaron a poder desarrollar nuevas habilidades y descubrir algunas que ya tenia. Me siento seguro y feliz siendo un amigo en Nearbyfriend.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-Info">
                  <img src={ami_4} alt="" />
                  <div>
                    <h3>Emily Garcia</h3>
                    <span>Tarija, Bolivia</span>
                  </div>
                </div>
                <p>Soy estudiante y queria generar ingresos, pero por mis horarios me era dificl poder hallar un trabajo. En NearbyFriend yo escojo en que 
                    horarios trabajar, se acomodo perfectamente a mis horarios en la Univercidad. Ahora puedo estudiar y generar ingresos.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <button className='btn-down'><NavLink to = '/RegistroAmigo'>Comienza Ahora</NavLink></button>
    </div>
  )
}

export default Experiencias