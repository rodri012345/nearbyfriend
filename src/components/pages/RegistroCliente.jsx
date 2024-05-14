import React from "react";
import Footer from '../Fotter'
import Registro from "../Registro";
import Navbar from "../Navbar1";
import Titulo from "../Titulo"



export const RegistroCliente = () => {
    return (
        <>
        <Navbar/>
        <Titulo subTitulo="Registrar Cliente" titulo="Comienza una Nueva Experiencia"/>
        <Registro />
        
        <Footer />
        
        </>
    );
};