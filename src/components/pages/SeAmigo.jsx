import React from "react";
import Navbar1 from "../Navbar1";
import Titulo from "../Titulo";
import InfoTrabajo from "../InfoTrabajo";

import Experiencias from "../Experiencias";

export const SeAmigo= () => {
    return (
        <>
        <Navbar1 />
        <Titulo subTitulo="Se Parte de Esta gran Experiencia" titulo="Genera Ingresos y Amistad"/>
        <div className="bar">
        <InfoTrabajo />
        <Experiencias/>
        </div>
        </>
    );
};