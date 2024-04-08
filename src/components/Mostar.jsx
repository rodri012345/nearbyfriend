import React from 'react';
import { Button, Descriptions, Radio, List } from 'antd';
import "./Mostrar.css";
const Data =[
    'Nombre: Ruben ',
    'Apellido: Ferrufino Lopez',
    'Genero: masculino',
    'Ciudad: Cochabamba',
    'Corrreo: rubFer@gmai.com',
    'Numero: 74296357',
]
const Mostrar = () => {
  
  return (
  <div >
    <List 
    size="large"
    header={<h2>Datos</h2>}
    bordered
    dataSource={Data}
    renderItem={(item) => <List.Item>{item}</List.Item>}/>
  </div>
  );
};
export default Mostrar;
