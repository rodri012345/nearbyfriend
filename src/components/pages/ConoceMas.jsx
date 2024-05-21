import React from "react";
import Navbar1 from "../Navbar1";
import BarraBusqueda from "../BarraBusqueda";
import Titulo from "../Titulo";
import Carrusel from "../Carrusel";
import Detail from "../Detail";

export const ConoceMas= () => {
    return (
        <>
        
        
        <Titulo subTitulo="Aqui encontraras" titulo="Amigos para toda ocacion"/>
        <div className="bar">
        <BarraBusqueda />
        <Detail />
        <Titulo subTitulo="Amigos nuevos" titulo="Ellos estan listos para ayudarte"/>    
        <Carrusel />
        </div>
        </>
    );
};