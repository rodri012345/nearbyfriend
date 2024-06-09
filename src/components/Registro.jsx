import React, { useState } from "react";
import "./Registro.css";
import {
    Form,
    Button,
    Checkbox,
    DatePicker,
    Input,
    Select,
    Space,
    message,
    Col,
    Row,
    Upload,
    InputNumber,
    Modal,
} from "antd";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";

import { PlusOutlined } from "@ant-design/icons";

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
            hobbies: values.hobbies || [],
        };
        localStorage.setItem("formData", JSON.stringify(values));

        window.location.href = "/SubirFotos";
        console.log({ formData });
    };

    function disabledDate(current) {
        const april2006 = new Date("2006-04-19");

        return current && current > april2006;
    }

    const [visible, setVisible] = useState(false);

    const mostrarTerminosCondiciones = () => {
        setVisible(true);
    };

    const cerrarModal = () => {
        setVisible(false);
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
                                    {
                                        min: 3,
                                        message:
                                            "El nombre debe tener al menos 3 caracteres",
                                    },
                                    {
                                        max: 30,
                                        message:
                                            "El nombre no puede tener más de 30 caracteres",
                                    },
                                    {
                                        pattern: /^[a-zA-Zñ\s]*$/,
                                        message:
                                            "El nombre solo puede contener letras del alfabeto",
                                    },
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
                                        message:
                                            "Por favor Ingrese su Apellido",
                                    },
                                    { whitespace: true },
                                    {
                                        min: 3,
                                        message:
                                            "El nombre debe tener al menos 3 caracteres",
                                    },
                                    {
                                        max: 30,
                                        message:
                                            "El nombre no puede tener más de 30 caracteres",
                                    },
                                    {
                                        pattern: /^[a-zA-Z\s]*$/,
                                        message:
                                            "El nombre solo puede contener letras del alfabeto",
                                    },
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
                                        required: true,
                                        message:
                                            "Por Favor Ingrese su Contraseña",
                                    },
                                    {
                                        min: 6,
                                        message:
                                            "Debe de tener mas de 6 caracteres",
                                    },
                                    /*{
                                        validator: (_, value) =>
                                            value && value.includes("A")
                                                ? Promise.resolve()
                                                : Promise.reject("Contraseña no Valida"),
                                    },*/
                                    {
                                        pattern: /^(?=.*[A-Z])(?=.*\d).+$/,
                                        message:
                                            "La contraseña debe contener al menos una letra mayúscula y un número",
                                    },
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
                                        required: true,
                                        message: "Debe confirmar su Contraseña",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (
                                                !value ||
                                                getFieldValue("contraseña") ===
                                                    value
                                            ) {
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
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Por favor Seleccione un Genero",
                                    },
                                ]}
                            >
                                <Select placeholder="Seleccione su Genero">
                                    <Select.Option value="masculino">
                                        Masculino
                                    </Select.Option>
                                    <Select.Option value="femenino">
                                        Femenino
                                    </Select.Option>
                                    <Select.Option value="otro">
                                        Otro
                                    </Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="departamento"
                                label="Departamento"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Por favor Seleccione un Departamento",
                                    },
                                ]}
                            >
                                <Select placeholder="Seleccione su Departamento">
                                    <Select.Option value="La Paz">
                                        La Paz
                                    </Select.Option>
                                    <Select.Option value="Santa Cruz">
                                        Santa Cruz
                                    </Select.Option>
                                    <Select.Option value="Cochabamba">
                                        Cochabamba
                                    </Select.Option>
                                    <Select.Option value="Oruro">
                                        Oruro
                                    </Select.Option>
                                    <Select.Option value="Sucre">
                                        Sucre
                                    </Select.Option>
                                    <Select.Option value="Tarija">
                                        Tarija
                                    </Select.Option>
                                    <Select.Option value="Potosi">
                                        Potosi
                                    </Select.Option>
                                    <Select.Option value="Beni">
                                        Beni
                                    </Select.Option>
                                    <Select.Option value="Pando">
                                        Pando
                                    </Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="dob"
                                label="Feha de Nacimiento"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Por favor Ingrese su fecha de nacimiento",
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
                                    {
                                        type: "email",
                                        message:
                                            "Por favor Ingrese un Correo Valido",
                                    },
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
                                        message:
                                            "Por favor Ingrese su Telefono",
                                    },

                                    {
                                        validator: (_, value) => {
                                            if (!value) {
                                                return Promise.resolve();
                                            }
                                            if (!Number.isInteger(value)) {
                                                return Promise.reject(
                                                    new Error(
                                                        "Ingrese un número de teléfono válido"
                                                    )
                                                );
                                            }
                                            if (value < 0) {
                                                return Promise.reject(
                                                    new Error(
                                                        "Ingrese un número de teléfono válido"
                                                    )
                                                );
                                            }
                                            const phoneNumber =
                                                value.toString();
                                            if (
                                                phoneNumber.length < 7 ||
                                                phoneNumber.length > 10
                                            ) {
                                                return Promise.reject(
                                                    new Error(
                                                        "El número de teléfono debe tener entre 7 y 10 dígitos"
                                                    )
                                                );
                                            }
                                            return Promise.resolve();
                                        },
                                    },
                                ]}
                            >
                                <InputNumber
                                    style={{ width: "100%" }}
                                    placeholder="Escriba su Telefono"
                                />
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
                                        message:
                                            "Por favor seleccione al menos un hobby",
                                    },
                                ]}
                            >
                                <Checkbox.Group style={{ width: "100%" }}>
                                    <div style={{ textAlign: "center" }}>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Cantar"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🎤
                                            </span>
                                            Cantar
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Bailar"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                💃
                                            </span>
                                            Bailar
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Comer"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🍕
                                            </span>
                                            Comer
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Ver peliculas"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                📺
                                            </span>
                                            películas
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Cine"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🎥
                                            </span>
                                            Cine
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Leer"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                📖
                                            </span>
                                            Leer
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Pasear"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🚶
                                            </span>
                                            Pasear
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Pintar"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🎨
                                            </span>
                                            Pintar
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Arte"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                👩‍🎨
                                            </span>
                                            Arte
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Futbol"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                ⚽
                                            </span>
                                            Futbol
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Viajes"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🛫
                                            </span>
                                            Viajes
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Juegos"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🎮
                                            </span>
                                            Juegos
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Musica"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🎶
                                            </span>
                                            Musica
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Mascotas"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🐕
                                            </span>
                                            Mascotas
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Escribir"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                ✍️
                                            </span>
                                            Escribir
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Anime"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🐲
                                            </span>
                                            Anime
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Estudiar"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                📚
                                            </span>
                                            Estudiar
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Autos"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🚗
                                            </span>
                                            Autos
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Gim"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🏋️‍♂️
                                            </span>
                                            Gim
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Actuar"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🤹
                                            </span>
                                            Actuar
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Cocinar"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                👨‍🍳
                                            </span>
                                            Cocinar
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Conciertos"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🎆
                                            </span>
                                            Conciertos
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Nadar"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🏊‍♀️
                                            </span>
                                            Nadar
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Fiestas"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                🎉
                                            </span>
                                            Fiestas
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Coleccionar"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "17px" }}
                                            >
                                                🎴
                                            </span>
                                            Coleccionar
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Negocios"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                💼
                                            </span>
                                            Negocios
                                        </Checkbox>
                                        <Checkbox
                                            style={{
                                                width: "33%",
                                                marginBottom: "20px",
                                                fontSize: "15px",
                                            }}
                                            value="Trabajo"
                                        >
                                            <span
                                                role="img"
                                                aria-label="smiley"
                                                style={{ fontSize: "20px" }}
                                            >
                                                👷‍♂️
                                            </span>
                                            Trabajo
                                        </Checkbox>
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
                        <Checkbox>
                            {" "}
                            Aceptar nuestros,{" "}
                            <a href="#" onClick={mostrarTerminosCondiciones}>
                                Terminos y condiciones
                            </a>
                            <Modal
                                visible={visible}
                                onCancel={cerrarModal}
                                footer={null}
                            >
                                <h1>Términos y Condiciones de Uso</h1>
                                <p>
                                    Por favor, lee cuidadosamente estos términos
                                    y condiciones de uso antes de utilizar
                                    nuestra plataforma de alquiler de amigos.
                                </p>
                                <h2>
                                    1.Aceptación de los Términos y Condiciones
                                </h2>
                                <p>
                                    Al acceder y utilizar nuestra plataforma de
                                    alquiler de amigos, aceptas cumplir y estar
                                    sujeto a estos términos y condiciones de
                                    uso. Si no estás de acuerdo con alguno de
                                    estos términos, no utilices nuestra
                                    plataforma.
                                </p>
                                <h2>2.Descripción del Servicio </h2>
                                <p>
                                    {" "}
                                    Nuestra plataforma de alquiler de amigos
                                    permite a los usuarios buscar, seleccionar y
                                    alquilar amigos para diversas actividades y
                                    eventos sociales. No nos hacemos
                                    responsables del comportamiento de los
                                    amigos alquilados o de los usuarios de la
                                    plataforma.
                                </p>
                                <h2>3.Registro y Cuenta de Usuario</h2>
                                <p>
                                    Para utilizar nuestra plataforma, es posible
                                    que debas registrarte y crear una cuenta de
                                    usuario. Es tu responsabilidad mantener la
                                    confidencialidad de tu contraseña y no
                                    compartir tu cuenta con terceros.
                                </p>
                                <h2>4.Condiciones de Alquiler</h2>
                                <p>
                                    Al alquilar un amigo a través de nuestra
                                    plataforma, aceptas las condiciones
                                    establecidas por el amigo, incluidos los
                                    precios, horarios y actividades disponibles.
                                    Nos reservamos el derecho de cancelar o
                                    rechazar cualquier alquiler que considere
                                    inapropiado o en violación de nuestras
                                    políticas.
                                </p>
                                <h2>5.Descripción del Servicio </h2>
                                <p>
                                    El pago por los servicios de alquiler de
                                    amigos se realizará a través de nuestra
                                    plataforma y estará sujeto a nuestras
                                    políticas de pago. Nos reservamos el derecho
                                    de modificar los precios y los términos{" "}
                                </p>
                                <h2>6.Cancelación y Reembolsos</h2>
                                <p>
                                    Las políticas de cancelación y reembolso
                                    estarán determinadas por el amigo alquilado
                                    y se aplicarán de acuerdo con sus términos y
                                    condiciones. Nosotros no garantizamos
                                    reembolsos y no somos responsables de las
                                    transacciones entre usuarios y amigos
                                    alquilados.
                                </p>
                                <h2>7.Responsabilidad y Seguridad</h2>
                                <p>
                                    Tanto los usuarios como los amigos
                                    alquilados son responsables de su propio
                                    comportamiento y seguridad durante el tiempo
                                    que pasen juntos. No nos hacemos
                                    responsables de ningún accidente, lesión o
                                    daño que ocurra durante el alquiler de un
                                    amigo.
                                </p>
                                <h2>8.Propiedad Intelectual </h2>
                                <p>
                                    Todo el contenido y los materiales de
                                    nuestra plataforma, incluidos los textos,
                                    imágenes y logotipos, están protegidos por
                                    derechos de autor y otros derechos de
                                    propiedad intelectual. No puedes copiar,
                                    modificar o distribuir nuestro contenido sin
                                    nuestro consentimiento.
                                </p>
                                <h2>
                                    9.Modificaciones de los Términos y
                                    Condiciones
                                </h2>
                                <p>
                                    Nos reservamos el derecho de modificar estos
                                    términos y condiciones en cualquier momento.
                                    Se te notificará de cualquier cambio a
                                    través de nuestra plataforma. El uso
                                    continuado de nuestra plataforma después de
                                    dichas modificaciones constituirá tu
                                    aceptación de los nuevos términos y
                                    condiciones.
                                </p>
                            </Modal>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
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
