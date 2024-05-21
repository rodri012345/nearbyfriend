import React, { useState } from 'react';
import { Form, Input, Button, Modal, message } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf';

const ModificarContraseña = ({ amigoId }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false); 
  const [previousPassword, setPreviousPassword] = useState('');

  const abrirModal = async () => {
    setVisible(true); 
    
    const amigoRef = doc(db, 'amigos', amigoId);
    const amigoSnap = await getDoc(amigoRef);
    const amigoData = amigoSnap.data();
    setPreviousPassword(amigoData.contraseña);
  };

  const cerrarModal = () => {
    setVisible(false); 
    form.resetFields();
  };

  const onFinish = async (values) => {
    setLoading(true);
    const nuevaContraseña = values.nuevaContraseña;
    
    // Verificar que la nueva contraseña sea diferente a la anterior
    if (nuevaContraseña === previousPassword) {
      message.error('La nueva contraseña debe ser diferente a la anterior.');
      setLoading(false);
      return;
    }

    const amigoRef = doc(db, 'amigos', amigoId);

    try {
      await updateDoc(amigoRef, {
        contraseña: nuevaContraseña,
        confirmarContraseña: values.confirmarContraseña
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
    <div>
      <Button type="default" onClick={abrirModal} icon={<EditOutlined />} /> {/* Botón de editar con icono */}
      <Modal
        title="Modificar Contraseña"
        visible={visible}
        onCancel={cerrarModal} 
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="nuevaContraseña"
            label="Nueva Contraseña"
            rules={[
              {
                required: true, message: "Por favor ingrese su contraseña"
              },
              { min: 6, message: "Debe tener más de 6 caracteres" },
              {
                pattern: /^(?=.*[A-Z])(?=.*\d).+$/,
                message: "La contraseña debe contener al menos una letra mayúscula y un número"
              }
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Escriba su contraseña" />
          </Form.Item>

          <Form.Item
            name="confirmarContraseña"
            label="Confirme Contraseña"
            dependencies={["contraseña"]}
            rules={[
              {
                required: true, message: "Debe confirmar su contraseña"
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("nuevaContraseña") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Las contraseñas no coinciden.");
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirme su contraseña" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} >
              Guardar Cambios
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModificarContraseña;

