import React from "react";
import Fondo from '../Fondo';
import { Layout } from "antd";
import Informacion from "../Informacion";
import Titulo from "../Titulo";
import Detalles from "../Detalles";
import Trabajo from "../Trabajo";
import Testimonios from "../Testimonios";
import Carrusel from "../Carrusel";

const { Content } = Layout;

export const Home = ({ user, userID }) => {
  console.log("este es el uID", userID);
  return (

    <>

      <Content>
        {user && (
          <>
            <Fondo
              titulo="Bienvenido a la plataforma mas grande de amigos"
              subtitulo="Comienza a buscar al amigo que necesitas, para ese momento especial."
              user={user}
            />
            <Titulo subTitulo="Amigos que comparten tus mismos gustos" titulo="Esta es una sugerencia de amigos que vimos para ti" />
            <Carrusel userID={userID} />


          </>

        )}
        {!user && (
          <>
            <Fondo
              titulo="El Amigo que necesitas para el momento que necesites"
              subtitulo="Contamos con una amplia cantidad de amigos que comparten tus
              mismas aficiones y estan dispuestos a compañarte en
              cualquier momento para lo que necesites."
              user={user}
            />
            <Titulo subTitulo="Aqui encontraras" titulo="Amigos para toda ocacion" />
            <Informacion />
            <Detalles />
            <Titulo subTitulo="Trabaja con nosotros" titulo="Tu tambien puedes ser un amigo" />
            <Trabajo />
          </>

        )}
        <div className="bar">
          <Titulo subTitulo="Las experiencias hablan por si mismas" titulo="Personas que comparten sus experiencias" />
          <Testimonios />
        </div>
      </Content>
    </>
  );
};

export default Home;
