import React from "react";
import Footer from "../Fotter";
import Carrusel from "../Carrusel";
import Fondo from '../Fondo';
import BarraBusqueda from "../BarraBusqueda";
import { Layout} from "antd";
import Informacion from "../Informacion";
import Titulo from "../Titulo";
import Detalles from "../Detalles";
import Trabajo from "../Trabajo";

const { Content } = Layout;
export const Home = () => {
  return (
    <>
      <Content >
        <Fondo />
        <Titulo subTitulo="Aqui encontraras" titulo="Amigos para toda ocacion"/>
        <Informacion/>
        <Detalles />
        <Titulo subTitulo="Trabaja con nosotros" titulo="Tu tambien puedes ser un amigo"/>
        <Trabajo />
        <h1>Ultimos Amigos Registrados</h1>
        <Carrusel />
      </Content>
      <Footer/>
    </>
  );
};