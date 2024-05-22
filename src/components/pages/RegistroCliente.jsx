import React from "react";
import Navbar1 from '../Navbar1'
import Registro from "../Registro";
import Navbar from "../Navbar1";
import Titulo from "../Titulo"
import Footer from "../Fotter";



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