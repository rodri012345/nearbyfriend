import React from 'react'
import { useParams } from "react-router-dom";
import PerfilCliente from "../PerfilCliente";
import NavbarRegistro1 from '../NavbarRegistro1';
import Titulo from '../Titulo';

export const PerfilUsuario = ({userID}) => {
    
    return (
        <>
        <Titulo subTitulo="Aqui encontraras" titulo="Amigos para toda ocacion"/>
        <div className="bar">
        <PerfilCliente amigoId={userID}/>
        </div>
        
        </>
    )

}