import React, { useState, useEffect } from "react";
import { Col, Row, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import avatarDefault from '../img/avatar2.jpg';
import upload from "../img/subir.png"
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf';
import {  message } from "antd";
import "./SubirFoto.css";




function SubirFoto() {

    const URL_DEFAULT = avatarDefault;
    const [image, setImage] = useState(URL_DEFAULT);
    const [aboutText, setAboutText] = useState('');

    useEffect(() => {
        
        const formData = JSON.parse(localStorage.getItem('formData'));
        
        if (aboutText.trim() !== '') {
            guardarDatosEnFirebase(formData);
        }
    }, [aboutText]);


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

    const handleAboutChange = (e) => {
        setAboutText(e.target.value);
    };
    
    
    const handleRegister = () => {
        if (!aboutText.trim()) {
            message.error("Por favor, completa la sección 'Cuentanos más de ti'");
            return;
        }
        const formData = JSON.parse(localStorage.getItem('formData'));
        if (!formData) {
            console.error("Error: formData es nulo.");
            return;
        }
        formData.imageURL = image; 
        guardarDatosEnFirebase(formData);
    };
    

    const guardarDatosEnFirebase = async (formData) => {
        try {
            
            formData.aboutText = aboutText;
            const docRef = await addDoc(collection(db, "clientes"), formData);
            console.log("Documento guardado con ID: ", docRef.id);
            
            localStorage.removeItem('formData');
        } catch (e) {
            console.error("Error al agregar documento: ", e);
        }
    };
    const handleGoBack = () => {
        
        window.location.href = '/RegistroCliente';
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Registrarse</h1>
            <Row gutter={[110, 10]} style={{ justifyContent: "center" }}>
                <Col>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>Añadir foto de perfil </h2>
                        <img
                            src={image}
                            alt="cargando imagen"
                            width={"300px"}
                            height={"320px"}
                            style={{ borderRadius: "30px" }}
                        />
                        
                            <input
                            type="file"
                            id = 'file-input'
                            accept=".jpg,.jpeg,.png"
                            onChange={handleChange}
                            style={{display:'none'}}
                            ></input>
                            <label htmlFor="file-input" className="upload-icon">
                                <img src={upload} alt="subir archivo" width={'30px'} height={'30px'} />
                            </label>
                        
                    </div>
                    
                </Col>

                <Col className="cuentanos">
                    <div style={{ marginTop: "10px", }}>
                        <h2>Cuentanos más de ti</h2>
                        <textarea
                            name="text"
                            id="tex1"
                            cols="30"
                            rows="10"
                            style={{ width: "100%" }}
                            onChange={handleAboutChange}
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
                <Button type="primary" onClick={handleGoBack}>volver atras</Button>
                <Button type="primary" disabled={image === URL_DEFAULT} onClick={handleRegister}>
                    Registrarse
                </Button>
            </div>
        </div>
    );
}

export default SubirFoto
