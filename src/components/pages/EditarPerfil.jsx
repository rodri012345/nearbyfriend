import React from "react";
import Footer from '../Fotter'
import ModificarPerfil from "../ModificarPerfil";
import Titulo from "../Titulo";


export const EditarPerfil = ({ userID }) => {

  return (
    <>
      <Titulo subTitulo="Aqui encontraras" titulo="Amigos para toda ocacion" />
      <ModificarPerfil amigoId={userID} />
    </>
  );
};