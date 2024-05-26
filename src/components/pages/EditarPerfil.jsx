import React from "react";
import Footer from '../Fotter'

import ModificarPerfil from "../ModificarPerfil";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar1";


export const EditarPerfil = () => {
    const {idAmigo} = useParams();
  return (
    <>
      <Navbar/>
      <ModificarPerfil amigoId={idAmigo}/>
      
    </>
  );
};