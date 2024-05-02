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
  const [edad, setEdad] = useState("Cualquiera");
  const [buscado, setBuscado] = useState(false);

  const handleBuscar = () => {
    setBuscado(true);
  };

  /* useEffect(() => {
    const getLista = async () => {
      try {
        if (!buscado) return;

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

        if (gusto !== "Cualquiera") {
          queryRef = query(queryRef, where("hobbies", "array-contains", gusto));
        }

        //query(collection(db, "amigos"),where("departamento","==","Cochabamba"))
        const querySnapshot = await getDocs(queryRef);
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLista(docs);
        setBuscado(false);
      } catch (error) {
        console.log(error);
      }
    };
    getLista();
<<<<<<< HEAD
  }, [lista]); */
=======
  }, [buscado]);
>>>>>>> 6431f7db0ed085f769363229df62b767170d715b

  const calcularEdad = (fecha) => {
    const fechaNac = new Date(fecha);
    const ahora = new Date();
    let edadCalculada = ahora.getFullYear() - fechaNac.getFullYear();
    const diferenciaMeses = ahora.getMonth() - fechaNac.getMonth();
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && ahora.getDate() < fechaNac.getDate())
    ) {
      edadCalculada--;
    }
    return edadCalculada;
  };
  const handleChangeCiudad = (value) => {
    setCiudad(value);
  };
  const handleChangeGenero = (value) => {
    setGenero(value);
  };

  const handleChangeGustos = (value) => {
    setGusto(value);
  };

  const handleChangeEdad = (value) => {
    if (value === "entre 18 y 25") {
      setEdad("18");
    }
    if (value === "entre 25 y 35") {
      setEdad("25");
    }
    if (value === "entre 35 y 45") {
      setEdad("35");
    }
    if (value === "entre 45 y 65") {
      setEdad("45");
    }
    if (value === "mas de 65") {
      setEdad("65");
    }
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
                value: "Ver peliculas",
                label: "Ver peliculas",
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
                value: "Pintar",
                label: "Pintar",
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
                value: "Viajes",
                label: "Viajes",
              },
              {
                value: "Dibujar",
                label: "Dibujar",
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
                value: "Escribir",
                label: "Escribir",
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
                value: "Gim",
                label: "Gim",
              },
              {
                value: "Actuar",
                label: "Actuar",
              },
              {
                value: "Cocinar",
                label: "Cocinar",
              },
              {
                value: "Conciertos",
                label: "Conciertos",
              },
              {
                value: "Nadar",
                label: "Nadar",
              },
              {
                value: "Fiestas",
                label: "Fiestas",
              },
              {
                value: "Coleccionar",
                label: "Coleccionar",
              },
              {
                value: "Negocios",
                label: "Negocios",
              },
              {
                value: "Trabajo",
                label: "Trabajo",
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
            onChange={handleChangeEdad}
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
<<<<<<< HEAD
      <div>
        {/* <BuscarAmigo seleccion={lista} /> */}
      </div>
=======
      <div><BuscarAmigo seleccion={lista} /></div>
>>>>>>> 6431f7db0ed085f769363229df62b767170d715b
    </div>
  );
}
export default BarraBusqueda;
