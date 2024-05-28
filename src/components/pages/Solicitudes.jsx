import React from "react";
import GestionDeSolicitudes from "../GestionDeSolicitudes";
import Menu from "../Menu"
export const Solicitudes= (amigoId) => {
    return (
        <>
        <GestionDeSolicitudes amigoId={amigoId} />
        </>
    );
};