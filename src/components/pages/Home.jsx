import React from "react";
import Footer from '../Fotter'
export const Home = () => {
  return (
    <>
      <Content style={{padding:'20px', backgroundColor:'#FBF3D5'}}>
        <div
          style={{
            backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/nearbyfriend.appspot.com/o/inicio.jpg?alt=media&token=1fd8d284-415f-4546-808d-a85098b00fc7")` /* 'https://www.elplural.com/uploads/s1/11/08/54/6/simon-maage-tximrx3gc-g-unsplash.jpeg' */,
            backgroundSize: "100% 100%",
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