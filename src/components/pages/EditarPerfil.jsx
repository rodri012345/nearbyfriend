import React from "react";
import Footer from '../Fotter'

import ModificarPerfil from "../ModificarPerfil";
import { useParams } from "react-router-dom";


export const EditarPerfil = () => {
    const {idAmigo} = useParams();
  return (
    <>
      <ModificarPerfil amigoId={idAmigo}/>
      <Footer />
    </>
  );
};