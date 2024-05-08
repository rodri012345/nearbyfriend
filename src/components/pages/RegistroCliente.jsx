import React from "react";
import Navbar1 from '../Navbar1'
import Registro from "../Registro";
import Titulo from "../Titulo";
export const RegistroCliente = () => {
    return (
        <>
        <Navbar1 />
        <Titulo subTitulo="Registro Cliente" titulo="Comienza una Nueva Experiencia"/>
        <Registro />
        
        </>
    );
};