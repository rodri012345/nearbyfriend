import React from "react";
import Navbar1 from '../Navbar1'
import Titulo from '../Titulo'
import FAQ from '../Faq'
import { Contactanos } from "../Contactanos";
export const Soporte= () => {
    return (
        <>
        
        <Titulo subTitulo="Estamos contigo en cada paso" titulo="Preguntas Frecuentes de Usuarios"/>
        <div className="bar">
        <FAQ />
        <Titulo subTitulo="Contactanos" titulo="Envianos Un Mensaje"/>
        <Contactanos />
        </div>
        </>
    );
};