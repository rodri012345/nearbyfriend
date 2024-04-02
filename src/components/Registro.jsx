import React from 'react';
import "./Registro.css";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space  } from "antd";

function Registro() {
    return (
        <div className="Registro">
            <header className="Registro-header">
                <Form
                    autoComplete="off"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 14 }}
                    onFinish={(values) => {
                        console.log({ values });
                    }}
                    onFinishFailed={(error) => {
                        console.log({ error });
                    }}
                >
                    <Form.Item
                        name="Nombre"
                        label="Nombre Completo"
                        rules={[
                            {
                                required: true,
                                message: "Por favor Ingrese su Nombre",
                            },
                            { whitespace: true },
                            { min: 3 },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Escriba su Nombre" />
                    </Form.Item>

                    <Form.Item
                        name="correo"
                        label="Correo"
                        rules={[
                            {
                                required: true,
                                message: "Por favor Ingrese su Correo",
                            },
                            { type: "correo", message: "Por favor Ingrese un Correo Valido" },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Escriba su Correo" />
                    </Form.Item>

                    <Form.Item
                        name="contraseña"
                        label="Contraseña"
                        rules={[
                            {
                                required: true, message:"Por Favor Ingrese su Contraseña"
                            },
                            { min: 6, message: "Debe de tener mas de 6 caracteres"},
                            /*{
                                validator: (_, value) =>
                                    value && value.includes("A")
                                        ? Promise.resolve()
                                        : Promise.reject("Contraseña no Valida"),
                            },*/
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
                                required: true, message:"Debe confirmar su Contraseña"
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("contraseña") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        "Las contraseñas no coinsiden."
                                    );
                                },
                            }),
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Confirme su Contraseña" />
                    </Form.Item>

                    <Form.Item name="genero" label="Genero" requiredMark="optional">
                        <Select placeholder="Seleccione su Genero">
                            <Select.Option value="masculino">Masculino</Select.Option>
                            <Select.Option value="femenino">Femenino</Select.Option>
                            <Select.Option value="otro">Otro</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="dob"
                        label="Feha de Nacimiento"
                        rules={[
                            {
                                required: true,
                                message: "Por favor Ingrese su fecha de nacimineto",
                            },
                        ]}
                        hasFeedback
                    >
                        <DatePicker
                            style={{ width: "100%" }}
                            picker="date"
                            placeholder="Seleccione una fecha"
                        />
                    </Form.Item>


                    <Form.Item
                        name="agreement"
                        wrapperCol={{ span: 24 }}
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

                    <Form.Item wrapperCol={{ span: 24 }}>
                        <Button block type="primary" htmlType="submit">
                            Registrarse
                        </Button>
                    </Form.Item>
                </Form>
            </header>
        </div>
    );
}

export default Registro;