import React, { useState } from "react";
import { Form, Input, Button, Modal, message, Checkbox } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";

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
                                    }}
                                    value="Cantar"
                                >
                                    Cantar
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Bailar"
                                >
                                    Bailar
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Comer"
                                >
                                    Comer
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Ver películas"
                                >
                                    películas
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Cine"
                                >
                                    Cine
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Leer"
                                >
                                    Leer
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Pasear"
                                >
                                    Pasear
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Pintar"
                                >
                                    Pintar
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Arte"
                                >
                                    Arte
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Viajes"
                                >
                                    Viajes
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Dibujar"
                                >
                                    Dibujar
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Musica"
                                >
                                    Musica
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Mascotas"
                                >
                                    Mascotas
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Escribir"
                                >
                                    Escribir
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Anime"
                                >
                                    Anime
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Estudiar"
                                >
                                    Estudiar
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Autos"
                                >
                                    Autos
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Futbol"
                                >
                                    Futbol
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Actuar"
                                >
                                    Actuar
                                </Checkbox>

                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Conciertos"
                                >
                                    Conciertos
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Nadar"
                                >
                                    Nadar
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Fiestas"
                                >
                                    Fiestas
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Coleccionar"
                                >
                                    Coleccionar
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Negocios"
                                >
                                    Negocios
                                </Checkbox>
                                <Checkbox
                                    style={{
                                        width: "33%",
                                        marginBottom: "20px",
                                    }}
                                    value="Trabajo"
                                >
                                    Trabajo
                                </Checkbox>
                            </div>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                        >
                            Guardar Cambios
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default ModificarHobbies;
