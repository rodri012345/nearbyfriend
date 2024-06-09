import React from 'react'
import PerfilAmigoCliente from "../PerfilAmigoCliente";
import PerfilAmigo from '../PerfilAmigo';


export const Perfil = ({amigoId}) => {
    
    
    return (
        <>
        
        
        {/* <Titulo  titulo="Amigos para toda ocasión"/>
        <PerfilAmigoCliente amigoId={amigoId}/> */}
        <PerfilAmigo amigoId={amigoId}/>
        </>
    )

}