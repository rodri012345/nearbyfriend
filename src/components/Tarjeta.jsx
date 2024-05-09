import React from 'react'
import { Card, Button } from 'antd'
import './Carrusel.css'
import { Link } from 'react-router-dom';

const { Meta } = Card
const Tarjeta = ({ nombre, ciudad, urlImage, idAmigo }) => {

  const onVerMasInfo = () => {
    console.log("presionaste el boton de: ", nombre, "con id: ", idAmigo);
  }
  return (
    <div style={{ margin: '20px' }}>
      <Card
        hoverable
        style={{ width: 250, textAlign: 'center', boxshadow: '0 0 20px rgba(0, 0, 0, 0.100)'}}
        cover={
          <img
            alt="user"
            src={urlImage}
            style={{ objectFit: 'cover', width: '100%', height: 280 }}

          />
        }
      >
        <Meta title={nombre} description={ciudad} className='text-center' />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* <Button type="primary" className='estilo-btn' onClick={onVerMasInfo}>Ver mas info</Button> */}
          <Link to={`/perfil/${idAmigo}`}>
            <Button type="primary" className='estilo-btn'>Ver Más</Button>
          </Link>



        </div>

      </Card>
    </div>
  )
}

export default Tarjeta