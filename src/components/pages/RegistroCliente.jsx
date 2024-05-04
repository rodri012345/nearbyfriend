import React from "react";
import Footer from '../Fotter'
import Registro from "../Registro";
import FotoCliente from "../registroFotoCliente";



export const RegistroCliente = () => {
    return (
        <>
        <h1 style={{textAlign:'center', padding:'15px'}}>Registrar Cliente</h1>
        <Registro />
        
        <Footer />
        
        </>
    );
};