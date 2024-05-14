import React from "react";
import Footer from '../Fotter'
import RegistrarAmigo from "../RegistrarAmigo";
import Navbar from "../Navbar1";
import Titulo from "../Titulo";
export const RegistroAmigo = () => {
    return (
        <>
        <Navbar/>
        <Titulo subTitulo="Registrar Amigo" titulo="Comienza una Nueva Experiencia"/>
        <RegistrarAmigo/>
        
        <Footer />
        </>
    );
};