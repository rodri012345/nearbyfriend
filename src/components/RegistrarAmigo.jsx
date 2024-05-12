import React from "react";
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
} from "antd";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-conf";

import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;

function RegistrarAmigo() {
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

    window.location.href = "/SubirFotosA";
    console.log({ formData });
  };

  function disabledDate(current) {
    const april2006 = new Date("2006-04-19");

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
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                  {
                    max: 30,
                    message: "El nombre no puede tener más de 30 caracteres",
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
                    message: "Por favor Ingrese su Apellido",
                  },
                  { whitespace: true },
                  {
                    min: 3,
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                  {
                    max: 30,
                    message: "El nombre no puede tener más de 30 caracteres",
                  },
                  {
                    pattern: /^[a-zA-Zñ\s]*$/,
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
                    message: "Por Favor Ingrese su Contraseña",
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
                      if (!value || getFieldValue("contraseña") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Las contraseñas no coinciden.");
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
                    message: "Por favor Seleccione un Genero",
                  },
                ]}
              >
                <Select placeholder="Seleccione su Genero">
                  <Select.Option value="masculino">Masculino</Select.Option>
                  <Select.Option value="femenino">Femenino</Select.Option>
                  <Select.Option value="otro">Otro</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="departamento"
                label="Departamento"
                rules={[
                  {
                    required: true,
                    message: "Por favor Seleccione un Departamento",
                  },
                ]}
              >
                <Select placeholder="Seleccione su Departamento">
                  <Select.Option value="La Paz">La Paz</Select.Option>
                  <Select.Option value="Santa Cruz">Santa Cruz</Select.Option>
                  <Select.Option value="Cochabamba">Cochabamba</Select.Option>
                  <Select.Option value="Oruro">Oruro</Select.Option>
                  <Select.Option value="Sucre">Sucre</Select.Option>
                  <Select.Option value="Tarija">Tarija</Select.Option>
                  <Select.Option value="Potosi">Potosi</Select.Option>
                  <Select.Option value="Beni">Beni</Select.Option>
                  <Select.Option value="Pando">Pando</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="dob"
                label="Fecha de Nacimiento"
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
                  {
                    type: "email",
                    message: "Por favor Ingrese un Correo Valido",
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
                    message: "Por favor Ingrese su Telefono",
                  },

                  {
                    validator: (_, value) => {
                      if (!value) {
                        return Promise.resolve();
                      }
                      if (!Number.isInteger(value)) {
                        return Promise.reject(
                          new Error("Ingrese un número de teléfono válido")
                        );
                      }
                      if (value < 0) {
                        return Promise.reject(
                          new Error("Ingrese un número de teléfono válido")
                        );
                      }
                      const phoneNumber = value.toString();
                      if (phoneNumber.length < 7 || phoneNumber.length > 10) {
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
                    message: "Por favor seleccione al menos un hobby",
                  },
                ]}
              >
                <Checkbox.Group style={{ width: "100%" }}>
                  <div style={{ textAlign: "center" }}>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Cantar"
                    > 
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🎤</span>
                      Cantar
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Bailar"
                    >
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>💃</span>
                      Bailar
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Comer"
                    > 
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🍕</span>
                      Comer
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"15px" }}
                      value="Ver películas"
                    > 
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>📺</span>
                      películas
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Cine"
                    > 
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🍿</span>
                      Cine
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Leer"
                    >
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>📖</span>
                      Leer
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Pasear"
                    > 
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🚶</span>
                      Pasear
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Pintar"
                    > 
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🎨</span>
                      Pintar
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Arte"
                    > 
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🧑‍🎨</span>
                      Arte
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Futbol"
                    > 
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>⚽</span>
                      Futbol
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Viajes"
                    > 
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🛫</span>
                      Viajes
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Dibujar"
                    > 
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>📝</span>
                      Dibujar
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Musica"
                    > 
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🎵</span>
                      Musica
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"15px" }}
                      value="Mascotas"
                    > 
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🐕</span>
                      Mascota
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Escribir"
                    >
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>✍️</span>
                      Escribir
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Anime"
                    > 
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🐍</span>
                      Anime
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"15px" }}
                      value="Estudiar"
                    > 
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>📚</span>
                      Estudiar
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Autos"
                    >
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🚗</span>
                      Autos
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Futbol"
                    >
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>⚽</span>
                      Futbol
                    </Checkbox> 
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Actuar"
                    >
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🤹</span>
                      Actuar
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"15px" }}
                    >
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>📚</span>
                      Estudiar
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"14px" }}
                      value="Conciertos"
                    >
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🎆</span>
                      Concierto
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Nadar"
                    >
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🏊</span>
                      Nadar
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Fiestas"
                    >
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🍻</span>
                      Fiestas
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"13px" }}
                      value="Coleccionar"
                    >
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>♟️</span>
                      Coleccionar
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"13px" }}
                      value="Negocios"
                    >
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>🧑‍💼</span>
                      Negocios
                    </Checkbox>
                    <Checkbox
                      style={{ width: "33%", marginBottom: "20px",fontSize:"17px" }}
                      value="Trabajo"
                    >
                      <span role="img" aria-label="smiley" style={{fontSize:"30px"}}>👷</span>
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
              Aceptar nuestros, <a href="#">Terminos y condiciones</a>
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

export default RegistrarAmigo;
