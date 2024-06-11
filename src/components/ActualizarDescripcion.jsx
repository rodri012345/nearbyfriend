import React, { useState } from "react";
import { Form, Input, Button, Modal, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";
import "./EstilosMod.css";

const ModificarDescripcion = ({ amigoId }) => {
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
                aboutText: values.nuevaDescripcion,
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
                title="Modificar Descripcion"
                visible={visible}
                onCancel={cerrarModal}
                footer={null}
            >
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        name="nuevaDescripcion"
                        label="Nueva Descripcion"
                        rules={[
                            {
                                required: true,
                                message:
                                    "Por favor ingresa la nueva descripcion",
                            },
                            { whitespace: true },
                            {
                                min: 30,
                                message:
                                    "La Descripcion debe tener al menos 30 caracteres",
                            },
                            {
                                max: 150,
                                message:
                                    "La Descripcion no puede tener más de 150 caracteres",
                            },
                        ]}
                    >
                        <Input placeholder="Escriba su nueva Descripcion" />
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

export default ModificarDescripcion;
