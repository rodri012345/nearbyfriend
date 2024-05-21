import React from 'react'
import { useParams } from "react-router-dom";
import PerfilAmigo from "../PerfilAmigo";
import NavbarRegistro1 from '../NavbarRegistro1';
import Titulo from '../Titulo';

export const PerfilUsuario = () => {
    const {userID} = useParams();
    return (
        <>
        <NavbarRegistro1 />
        <Titulo subTitulo="Aqui encontraras" titulo="Amigos para toda ocacion"/>
        <div className="bar">
        <PerfilAmigo amigoId={userID}/>
        </div>
        
        </>
    )

}