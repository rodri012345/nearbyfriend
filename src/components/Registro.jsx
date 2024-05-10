import React from 'react';
import "./Registro.css";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space, message, Col, Row, Upload, InputNumber } from "antd";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf';




import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;



function Registro() {

    const [form] = Form.useForm();

    const onFinish = async (values) => {

        const dob = values.dob ? values.dob.toDate() : null;
        delete values.dob;

        if (dob) {
            values.dob = dob;
        }

        const formData = {
            nombre: values.nombre,
            apellido: values.apellido,
            correo: values.correo,
            contraseña: values.contraseña,
            confirmarContraseña: values.confirmarContraseña,
            genero: values.genero,
            dob: values.dob,
            departamento: values.departamento,
            telefono: values.telefono,
            agreement: values.agreement,
            hobbies: values.hobbies || []
        };
        localStorage.setItem('formData', JSON.stringify(values));
      
        window.location.href = '/SubirFotos';
        console.log({ formData })
    };

    function disabledDate(current) {
        
        const april2006 = new Date('2006-04-19');
       
        return current && current > april2006;
    }


    return (
        <div className="Registro">

            <header className="Registro-header">
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
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
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
                                        {
                                            pattern: /^(?=.*[A-Z])(?=.*\d).+$/,
                                            message: "La contraseña debe contener al menos una letra mayúscula y un número"
                                        }
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
                                label="Feha de Nacimiento"
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
                                    disabledDate={disabledDate}
                                    format="DD/MM/YYYY"
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
                                    
                                    {
                                        validator: (_, value) => {
                                            if (!value) {
                                                return Promise.resolve();
                                            }
                                            if (!Number.isInteger(value)) {
                                                return Promise.reject(new Error('Ingrese un número de teléfono válido'));
                                            }
                                            if (value < 0) {
                                                return Promise.reject(new Error('Ingrese un número de teléfono válido'));
                                            }
                                            const phoneNumber = value.toString();
                                            if (phoneNumber.length < 7 || phoneNumber.length > 10) {
                                                return Promise.reject(new Error('El número de teléfono debe tener entre 7 y 10 dígitos'));
                                            }
                                            return Promise.resolve();
                                        },
                                    },
                                ]}
                            >
                                <InputNumber style={{ width: '100%' }} placeholder='Escriba su Telefono' />
                            </Form.Item>



                            
                        </Col>
                        <Col span={12}>

                            <h2>Hobbies</h2>
                            <Form.Item
                                name="hobbies"
                                label=""
                                wrapperCol={{ offset: 2, span: 24 }}
                                className="hobbies-container"
                                rules={[
                                    {
                                        required: true,
                                        message: "Por favor seleccione al menos un hobby",
                                    },
                                ]}
                            >
                                <Checkbox.Group style={{ width: '100%' }} >
                                    <div style={{ textAlign: 'center' }}>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Cantar">Cantar</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Bailar">Bailar</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Comer">Comer</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Ver películas">películas</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Cine">Cine</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Leer">Leer</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Pasear">Pasear</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Pintar">Pintar</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Arte">Arte</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Futbol">Futbol</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Viajes">Viajes</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Dibujar">Dibujar</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Musica">Musica</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Mascotas">Mascotas</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Escribir">Escribir</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Anime">Anime</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Estudiar">Estudiar</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Autos">Autos</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Futbol">Futbol</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Actuar">Actuar</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Estudiar">Estudiar</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Conciertos">Conciertos</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Nadar">Nadar</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Fiestas">Fiestas</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Coleccionar">Coleccionar</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Negocios">Negocios</Checkbox>
                                        <Checkbox style={{ width: '33%', marginBottom: '20px' }} value="Trabajo">Trabajo</Checkbox>
                                    </div>
                                </Checkbox.Group>
                            </Form.Item>

                        </Col>
                    </Row>
                    <Form.Item
                                name="agreement"
                                wrapperCol={{ offset: 7, span: 24 }}
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
                                <Checkbox  >
                                    {" "}
                                    Aceptar nuestros, <a href="#">Terminos y condiciones</a>
                                </Checkbox>
                            </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 8 }} >
                        <Button block type="primary" htmlType="submit">
                            Siguiente
                        </Button>
                    </Form.Item>
                </Form>
            </header>
        </div>
    );
}

export default Registro;