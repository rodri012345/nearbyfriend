import React from 'react'
import {Card, Button} from 'antd'
import './Carrusel.css'

const {Meta} = Card
const Targeta = ({nombre , ciudad}) => {
  return (
    <div >
      <Card
            hoverable
            style={{ width: 250, textAlign:'center'}}
            cover={
              <img
                alt="user"
                src="https://static.vecteezy.com/system/resources/previews/001/131/187/non_2x/serious-man-portrait-real-people-high-definition-grey-background-photo.jpg"
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

export default Targeta
