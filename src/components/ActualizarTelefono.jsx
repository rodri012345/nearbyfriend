import React, { useState } from "react";
import { Form, Input, Button, Modal, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";
import "./Alquilar.css";

const ModificarTelefono = ({ amigoId }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const abrirModal = () => {
        setVisible(true);
    };

    const cerrarModal = () => {
        setVisible(false);
    };

    const onFinish = async (values) => {
        setLoading(true);
        const amigoRef = doc(db, "amigos", amigoId);

        try {
            await updateDoc(amigoRef, {
                telefono: values.nuevoTelefono,
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
                className="mon-n"
            />{" "}
            {/* Botón de editar con icono */}
            <Modal
                title="Modificar Telefono"
                visible={visible}
                onCancel={cerrarModal}
                footer={null}
            >
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        name="nuevoTelefono"
                        label="Nuevo Telefono"
                        rules={[
                            {
                                required: true,
                                message: "Por favor Ingrese su Telefono",
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
                                    const phoneNumber = value.toString();
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
                        <Input.Number placeholder="Escriba su nuevo telefono" />
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

export default ModificarTelefono;
