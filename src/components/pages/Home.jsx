import React from "react";
import Fondo from '../Fondo';
import { Layout} from "antd";
import Informacion from "../Informacion";
import Titulo from "../Titulo";
import Detalles from "../Detalles";
import Trabajo from "../Trabajo";
import Testimonios from "../Testimonios";
import NavbarRegistro from "../NavbarRegistro";

const { Content } = Layout;
export const Home = () => {
  return (
    <>
      <Content >
        <NavbarRegistro />
        <Fondo />
        <Titulo subTitulo="Aqui encontraras" titulo="Amigos para toda ocacion"/>
        <Informacion/>
        <Detalles />
        <Titulo subTitulo="Trabaja con nosotros" titulo="Tu tambien puedes ser un amigo"/>
        <Trabajo />
        <Titulo subTitulo="Las experiencias hablan por si mismas" titulo="Personas que comparten sus experiencias"/>
        <div className="bar">
        <Testimonios />
        </div>
      </Content>
    </>
  );
};