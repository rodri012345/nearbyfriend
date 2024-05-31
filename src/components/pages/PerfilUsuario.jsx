import React from 'react'
import Titulo from '../Titulo';
import PerfilUsuario1 from '../PerfilUsuario1';

export const PerfilUsuario = ({userID}) => {
    
    return (
        <>
        <div className="bar">
        <PerfilUsuario1 clienteID={userID}/>
        </div>
        
        </>
    )

}