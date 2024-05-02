import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";
import React, { useEffect, useState } from "react";
import { Button, Select, Space } from "antd";
import "./EstilosInicio.css";
import {
  EnvironmentOutlined,
  TeamOutlined,
  CarOutlined,
  CalendarOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import BuscarAmigo from "./BuscarAmigo";

function BarraBusqueda() {
  const [lista, setLista] = useState([]);
  const [ciudad, setCiudad] = useState("Cualquiera");
  const [genero, setGenero] = useState("Ambos");
  const [gusto, setGusto] = useState("Cualquiera");

  /* useEffect(() => {
    const getLista = async () => {
      try {
        let queryRef = collection(db, "amigos");
        if (ciudad !== "Cualquiera") {
          queryRef = query(queryRef, where("departamento", "==", ciudad));
        }const firebaseConfig = {
  apiKey: "AIzaSyCtHYCYdUN17vIwhPPvLADefPFEbKk9Cg8",
  authDomain: "hospedaje-react-dd174.firebaseapp.com",
  projectId: "hospedaje-react-dd174",
  storageBucket: "hospedaje-react-dd174.appspot.com",
  messagingSenderId: "1066849059054",
  appId: "1:1066849059054:web:7da379cd92ff175e52f3ff"
};

        if (genero !== "Ambos") {
          queryRef = query(queryRef, where("genero", "==", genero));
        }

        //query(collection(db, "amigos"),where("departamento","==","Cochabamba"))
        const querySnapshot = await getDocs(queryRef);
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
  }, [lista]); */

  const handleChangeCiudad = (value) => {
    setCiudad(value);
  };
  const handleChangeGenero = (value) => {
    setGenero(value);
  };

  const handleChangeGustos = (value) => {
    setGusto(value);
  };

  const handleChange = (value) => {
    console.log(value);
  };

  const handleBuscar = () => {
    console.log(ciudad);
  };

  return (
    <div style={{ padding: "50px" }}>
      <div>
        <h3 className="estilo-h3 ">
          Busca con quién y dónde quieres alquilar un amigo o encontrar una
          amiga
        </h3>
      </div>
      <br />
      <div className="content-buscador">
        <div>
          <h6>
            <i>
              <EnvironmentOutlined />
            </i>{" "}
            ciudad
          </h6>
          <Select
            defaultValue="Cualquiera"
            style={{
              width: 200,
            }}
            onChange={handleChangeCiudad}
            options={[
              {
                value: "Cualquiera",
                label: "Cualquiera",
              },
              {
                value: "Cochabamba",
                label: "Cochabamba",
              },
              {
                value: "La Paz",
                label: "La Paz",
              },
              {
                value: "Santa Cruz",
                label: "Santa Cruz",
              },
              {
                value: "Sucre",
                label: "Sucre",
              },
              {
                value: "Potosi",
                label: "Potosi",
              },
              {
                value: "Beni",
                label: "Beni",
              },
              {
                value: "Pando",
                label: "Pando",
              },
              {
                value: "Tarija",
                label: "Tarija",
              },
              {
                value: "Oruro",
                label: "Oruro",
              },
            ]}
          />
        </div>
        <div>
          <h6>
            <TeamOutlined /> genero
          </h6>
          <Select
            defaultValue="Ambos"
            style={{
              width: 200,
            }}
            onChange={handleChangeGenero}
            options={[
              {
                value: "femenino",
                label: "femenino",
              },
              {
                value: "masculino",
                label: "masculino",
              },
              {
                value: "Ambos",
                label: "Ambos",
              },
            ]}
          />
        </div>
        <div>
          <h6>
            <CarOutlined /> Hobbies/gustos
          </h6>
          <Select
            defaultValue="Cualquiera"
            style={{
              width: 200,
            }}
            onChange={handleChangeGustos}
            options={[
              {
                value: "Cualquiera",
                label: "Cualquiera",
              },
              {
                value: "Cantar",
                label: "Cantar",
              },
              {
                value: "Bailar",
                label: "Bailar",
              },
              {
                value: "Comer",
                label: "Comer",
              },
              {
                value: "Peliculas",
                label: "Peliculas",
              },
              {
                value: "Cine",
                label: "Cine",
              },
              {
                value: "Leer",
                label: "Leer",
              },
              {
                value: "Pasear",
                label: "Pasear",
              },
              {
                value: "Arte",
                label: "Arte",
              },
              {
                value: "Futbol",
                label: "Futbol",
              },
              {
                value: "Musica",
                label: "Musica",
              },
              {
                value: "Mascotas",
                label: "Mascotas",
              },
              {
                value: "Anime",
                label: "Anime",
              },
              {
                value: "Estudiar",
                label: "Estudiar",
              },
              {
                value: "Autos",
                label: "Autos",
              },
              {
                value: "Deportes",
                label: "Deportes",
              },
              {
                value: "gimnasio",
                label: "gimnasio",
              },
            ]}
          />
        </div>
        <div>
          <h6>
            <CalendarOutlined /> edad
          </h6>
          <Select
            defaultValue="Cualquiera"
            style={{
              width: 200,
            }}
            onChange={handleChange}
            options={[
              {
                value: "Cualquiera",
                label: "Cualquiera",
              },
              {
                value: "entre 18 y 25",
                label: "entre 18 y 25",
              },
              {
                value: "entre 25 y 35",
                label: "entre 25 y 35",
              },
              {
                value: "entre 35 y 45",
                label: "entre 35 y 45",
              },
              {
                value: "entre 45 y 65",
                label: "entre 45 y 65",
              },
              {
                value: "mas de 65",
                label: "mas de 65",
              },
            ]}
          />
        </div>
        <Space>
          <Button
            className="estilo-btn"
            type="primary"
            icon={<SearchOutlined />}
            onClick={handleBuscar}
          >
            Buscar
          </Button>
        </Space>
      </div>
      <div>
        {/* <BuscarAmigo seleccion={lista} /> */}
      </div>
    </div>
  );
}
export default BarraBusqueda;
