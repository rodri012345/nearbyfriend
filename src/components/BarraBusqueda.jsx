import React, { useState } from "react";
import { Button, Select, Space } from "antd";
import "./EstilosInicio.css"
import {
  EnvironmentOutlined,
  TeamOutlined,
  CarOutlined,
  CalendarOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function BarraBusqueda() {
  const [lista, setLista] = useState([]);
  const [ciudad, setCiudad] =useState("Cualquiera");
  const [genero,setGenero]  = useState("Ambos");
  const [gusto, setGusto]   =useState("Cualquiera") ;

  return (
    <div style={{ padding: "50px"}}>
      <div>
      <h3 className="estilo-h3 ">
        Busca con quién y dónde quieres alquilar un amigo o encontrar una amiga
      </h3>
      </div>
      <br />
      <div className="content-buscador">
        <div>
          <h6 >
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
            onChange={handleChange}
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
          <h6 >
            <TeamOutlined /> genero
          </h6>
          <Select
            defaultValue="Ambos"
            style={{
              width: 200,
            }}
            onChange={handleChange}
            options={[
              {
                value: "Chica",
                label: "Chica",
              },
              {
                value: "Chico",
                label: "Chico",
              },
              {
                value: "Ambos",
                label: "Ambos",
              },
            ]}
          />
        </div>
        <div>
          <h6 >
            <CarOutlined /> Hobbies/gustos
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
          <h6 >
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
          <Button className="estilo-btn" type="primary" icon={<SearchOutlined />}>
            Buscar
          </Button>
        </Space>
      </div>
    </div>
  );
}
export default BarraBusqueda;
