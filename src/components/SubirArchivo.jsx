import React, { useState } from "react";
import { uploadFile } from "../firebase/firebase-conf";

function SubirArchivo({ onUpload }) {
  const [result, setResult] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = async () => {
      const base64String = reader.result;
      setResult(base64String);
    };

    if (file) {
      try {
        const res = await uploadFile(file);
        setResult(res);
        onUpload(res);
        console.log("imagen subida:", res);
      } catch (error) {
        console.error("error al subir imagen", error);
      }
    }
  };

  return (
    <div>
      <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
        <input
          type="file"
          id="fileInput"
          accept=".jpg,.png"
          onChange={handleFileChange}
          style={{ display: "none" }} // Ocultar el input file
        />
        <div style={{ textAlign: "center" }}>
        <svg 
            height="50" 
            viewBox="0 -960 960 960" 
            width="50
            ">
        <path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>
        </svg>

          <div>Haga clic aquí para subir un archivo</div>
        </div>
      </label>

      {result && (
        <div>
          <img src={result} alt="Imagen subida" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
}

export default SubirArchivo;
