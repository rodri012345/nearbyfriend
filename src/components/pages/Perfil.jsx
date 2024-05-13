import React from 'react'
import { useParams } from "react-router-dom";
import PerfilAmigo from "../PerfilAmigo";
import Navbar1 from '../Navbar1';
import Titulo from '../Titulo';

export const Perfil = () => {
    const {amigoId} = useParams();
    return (
        <>
        <Navbar1 />
        <Titulo subTitulo="Aqui encontraras" titulo="Amigos para toda ocacion"/>
        <div className="bar">
        <PerfilAmigo amigoId={amigoId}/>
        </div>
        
        </>
    )

}