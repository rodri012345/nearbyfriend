import React from "react";
import Footer from '../Fotter'

import ModificarPerfil from "../ModificarPerfil";
import Titulo from "../Titulo";


export const EditarPerfil = ({idAmigo}) => {
  
  return (
    <>
      <Titulo titulo={'Actualiza tus datos'}/>
      <ModificarPerfil amigoId={idAmigo}/>
      
    </>
  );
};