import React from 'react'
import PerfilAmigoCliente from "../PerfilAmigoCliente";
import Navbar from '../Navbar1';
import Titulo from '../Titulo';
import PerfilAmigo from '../PerfilAmigo';
import { useParams } from 'react-router-dom';


export const PerfilAmg = ({clienteId}) => {
    const {amigoId} = useParams(); 
    
    return (
        <>
        <Navbar/>
        <Titulo  titulo="Amigos para toda ocasión"/>
        <PerfilAmigoCliente amigoId={amigoId} clienteId = {clienteId}/>
        
        </>
    )

}