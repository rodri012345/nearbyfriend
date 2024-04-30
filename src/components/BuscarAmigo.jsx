import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";
import React, { useEffect, useState } from "react";
import Tarjeta from "./Tarjeta";
import "./BuscarAmigo.css"

const BuscarAmigo = () => {
  const [lista, setLista] = useState([]);
  const [amigoSeleccionado, setAmigoSeleccionado] = useState(null);

  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "amigos"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLista(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getLista();
  }, [lista]);

  const handleVerMasInfo = (id) => {
    setAmigoSeleccionado(id);
    }

    if (amigoSeleccionado) {
        return <InfoAmigo amigoId={amigoSeleccionado} />;
    }

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
