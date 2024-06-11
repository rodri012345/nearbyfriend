import React, { useState } from "react";
import { Form, Input, Button, Modal, message, Checkbox } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";
import "./EstilosMod.css";

const ModificarHobbies = ({ amigoId }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const abrirModal = () => {
        setVisible(true);
    };

    const cerrarModal = () => {
        setVisible(false);
        form.resetFields();
    };

    const onFinish = async (values) => {
        setLoading(true);
        const amigoRef = doc(db, "amigos", amigoId);

        try {
            await updateDoc(amigoRef, {
                hobbies: values.nuevosHobbies || [],
            });

            message.success("Datos de amigo actualizados con éxito");
            cerrarModal();
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            message.error(
                "Error al actualizar datos de amigo: " + error.message
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Button
                type="default"
                onClick={abrirModal}
                icon={<EditOutlined />}
                style = {{backgroundColor:'#0056b3'}}
            />{" "}
            {/* Botón de editar con icono */}
            <Modal
                title="Modificar Hobbies"
                visible={visible}
                onCancel={cerrarModal}
                footer={null}
            >
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        name="nuevosHobbies"
                        label=""
                        //wrapperCol={{ offset: 2, span: 24 }}
                        //className="hobbies-container"
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
                    <Form.Item className="modal-style">
                        <button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            className="mon-n"
                        >
                            Guardar Cambios
                        </button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default ModificarHobbies;
