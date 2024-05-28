import React from "react";
import Footer from '../Fotter'

import ModificarPerfil from "../ModificarPerfil";

import Navbar from "../Navbar1";
import Titulo from "../Titulo";


export const EditarPerfil = ({idAmigo}) => {
  
  return (
    <>
      <Navbar/>
      <Titulo titulo={'Actualiza tus datos'}/>
      <ModificarPerfil amigoId={idAmigo}/>
      
    </>
  );
};