import React, { useRef } from 'react'
import './Testimonio.css'
import next_icon from '../img/next-icon.png'
import back_icon from '../img/back-icon.png'
import user_1 from  '../img/user-1.png'
import user_2 from  '../img/user-2.png'
import user_3 from  '../img/user-3.png'
import user_4 from  '../img/user-4.png'

const Testimonios = () => {
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
    <div className='testimonios'>
        <img src={next_icon} alt="" className='next-boton' onClick={slideForwar}/>
        <img src={back_icon} alt="" className='back-boton' onClick={slideBackwar}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-Info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Jennifer Ramos</h3>
                    <span>Santa Cruz, Bolivia</span>
                  </div>
                </div>
                <p>Alquilar un amigo en NearbyFriend fue una maravillosa experiencia. El servicio
                  fue exelente. El amigo que escogi fue muy cortes y puntual. Exelente servicio.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-Info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Camilo Falla</h3>
                    <span>La Paz, Bolivia</span>
                  </div>
                </div>
                <p>Al principio me sentia inseguro por como hiba a ser el servicio, pero alquile una amiga para
                  una reunion de mi empresa y salio todo bien. El servicio fue exelente y seguro.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-Info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Jacqueline Perez</h3>
                    <span>Cochabamba, Bolivia</span>
                  </div>
                </div>
                <p>Tenia una actividad deportiva, y necesitaba un amigo para completar el equipo, En NearbyFriend pude encontrar a 
                  alguien que le guste lo mismo que a mi. Es muy raro encontrar a alguien que le guste el Badminton, pero
                  aqui pude encontrar a alguien. Fue una buena experiencia.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-Info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Julian Cardona</h3>
                    <span>Tarija, Bolivia</span>
                  </div>
                </div>
                <p>Llegue de visita a La Paz y no conocia a nadie que me pueda mostrar la ciudad, Tenia miedo de perderme o peor que me 
                  asalten. Un amigo me recomendo NearbyFriend y contrate a 2 amigos para pasar el dia. Fue la mejor dicision, me mostraron la 
                  ciudad y me senti muy seguro y comodo. La mejor decision.
                </p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonios