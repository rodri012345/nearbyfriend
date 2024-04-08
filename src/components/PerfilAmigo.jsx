import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Mostar2 from './Mostrar2';
import {Col, Row} from 'antd';
import Mostrar from './Mostar';
import Mostrar3 from './Mostrar3';
import PerfilC from './Mostrar3';



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
            
            <PerfilC />
        
    )
}
export default PerfilAmigo;