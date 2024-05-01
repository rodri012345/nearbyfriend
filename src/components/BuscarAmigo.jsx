import { collection, doc, getDocs, query,where } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";
import React, { useEffect, useState } from "react";
import Tarjeta from "./Tarjeta";
import "./BuscarAmigo.css"



const BuscarAmigo = ({seleccion}) => {
  const lista = seleccion
  
  
  // useEffect(() => {
  //   const getLista = async () => {
  //     try {
  //       let queryRef = collection(db,"amigos")
  //       if(ciudad !== 'Cualquiera') {
  //         queryRef = query(queryRef,where("departamento","==",ciudad))
  //       }

  //       if(genero !== 'Ambos') {
  //         queryRef = query(queryRef,where("genero","==",genero))
  //       }

  //       //query(collection(db, "amigos"),where("departamento","==","Cochabamba"))
  //       const querySnapshot = await getDocs(queryRef);
  //       const docs = [];
  //       querySnapshot.forEach((doc) => {
  //         docs.push({ ...doc.data(), id: doc.id });
  //       });
  //       setLista(docs);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getLista();
  // }, [lista]);

  const handleCiudadChange = value => {
    setCiudad(value);
  }

  const handleGeneroChange = value => {
    setGenero(value);
  }
  // const handleVerMasInfo = (id) => {
  //   setAmigoSeleccionado(id);
  //   console.log(amigoSeleccionado)
  //   }

    // if (amigoSeleccionado) {
    //     return <PerfilAmi amigoId={amigoSeleccionado} />;
    // }

  return (
    <div style={{ backgroundColor:'#DDDDDD', padding:'40px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1200px' }}>
                {lista.map((list, index) => (
                    <div key={list.id} style={{ flex: '1 0 25%', marginBottom: '20px' }}>
                        <Tarjeta
                            nombre={list.nombre + " " + list.apellido}
                            ciudad={list.departamento}
                            urlImage={list.imageURL}
                            onVerMasInfo={() => handleVerMasInfo(list.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
  );
};

export default BuscarAmigo;
