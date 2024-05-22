import React, { useState, useEffect } from "react";
import { Col, Row, Upload, Button, message, Result } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import avatarDefault from "../img/avatar2.jpg";
import upload from "../img/subir.png";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";
import "./SubirFoto.css";

function FotoAmigo() {
  const URL_DEFAULT = avatarDefault;
  const [image, setImage] = useState(URL_DEFAULT);
  const [image1, setImage1] = useState(URL_DEFAULT);
  const [image2, setImage2] = useState(URL_DEFAULT);
  const [image3, setImage3] = useState(URL_DEFAULT);
  const [aboutText, setAboutText] = useState("");
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange1 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage1(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage2(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange3 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage3(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAboutChange = (e) => {
    setAboutText(e.target.value);
  };

  const handleRegister = () => {
    if (!aboutText.trim()) {
      message.error("Por favor, completa la sección 'Cuentanos más de ti'");
      return;
    }
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (!formData) {
      console.error("Error: formData es nulo.");
      return;
    }
    formData.imageURL = image;
    formData.imageURL1 = image1;
    formData.imageURL2 = image2;
    formData.imageURL3 = image3;
    
    guardarDatosEnFirebase(formData);
  };

  const guardarDatosEnFirebase = async (formData) => {
    try {
      formData.aboutText = aboutText;
      formData.activo = true;
      const docRef = await addDoc(collection(db, "amigos"), formData);
      console.log("Documento guardado con ID: ", docRef.id);
      localStorage.removeItem("formData");
      setRegistroExitoso(true);
    } catch (e) {
      console.error("Error al agregar documento: ", e);
    }
  };

  const handleGoBack = () => {
    window.location.href = "/RegistroAmigo";
  };

  return (
    <div className="subir-header-amigo">
      <h1 style={{ textAlign: "center" }}>Registrarse</h1>
      <Row gutter={[110, 10]} style={{ justifyContent: "center" }}>
        <Col>
          <div>
            <h2 style={{ textAlign: "center" }}>Añadir foto de perfil </h2>
            <img
              src={image}
              alt="cargando imagen"
              width={"320px"}
              height={"350px"}
              style={{ borderRadius: "30px", marginLeft: "50px" }}
            />

            <input
              type="file"
              id="file-input"
              accept=".jpg,.jpeg,.png"
              onChange={handleChange}
              style={{ display: "none" }}
            ></input>
            <label htmlFor="file-input" className="upload-icon">
              <img
                src={upload}
                alt="subir archivo"
                width={"30px"}
                height={"30px"}
              />
            </label>
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <img
                src={image1}
                alt="cargando imagen"
                width={"130px"}
                height={"150px"}
                style={{ borderRadius: "30px" }}
              />

              <input
                type="file"
                id="file-input1"
                accept=".jpg,.jpeg,.png"
                onChange={handleChange1}
                style={{ display: "none" }}
              ></input>
              <label htmlFor="file-input1" className="upload-icon">
                <img
                  src={upload}
                  alt="subir archivo"
                  width={"15px"}
                  height={"15px"}
                />
              </label>
            </div>
            <div>
              <img
                src={image2}
                alt="cargando imagen"
                width={"130px"}
                height={"150px"}
                style={{ borderRadius: "30px" }}
              />

              <input
                type="file"
                id="file-input2"
                accept=".jpg,.jpeg,.png"
                onChange={handleChange2}
                style={{ display: "none" }}
              ></input>
              <label htmlFor="file-input2" className="upload-icon">
                <img
                  src={upload}
                  alt="subir archivo"
                  width={"15px"}
                  height={"15px"}
                />
              </label>
            </div>
            <div>
              <img
                src={image3}
                alt="cargando imagen"
                width={"130px"}
                height={"150px"}
                style={{ borderRadius: "30px" }}
              />

              <input
                type="file"
                id="file-input3"
                accept=".jpg,.jpeg,.png"
                onChange={handleChange3}
                style={{ display: "none" }}
              ></input>
              <label htmlFor="file-input3" className="upload-icon">
                <img
                  src={upload}
                  alt="subir archivo"
                  width={"15px"}
                  height={"15px"}
                />
              </label>
            </div>
          </div>
        </Col>

        <Col className="cuentanos">
          <div style={{ marginTop: "10px" }}>
            <h2>Cuentanos más de ti</h2>
            <textarea
              name="text"
              id="tex1"
              cols="40" // Ajusta el número de columnas
              rows="15" // Ajusta el número de filas
              style={{ width: "100%" }}
              onChange={handleAboutChange}
            ></textarea>
          </div>
        </Col>
      </Row>
      {registroExitoso && (
        <div className="mensaje-flotante">
          <Result
            status="success"
            title="Felicidades! Tu registro fue exitoso!"
            subTitle="Ahora podras comensar a disfrutar de lo mejor de nuestra comunidad."
            extra={[
              <Button type="primary" key="console">
                Cerrar
              </Button>,
            ]}
          />
        </div>
      )}

      <div className="botones-container">
        <Button type="primary" onClick={handleGoBack}>
          Volver
        </Button>
        <Button
          type="primary"
          disabled={image === URL_DEFAULT}
          onClick={handleRegister}
        >
          Registrarse
        </Button>
      </div>
    </div>
  );
}

export default FotoAmigo;
