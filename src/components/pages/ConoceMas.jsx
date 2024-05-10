import React from "react";
import Navbar1 from "../Navbar1";
import BarraBusqueda from "../BarraBusqueda";
import Titulo from "../Titulo";
import Detalles from "../Detalles";
import Carrusel from "../Carrusel";
import Detail from "../Detail";

export const ConoceMas= () => {
    return (
        <>
        <Navbar1 />
        
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