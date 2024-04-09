import React from 'react';
import "./Mostrar.css";
import { Descriptions,Col, Row, Image ,Rate, Modal, Button} from 'antd';
import Mostrar from './Mostar';
import Mostar2 from './Mostrar2';
function PerfilC(){
  return(
    <div className="PerfilC">
      <h1 className='titulo'>Tu Perfil</h1>
      <header className="PerfilCHeader">
        <Row gutter={[16,16]}>
          <Col span= {8}>
              <div>
                
                <div className='ImagenList'>
                  <h2>Fotos</h2>
                <Image.PreviewGroup
                preview={{
                  onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
               >
                
                <Image 
                  
                  width={300} 
                  src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                
                <Image
                  width={100}
                  src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                />
                <Image 
                  width={100} 
                  src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                <Image 
                  width={100} 
                  src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                </Image.PreviewGroup>
              </div>
            </div>
          </Col>
          <Col span={12}>
              <div >
                <Row gutter={[12,12]}>
                  <Col span={8}>
                      <div className='mostra-da'>
                        
                        <Mostrar ></Mostrar>
                        
                      </div>
                  </Col>
                  <Col span={8}>
                    <div className='mostra-ho'>

                            <Mostar2 />
                    </div>
                  </Col>
                </Row>
                <Row gutter={[12,12]}>
                <div>
    
                </div>
                </Row>
              </div>

              
              
          </Col>
          
        </Row>
        
      </header>

    </div>
  )

}


export default PerfilC;