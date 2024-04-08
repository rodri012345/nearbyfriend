import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Mostar2 from './Mostrar2';
import {Col, Row} from 'antd';
import Mostrar from './Mostar';
import Mostrar3 from './Mostrar3';



function PerfilAmigo () {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        
        const datosRef = collection(db, "amigos");

        getDocs(datosRef)
        .then((resp) => {
            console.log(resp.docs[0].data());
           
            setDatos(
                resp.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                })
            )
        })


    }, [])
    return (
      <Row gutter={[16,16]} > 
        <Col span={8} >
            <div>
                <Mostrar />
            </div>
        </Col>
        <Col span={8}>
                <Mostar2 />        
        </Col>
        <Col span={8}>
            
        </Col>
      </Row>
        
    )
}
export default PerfilAmigo;