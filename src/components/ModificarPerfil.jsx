import "./ModificarPerfil.css";
import { Image, Form, Button, Input } from "antd";
import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";
import ModificarCorreo from "./ActualizarCorreo";
import ModificarContraseña from "./ActualizarContrasena";
import ModificarTelefono from "./ActualizarTelefono";
import ModificarHobbies from "./ActualizarHobbies";
import ModificarDescripcion from "./ActualizarDescripcion";
import ModificarFoto from "./ActualizarFoto";

const ModificarPerfil = ({ amigoId }) => {
    const [amigo, setAmigo] = useState(null);
    useEffect(() => {
        const obtenerAmigo = async () => {
            try {
                const amigoRef = doc(db, "amigos", amigoId);
                const docSnap = await getDoc(amigoRef);
                if (docSnap.exists()) {
                    setAmigo({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No se encontró el amigo.");
                }
            } catch (error) {
                console.error("Error al obtener el amigo:", error);
            }
            console.log(amigo);
        };

        obtenerAmigo();
    }, []);

    return (
        <div className="perfil-container">
            {amigo && (
                <div className="ModificarContainer">
                    <div className="FotosContainer">
                        <div className="fila">
                            {" "}
                            {/*este contenido tendra la edicion de imagenes */}
                            <div className="columna">
                                <Image
                                    width={200}
                                    height={200}
                                    src={amigo.imageURL}
                                    alt="Foto del amigo"
                                />
                                <ModificarFoto amigoId={amigo.id} />
                            </div>
                            <div className="columna">
                                <Image
                                    width={200}
                                    height={200}
                                    src={amigo.imageURL1}
                                    alt="Foto del amigo"
                                />
                                <button className="mon-n">
                                    Actualizar Imagen
                                </button>
                            </div>
                            <div className="columna">
                                <Image
                                    width={200}
                                    height={200}
                                    src={amigo.imageURL2}
                                    alt="Foto del amigo"
                                />
                                <button className="mon-n">
                                    Actualizar Imagen
                                </button>
                            </div>
                            <div className="columna">
                                <Image
                                    width={200}
                                    height={200}
                                    src={amigo.imageURL3}
                                    alt="Foto del amigo"
                                />
                                <button className="mon-n">
                                    Actualizar Imagen
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="perfil-content">
                        <div className=" perfil-izq">
                            
                                <Form>
                                    <Form.Item label="Correo">
                                        <Input
                                            type="email"
                                            placeholder={amigo.correo}
                                            readOnly
                                            style={{width:'350px'}}
                                        />

                                        
                                            <ModificarCorreo
                                                amigoId={amigo.id}
                                            />
                                        
                                    </Form.Item>
                                </Form>
                            
                            
                                <Form>
                                    <Form.Item label="Contraseña">
                                        <Input
                                            type="password"
                                            placeholder={amigo.contraseña}
                                            readOnly
                                            style={{width:'350px'}}
                                        />

                                        
                                            <ModificarContraseña
                                                amigoId={amigo.id}
                                            />
                                        
                                    </Form.Item>
                                </Form>
                            
                            
                                <Form>
                                    <Form.Item
                                        label="Teléfono"
                                        labelAlign="center"
                                    >
                                        <Input
                                            type="int"
                                            placeholder={amigo.telefono}
                                            readOnly
                                            style={{width:'350px'}}
                                        />

                                        
                                            <ModificarTelefono
                                                
                                                amigoId={amigo.id}
                                                
                                            />
                                        
                                    </Form.Item>
                                </Form>
                            
                        </div>

                        <div className="perfil-der">
                            <div className="Row">
                                <div className="HDContainer">
                                    <h2>Hobbies</h2>
                                    <p>{amigo.hobbies[0]}</p>
                                    <p>{amigo.hobbies[1]}</p>
                                    <p>{amigo.hobbies[2]}</p>
                                    <p>{amigo.hobbies[3]}</p>

                                    <ModificarHobbies amigoId={amigo.id} />
                                </div>

                                <div className="HDContainer">
                                    <h2>Descripción</h2>
                                    <textarea
                                        name="Descripcion"
                                        rows={"5"}
                                        cols={"25"}
                                        readOnly
                                        placeholder={amigo.aboutText}
                                    ></textarea>
                                    <ModificarDescripcion amigoId={amigo.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            ;
        </div>
    );
};

export default ModificarPerfil;
