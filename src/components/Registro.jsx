import React, { useState, useRef } from 'react';
import "./Registro.css";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space, message, Col, Row, Upload, InputNumber } from "antd";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

function Registro() {

    const [form] = Form.useForm();
    const [imageUploaded, setImageUploaded] = useState(false);

    const imageUploadRef = useRef(null);

    const handleImageUpload = async () => {
        if (imageUploadRef.current.fileList.length === 0) {
            message.error('Debes seleccionar una imagen para continuar.');
            return;
        }

        const file = imageUploadRef.current.fileList[0];
        const fileName = `<span class="math-inline">\{Math\.random\(\)\.toString\(36\)\}\-</span>{file.name}`;

        try {
            const imageRef = storageRef.child(`images/${fileName}`);
            await imageRef.put(file);
            const downloadURL = await imageRef.getDownloadURL();
            setImageUploaded(true);
            console.log('Image uploaded:', downloadURL);
        } catch (error) {
            console.error('Error uploading image:', error);
            message.error('Hubo un error al subir la imagen.');
        }
    };

    const handleNext = () => {
        form.validateFields(['aboutMe'], (errorInfo) => {
            if (!errorInfo) {
                setImageUploaded(true);
            }
        });
    };

    const onFinish = async (values) => {

        const dob = values.dob ? values.dob.toDate() : null;
        delete values.dob;

        if (dob) {
            values.dob = dob;
        }

        const hobbies = values.hobbies || [];
        console.log(hobbies);

        const formData = {
            nombre: values.nombre,
            apellido: values.apellido,
            correo: values.correo,
            contraseña: values.contraseña,
            confirmarContraseña: values.confirmarContraseña,
            genero: values.genero,
            dob: values.dob,
            agreement: values.agreement,
            imagenPerfil: imageUploadRef.current.fileList[0] ? imageUploadRef.current.fileList[0].name : "",
        };

        

        try {
            { if (hobbies.length < 3) {
                message.error('Debe seleccionar al menos tres hobbies para registrarse.');
                return;
            }
        }
            const docRef = await addDoc(collection(db, 'clientes'), { formData, hobbies });
            console.log('Documento agregado con ID: ', docRef.id);
            message.success('¡Registro exitoso!');
            form.resetFields();
            console.log(hobbies);
        } catch (error) {
            console.error('Error al agregar documento: ', error);
            message.error('Hubo un error al registrar el cliente. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className="Registro">
            <h1 className='titulo'>Registro Cliente</h1>
            <header className="Registro-header">
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <Form
                            autoComplete="off"
                            labelCol={{ span: 10 }}
                            wrapperCol={{ span: 14 }}
                            form={form}
                            onFinish={onFinish}
                            onFinishFailed={(error) => {
                                console.log({ error });
                            }}
                        >
                            <Form.Item
                                name="nombre"
                                label="Nombre"
                                rules={[
                                    {
                                        required: true,
                                        message: "Por favor Ingrese su Nombre",
                                    },
                                    { whitespace: true },
                                    { min: 3, message: "El nombre debe tener al menos 3 caracteres" },
                                    { max: 30, message: "El nombre no puede tener más de 30 caracteres" },
                                    { pattern: /^[a-zA-Z\s]*$/, message: "El nombre solo puede contener letras del alfabeto" },
                                ]}
                                hasFeedback
                            >
                                <Input placeholder="Escriba su Nombre" />
                            </Form.Item>

                            <Form.Item
                                name="apellido"
                                label="Apellido"
                                rules={[
                                    {
                                        required: true,
                                        message: "Por favor Ingrese su Apellido",
                                    },
                                    { whitespace: true },
                                    { min: 3, message: "El nombre debe tener al menos 3 caracteres" },
                                    { max: 30, message: "El nombre no puede tener más de 30 caracteres" },
                                    { pattern: /^[a-zA-Z\s]*$/, message: "El nombre solo puede contener letras del alfabeto" },
                                ]}
                                hasFeedback
                            >
                                <Input placeholder="Escriba su Apellido" />
                            </Form.Item>

                            <Form.Item
                                name="contraseña"
                                label="Contraseña"
                                rules={[
                                    {
                                        required: true, message: "Por Favor Ingrese su Contraseña"
                                    },
                                    { min: 6, message: "Debe de tener mas de 6 caracteres" },
                                    /*{
                                        validator: (_, value) =>
                                            value && value.includes("A")
                                                ? Promise.resolve()
                                                : Promise.reject("Contraseña no Valida"),
                                    },*/
                                ]}
                                hasFeedback
                            >
                                <Input.Password placeholder="Escriba su Contraseña" />
                            </Form.Item>

                            <Form.Item
                                name="confirmarContraseña"
                                label="Confirme Contraseña"
                                dependencies={["contraseña"]}
                                rules={[
                                    {
                                        required: true, message: "Debe confirmar su Contraseña"
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue("contraseña") === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(
                                                "Las contraseñas no coinciden."
                                            );
                                        },
                                    }),
                                ]}
                                hasFeedback
                            >
                                <Input.Password placeholder="Confirme su Contraseña" />
                            </Form.Item>


                            <Form.Item
                                name="genero"
                                label="Genero"
                                rules={[{
                                    required: true,
                                    message: "Por favor Seleccione un Genero"
                                }]}
                            >
                                <Select placeholder="Seleccione su Genero">
                                    <Select.Option value="masculino">Masculino</Select.Option>
                                    <Select.Option value="femenino">Femenino</Select.Option>
                                    <Select.Option value="otro">Otro</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="departamento"
                                label="Departamento"
                                rules={[{
                                    required: true,
                                    message: "Por favor Seleccione un Departamento"
                                }]}
                            >
                                <Select placeholder="Seleccione su Departamento">
                                    <Select.Option value="la paz">La Paz</Select.Option>
                                    <Select.Option value="santa cruz">Santa Cruz</Select.Option>
                                    <Select.Option value="Cochabamba">Cochabamba</Select.Option>
                                    <Select.Option value="oruro">Oruro</Select.Option>
                                    <Select.Option value="sucre">Sucre</Select.Option>
                                    <Select.Option value="tarija">Tarija</Select.Option>
                                    <Select.Option value="potosi">Potosi</Select.Option>
                                    <Select.Option value="beni">Beni</Select.Option>
                                    <Select.Option value="pando">Pando</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="dob"
                                label="Fecha de Nacimiento"
                                rules={[
                                    {
                                        required: true,
                                        message: "Por favor Ingrese su fecha de nacimiento",
                                    },
                                ]}
                                hasFeedback
                            >
                                <DatePicker
                                    style={{ width: "100%" }}
                                    picker="date"
                                    placeholder="Seleccione una fecha"
                                />
                            </Form.Item>

                            <Form.Item
                                name="correo"
                                label="Correo"
                                rules={[
                                    {
                                        required: true,
                                        message: "Por favor Ingrese su Correo",
                                    },
                                    { type: "email", message: "Por favor Ingrese un Correo Valido" },
                                    {
                                        validator: (_, value) =>
                                            value && value.includes(".")
                                                ? Promise.resolve()
                                                : Promise.reject(""),
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input placeholder="Escriba su Correo" />
                            </Form.Item>



                            <Form.Item
                                name="telefono"
                                label="Telefono"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor Ingrese su Telefono',
                                    },
                                    {max: 8, message: "El telefono no puede tener más de 8 caracteres" },
                                    {
                                        validator: (_, value) => {
                                            if (value && !Number.isInteger(value)) {
                                                return Promise.reject(new Error('Ingrese un numero de telefono Valido'));
                                            }
                                            if (value && value <= 0) {
                                                return Promise.reject(new Error('Ingrese un numero de telefono Valido'));
                                            }
                                            return Promise.resolve();
                                        },
                                    },
                                ]}
                            >
                                <InputNumber style={{ width: '100%' }} placeholder='Escriba su Telefono' />
                            </Form.Item>



                            <Form.Item
                                name="agreement"
                                wrapperCol={{ span: 24 }}
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value
                                                ? Promise.resolve()
                                                : Promise.reject(
                                                    "Para continuar, debe de aceptar los terminos y condiciones"
                                                ),
                                    },
                                ]}
                            >
                                <Checkbox>
                                    {" "}
                                    Aceptar nuestros, <a href="#">Terminos y condiciones</a>
                                </Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 10, span: 14 }}>
                                <Button block type="primary" htmlType="submit">
                                    Registrarse
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>

                        <div className="hobbies-list-container">
                            <div className="hobbies-list">
                                <h2>Hobbies</h2>
                                <Checkbox.Group name="hobbies" defaultValue={[]}>
                                    <Checkbox value="Cantar">Cantar</Checkbox>
                                    <Checkbox value="Bailar">Bailar</Checkbox>
                                    <Checkbox value="Comer">Comer</Checkbox>
                                    <Checkbox value="Ver películas">películas</Checkbox>
                                    <Checkbox value="Cine">Cine</Checkbox>
                                    <Checkbox value="Leer">Leer</Checkbox>
                                    <Checkbox value="Pasear">Pasear</Checkbox>
                                    <Checkbox value="Pintar">Pintar</Checkbox>
                                    <Checkbox value="Arte">Arte</Checkbox>
                                    <Checkbox value="Futbol">Futbol</Checkbox>
                                    <Checkbox value="Viajes">Viajes</Checkbox>
                                    <Checkbox value="Dibujar">Dibujar</Checkbox>
                                    <Checkbox value="Musica">Musica</Checkbox>
                                    <Checkbox value="Mascotas">Mascotas</Checkbox>
                                    <Checkbox value="Escribir">Escribir</Checkbox>
                                    <Checkbox value="Anime">Anime</Checkbox>
                                    <Checkbox value="Estudiar">Estudiar</Checkbox>
                                    <Checkbox value="Autos">Autos</Checkbox>
                                </Checkbox.Group>
                            </div>
                        </div>
                        <div className="image-gallery">
                            <Form
                                labelCol={{ span: 5 }}
                                wrapperCol={{ span: 45 }}
                                layout="vertical"
                                style={{ maxWidth: 600 }}
                                
                            >
                                <Form.Item label="" name="aboutMe">
                                    <h2>Cuentanos Sobre Ti</h2>
                                    <TextArea rows={5} placeholder="Escribe sobre ti" />
                                    
                                </Form.Item>
                                <h2>Sube tu foto de perfil</h2>
                                
                                <Form.Item label="" valuePropName="fileList" getValueFromEvent={normFile}>
                                <Upload 
                                  action="src\components\amigo-img" 
                                  listType="picture-card"
                                  beforeUpload={(file) => {
                                  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                                  if (!isJpgOrPng) {
                                  message.error('Solo se permiten archivos JPG o PNG');
                                  return Upload.LIST_IGNORE;
                                  }
                                  return true; // continue upload
                                  }}
                                >
                            <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Subir Foto</div>
                            </button>
                            </Upload>
                            </Form.Item>

                                    

                            </Form >

                        </div>
                    </Col>
                </Row>
            </header>
        </div>
    );
}


export default Registro;