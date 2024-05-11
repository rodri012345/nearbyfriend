import React from "react";
import { useState } from "react";
import { Col, Row, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function FotoCliente() {
  
  const URL_RESOURCES = "../img/";
  const URL_DEFAULT = "avatar2.jpg";
  const [image, setImage] = useState(URL_RESOURCES + URL_DEFAULT);
 
  const handleChange = (e) => {
    const urlImg = URL.createObjectURL(e.target.files[0]);
    console.log(urlImg);
    console.log(e.target.files[0]);
    setImage(urlImg);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Crear cuenta de CLIENTE</h1>
      <Row gutter={[110, 10]} style={{ justifyContent: "center" }}>
        <Col>
          <div span={12}>
          <h2 style={{textAlign:'center'}}>Añadir foto de perfil </h2>
            <img
              src={image}
              alt="cargando imagen"
              width={"300px"}
              height={"320px"}
              style={{ borderRadius: "30px" }}
            />
            <Upload style={{ marginLeft: "30px" }}>
              <UploadOutlined style={{ fontSize: "40px" }} />
            </Upload>
          </div>
          <div>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
        </Col>

        <Col style={{width:'35%'}}>
          <div span={12} style={{ marginTop: "110px" }}>
            <h2>Cuentanos mas de ti</h2>
            <textarea
              name="text"
              id="tex1"
              cols="30"
              rows="10"
              style={{ width: "100%" }}
            ></textarea>
          </div>
        </Col>
      </Row>

      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button type="primary">volver atras</Button>
        <Button type="primary" disabled={image === URL_RESOURCES + URL_DEFAULT}>
          Registrarse
        </Button>
      </div>
    </div>
  );
}

export default FotoCliente;
