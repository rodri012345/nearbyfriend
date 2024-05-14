import React from 'react'
import { useParams } from "react-router-dom";
import PerfilAmigo from "../PerfilAmigo";
import Navbar from '../Navbar1';
import Titulo from '../Titulo';

export const Perfil = () => {
    const {amigoId} = useParams();
    return (
        <>
        <Navbar/>
        <Titulo  titulo="Amigos para toda ocacion"/>
        <PerfilAmigo amigoId={amigoId}/>
        </>
    )

}


