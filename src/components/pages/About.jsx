import React from "react";
import Footer from "../Fotter";
import Carrusel from "../Carrusel";
import Cartilla from "../Cartilla";
import BarraBusqueda from "../BarraBusqueda";
import { Layout } from "antd";
import Enlaces from "../Enlaces";
const { Content } = Layout;

export const About = () => {
  return (
    <>
      <Content style={{padding:'20px', backgroundColor:'#FBF3D5'}}>
        <div
          style={{
            backgroundImage: `url('https://www.elplural.com/uploads/s1/11/08/54/6/simon-maage-tximrx3gc-g-unsplash.jpeg')` /* Reemplaza 'ruta/a/tu/imagen.jpg' con la ruta de tu imagen */,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "700px",
            
          }}
        ></div>
        <div style={{backgroundColor:'#DDDDDD'}}>
        <BarraBusqueda/>
        </div>
        <Enlaces/>
        <h1>Ultimos Amigos Registrados</h1>
        <Carrusel />
      </Content>
      <Footer/>
    </>
  );
};
