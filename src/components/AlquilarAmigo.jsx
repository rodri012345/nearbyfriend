import React, { useState, useEffect } from 'react';
import "./AlquilarAmigo.css";
import { Button, Modal, Row, Col, Card, Avatar, Form, Input, DatePicker, InputNumber, TimePicker, Tag } from "antd";
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf';

const { TextArea } = Input;

function AlquilarAmigo() {
    const [modalVisible, setModalVisible] = useState(false);
    const [amigos, setAmigos] = useState([]);
    const [form] = Form.useForm();

    useEffect(() => {
        const fetchAmigos = async () => {
            const amigosCollection = collection(db, 'amigos');
            const amigosSnapshot = await getDocs(amigosCollection);
            const amigosData = amigosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setAmigos(amigosData);
        };
        fetchAmigos();
    }, []);

    const handleAlquilarClick = () => {
        setModalVisible(true);
    };

    const handleModalCancel = () => {
        setModalVisible(false);
    };

    const onFinish = async (values) => {
        try {
            await addDoc(collection(db, 'citas'), values);
            setModalVisible(false);
            form.resetFields();
        } catch (error) {
            console.error('Error al registrar la cita:', error);
        }
    };

    return (
        <div className="AlquilarAmigo">
            <h1 className='titulo'>Alquilar Amigo</h1>
            <header className="AlquilarAmigo-header">
                <Row gutter={[16, 16]}>
                    {amigos.map(amigo => (
                        <Col key={amigo.id} span={6}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="Amigo" src={amigo.imagen} />}
                                actions={[
                                    <Button type="primary" key="alquilar" onClick={handleAlquilarClick}>Alquilar</Button>
                                ]}
                            >
                                <Card.Meta
                                    avatar={<Avatar src={amigo.imagen} />}
                                    title={`${amigo.nombre} ${amigo.apellido}`}
                                    description={(
                                        <>
                                            <div>{`Género: ${amigo.genero}`}</div>
                                            <div>Hobbies:</div>
                                            {amigo.hobbies.slice(0, 3).map(hobbie => (
                                                <Tag key={hobbie}>{hobbie}</Tag>
                                            ))}
                                        </>
                                    )}
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Modal
                    title="Registrar Cita"
                    visible={modalVisible}
                    onCancel={handleModalCancel}
                    footer={null}
                >
                    <Form
                        form={form}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="fechaHora"
                            label="Fecha y Hora"
                            rules={[
                                { required: true, message: 'Por favor selecciona la fecha y la hora' }
                            ]}
                        >
                            <DatePicker showTime format="YYYY-MM-DD HH:mm" />
                        </Form.Item>
                        <Form.Item
                            name="duracion"
                            label="Duración (Horas)"
                            rules={[
                                { required: true, message: 'Por favor ingresa la duración' }
                            ]}
                        >
                            <InputNumber min={1} />
                        </Form.Item>
                        <Form.Item
                            name="lugarEncuentro"
                            label="Lugar de Encuentro"
                            rules={[
                                { required: true, message: 'Por favor ingresa el lugar de encuentro' }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="descripcion"
                            label="Descripción"
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Guardar</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </header>
        </div>
    );
}

export default AlquilarAmigo;
