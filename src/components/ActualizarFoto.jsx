import React, { useState } from "react";
import { Button, message, Modal, Result } from "antd";
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf';

import "./Alquilar.css";

function ModificarFoto({ amigoId }) {
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        // Previsualizar la imagen seleccionada
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const handleUpdate = async () => {
        if (!imageFile) {
            message.error("Por favor selecciona una imagen.");
            return;
        }

        setUploading(true);
        try {
            // Leer la imagen como una cadena base64
            const reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onload = async () => {
                const base64Image = reader.result;

                // Actualizar el campo de la imagen en Firestore
                const amigoRef = doc(db, "amigos", amigoId);
                await updateDoc(amigoRef, { imageURL: base64Image });

                // Limpiar estado y mostrar mensaje de éxito
                setImageFile(null);
                setImagePreview(null);
                setUploading(false);
                setUploadError(null);
                message.success("Imagen actualizada correctamente.");
                setModalVisible(false); // Cerrar el modal después de la actualización
            };
        } catch (error) {
            console.error("Error al cargar la imagen:", error);
            setUploadError("Error al cargar la imagen. Por favor, intenta de nuevo más tarde.");
            setUploading(false);
        }
    };

    return (
        <div className="actualizar-foto-cliente">
            <button className="mon-n" onClick={() => setModalVisible(true)}>Actualizar Imagen</button>
            <Modal
                title="Actualizar Foto"
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={[
                    <Button key="cancel" onClick={() => setModalVisible(false)}>Cancelar</Button>,
                    <Button key="update" type="primary" disabled={!imageFile || uploading} onClick={handleUpdate}>
                        {uploading ? "Actualizando..." : "Actualizar Imagen"}
                    </Button>,
                ]}
            >
                <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleImageChange}
                />
                {/* Mostrar la previsualización de la imagen */}
                {imagePreview && <img src={imagePreview} alt="Previsualización de la imagen" style={{ maxWidth: "100%", maxHeight: "200px" }} />}
                {uploadError && (
                    <Result
                        status="error"
                        title="Error"
                        subTitle={uploadError}
                    />
                )}
            </Modal>
        </div>
    );
}

export default ModificarFoto;