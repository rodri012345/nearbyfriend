import React from 'react';
import { Divider, List, Typography } from 'antd';
import "./Mostrar.css";
const Hobbies = [
    'Bailar',
    'Saltar',
    'Nadar',
    'Corre',
]
const Mostar2 = () => {


    return (
        <div >
        <List 
        size="large"
        header={<h2>Hobbies</h2>}
        bordered
        dataSource={Hobbies}
        renderItem={(item) => <List.Item>{item}</List.Item>}/>
    </div>
    )
}
export default Mostar2;