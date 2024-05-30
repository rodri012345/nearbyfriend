import React from "react";
import BarraBusqueda from "../BarraBusqueda";
import Titulo from "../Titulo";
import Carrusel from "../Carrusel";
import Detail from "../Detail";

export const ConoceMas= ({userID}) => {
    console.log("id usuario conoce: ", userID)
    return (
        <>
        <Titulo subTitulo="Aqui encontraras" titulo="Amigos para toda ocacion"/>
        <div className="bar">
        <BarraBusqueda />
        <Detail />
        <Titulo subTitulo="Amigos que comparten tus mismos gustos" titulo="Esta es una sugerencia de amigos que vimos para ti" />
        </div>
        <Carrusel idCliente={userID} />
        </>
    );
};