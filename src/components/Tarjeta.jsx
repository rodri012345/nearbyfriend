import React from 'react'
import {Card, Button} from 'antd'
import './Carrusel.css'

const {Meta} = Card
const Tarjeta = ({nombre , ciudad, urlImage}) => {
  return (
    <div >
      <Card
            hoverable
            style={{ width: 250, textAlign:'center', border:'solid 1px black'}}
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
            <Button type="primary" className='estilo-btn'>Ver mas info</Button>
            </div>

          </Card>
    </div>
  )
}

export default Tarjeta
