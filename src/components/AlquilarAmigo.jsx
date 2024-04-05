import React, { useState } from 'react';
import "./AlquilarAmigo.css";
import { Form, Button, Checkbox, DatePicker, Input, Select, InputNumber, Space, message, Col, Row, Upload, Modal } from "antd";
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

function AlquilarAmigo() {
    const [form] = Form.useForm();
    const [modalVisible, setModalVisible] = useState(false);

    const onFinish = async (values) => {
        // Lógica para guardar la información en la base de datos
    };

    const handleAlquilarClick = () => {
        setModalVisible(true);
    };

    const handleModalCancel = () => {
        setModalVisible(false);
    };

    return (
        <div className="AlquilarAmigo">
            <h1 className='titulo'>Alquilar Amigo</h1>
            <header className="AlquilarAmigo-header">
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        {/* Recuadro para visualizar los datos personales del amigo */}
                        <div className="datos-personales">
                            <h2>Datos Personales del Amigo</h2>
                            {/* Aquí se mostrarán los datos personales del amigo */}
                        </div>
                    </Col>
                    <Col span={12}>
                        {/* Recuadro para visualizar los hobbies del amigo */}
                        <div className="hobbies-amigo">
                            <h2>Hobbies del Amigo</h2>
                            {/* Aquí se mostrarán los hobbies seleccionados del amigo */}
                        </div>
                    </Col>
                </Row>
                {/* Botón para alquilar al amigo */}
                <Button type="primary" onClick={handleAlquilarClick}>Alquilar Amigo</Button>
                {/* Ventana emergente para registrar la cita */}
                <Modal
                    title="Registrar Cita"
                    visible={modalVisible}
                    onCancel={handleModalCancel}
                    footer={[
                        <Button key="cancelar" onClick={handleModalCancel}>
                            Cancelar
                        </Button>,
                        <Button key="guardar" type="primary" onClick={onFinish}>
                            Guardar
                        </Button>,
                    ]}
                >
                    <Form
                        form={form}
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                    >
                        <Form.Item
    name="fechaHora"
    label="Fecha y Hora"
    rules={[
        {
            required: true,
            message: "Por favor selecciona la fecha y la hora",
        },
    ]}
    hasFeedback
>
    <DatePicker
        style={{ width: "100%" }}
        showTime
        picker="datetime"
        format="YYYY-MM-DD HH:mm"
        placeholder="Selecciona la fecha y la hora"
    /> 
                        </Form.Item>


                        <Form.Item
                            label="Duración"
                            name="duracion"
                            rules={[{ required: true, message: 'Por favor ingresa la duración' }]}
                        >
                            <InputNumber min={0} />
                        </Form.Item>
                        <Form.Item
                            label="Lugar de Encuentro"
                            name="lugarEncuentro"
                            rules={[{ required: true, message: 'Por favor ingresa el lugar de encuentro' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Detalle del Evento"
                            name="detalleEvento"
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                    </Form>
                </Modal>
            </header>
        </div>
    );
}

export default AlquilarAmigo;
