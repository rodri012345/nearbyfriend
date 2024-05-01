import React from "react";
import Footer from "../Fotter";
import Carrusel from "../Carrusel";

import BarraBusqueda from "../BarraBusqueda";
import { Layout} from "antd";
import Enlaces from "../Enlaces";
import Targeta from "../Targeta";


const { Content } = Layout;

export const About = () => {
  return (
    <>
      <Content style={{ backgroundColor:'#DFF5FF'}}>
        <div
          style={{
            backgroundImage: `url("https://www.elplural.com/uploads/s1/11/08/54/6/simon-maage-tximrx3gc-g-unsplash.jpeg")` /* 'https://www.elplural.com/uploads/s1/11/08/54/6/simon-maage-tximrx3gc-g-unsplash.jpeg' */,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "700px",
            
          }}
        >
          <h1 style={{textAlign:'center',fontFamily: "Creepster",fontSize:'100px'}}>NearbyFriend</h1>
        </div>
        <div style={{backgroundColor:'#DDDDDD'}}>
        <BarraBusqueda/>
        </div>
        <div style={{backgroundColor:'blue'}}>
        <Targeta
        nombre= 'Jose Perez'
        ciudad= 'Cochabamba'/>
        </div>
        
        <div style={{margin:'20px 0'}}>
        <Enlaces/>
        </div>
        
        <h1>Ultimos Amigos Registrados</h1>
        <Carrusel />
      </Content>
      <Footer/>
    </>
  );
};
