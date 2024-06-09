import React, { useState } from 'react';
import { Form, Input, Button, Modal, message } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf';
import "./EstilosMod.css";

const ModificarCorreo = ({ amigoId }) => {
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
    const amigoRef = doc(db, 'amigos', amigoId);

    try {
      await updateDoc(amigoRef, {
        correo: values.nuevoCorreo
      });

      message.success('Datos de amigo actualizados con éxito');
      cerrarModal(); 
    } catch (error) {
      message.error('Error al actualizar datos de amigo: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{display:'flex'}}>
      <Button type="default" style = {{backgroundColor:'#0056b3', alignItems:'end' }} onClick={abrirModal} icon={<EditOutlined />} /> {/* Botón de editar con icono */}
      <Modal
        title="Modificar Correo"
        visible={visible}
        onCancel={cerrarModal} 
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="nuevoCorreo"
            label="Nuevo Correo Electrónico"
            rules={[
              { required: true, message: 'Por favor ingresa el nuevo correo electrónico' },
              { type: "email", message: "Por favor ingrese un correo válido" },
              {
                validator: (_, value) =>
                  value && value.includes(".")
                    ? Promise.resolve()
                    : Promise.reject(""),
              }
            ]}
          >
            <Input placeholder="Escriba su nuevo Correo" />
          </Form.Item>
          <Form.Item className='modal-style'>
            <button className='mon-n' type="primary" htmlType="submit" loading={loading}>
              Guardar Cambios
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModificarCorreo;