import React from "react";
import Tarjeta from "./Tarjeta";
import "./BuscarAmigo.css"



const BuscarAmigo = ({seleccion}) => {
  const lista = seleccion
  
  return (
    <div style={{ backgroundColor:'#DDDDDD', padding:'40px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1200px' }}>
                {lista.map((list, index) => (
                    <div key={list.id} style={{ flex: '1 0 25%', marginBottom: '20px' }}>
                        <Tarjeta
                            nombre={list.nombre + " " + list.apellido}
                            ciudad={list.departamento}
                            urlImage={list.imageURL}
                            idAmigo={list.id}
                            
                        />
                    </div>
                ))}
            </div>
        </div>
  );
};

export default BuscarAmigo;
