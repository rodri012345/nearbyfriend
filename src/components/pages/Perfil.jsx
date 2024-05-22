import React from 'react'
import { useParams } from "react-router-dom";
import PerfilAmigoCliente from "../PerfilAmigoCliente";
import Navbar from '../Navbar1';
import Titulo from '../Titulo';
import PerfilAmigo from '../PerfilAmigo';


export const Perfil = () => {
    const {amigoId} = useParams();
    return (
        <>
        <Navbar/>
        
        {/* <Titulo  titulo="Amigos para toda ocasión"/>
        <PerfilAmigoCliente amigoId={amigoId}/> */}
        <PerfilAmigo amigoId={amigoId}/>
        </>
    )

}


