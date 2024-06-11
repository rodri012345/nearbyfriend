import React from 'react'
import "./Contactanos.css"
import msg_icon from '../img/msg-icon.png'
import mail_icon from '../img/mail-icon.png'
import phone_icon from '../img/phone-icon.png'
import location_icon from '../img/location-icon.png'
export const Contactanos = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "6d6a835b-80f3-42f7-97b1-62b6db674a3d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Mesaje enviado. Nos comunicaremos lo mas antes posible");
        event.target.reset();   
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contacto'>
        <div className="contacto-col">
            <h3>Envianos un Correo <img src={msg_icon} alt="" /></h3>
            <p>Siente libre de contactarnos, llena el formularion o contactanos atravez de nuestras lineas de contacto.
                Tus comentarios, preguntas y sugerencias son importantes para nosotros, para ayudarnos
                a mejorar y proporcionar un servicio excepcional a nuestros usuarios.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />Soporte@nearbyfriend.com</li>
                <li><img src={phone_icon} alt="" />+591 75482145</li>
                <li><img src={location_icon} alt="" />Calle America entre Pando y Potosi, Nro 156 <br/> Cochabamba Bolivia</li>
            </ul>
        </div>
        <div className="contacto-col">
            <form onSubmit={onSubmit}>
                <label>Nombre</label>
                <input type="text" name='Nombre' placeholder='Ingrese Su nombre' required/>
                <label>Celular</label>
                <input type="text" name='Celular' placeholder='Ingrese su Numero de Celular' required/>
                <label>Escribe tu Mensaje</label>
                <textarea name="Mensaje" rows="6" placeholder='Ingrese su mensaje' required></textarea>
                <button type="submit" className='btn-send'>Enviar Mensaje</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}
