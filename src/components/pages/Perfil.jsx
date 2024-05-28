import React from 'react'
import PerfilAmigoCliente from "../PerfilAmigoCliente";
import Navbar from '../Navbar1';
import Titulo from '../Titulo';
import PerfilAmigo from '../PerfilAmigo';


export const Perfil = ({amigoId}) => {
    
    
    return (
        <>
        <Navbar/>
        
        {/* <Titulo  titulo="Amigos para toda ocasión"/>
        <PerfilAmigoCliente amigoId={amigoId}/> */}
        <PerfilAmigo amigoId={amigoId}/>
        </>
    )

}