import React from 'react'
import {Card, Button} from 'antd'
import './Carrusel.css'
import { Link } from 'react-router-dom';

const {Meta} = Card
const Tarjeta = ({nombre , ciudad, urlImage,idAmigo}) => {

  const onVerMasInfo = () => {
    console.log("presionaste el boton de: ",nombre, "con id: ",idAmigo);
  }
  
  return (
    <div style={{margin:'20px'}}>
      <Card
            hoverable
            style={{ width: 250, textAlign:'center', border:'solid 1px black',boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)'}}
            cover={
              <img
                alt="user"
                src={urlImage}
                style={{objectFit:'cover',  width:'100%', height:280}}
                
              />
            }
          >
            <Meta title = {nombre} description= {ciudad} className='text-center'/>
            <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <Link to={`/PerfilAmg/${idAmigo}`}>
            <Button type="primary" className='estilo-btn' >Ver más info</Button>
            </Link>
            </div>

          </Card>
    </div>
  )
}

export default Tarjeta
