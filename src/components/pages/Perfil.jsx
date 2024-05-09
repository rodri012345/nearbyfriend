import React from 'react'
import { useParams } from "react-router-dom";
import PerfilAmigo from "../PerfilAmigo";

export const Perfil = () => {
    const {amigoId} = useParams();
    return (
        <>
        <PerfilAmigo amigoId={amigoId}/>
        </>
    )

}