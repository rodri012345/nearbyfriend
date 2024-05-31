import React, { useState } from 'react';
import './Faq.css'; // Archivo CSS para los estilos

const FAQItem = () => {
    const faqs = [
        {
            question: '¿Cómo puedo registrarme?',
            answer: 'Para registrarte, ve a la página de registro y completa el formulario con tus datos personales.',
        },
        {
            question: '¿Cómo restablezco mi contraseña?',
            answer: 'Para restablecer tu contraseña, ve a la página de inicio de sesión y haz clic en "¿Olvidaste tu contraseña?".',
        },
        {
            question: '¿Cómo puedo alquilar a un amigo?',
            answer: 'Para alquilar a un amigo, primero debes registrarte en nuestra plataforma y luego navegar por los perfiles de amigos disponibles. Una vez que encuentres a alguien que te guste, puedes enviarles una solicitud de amistad.".',
        },
        {
            question: '¿Cuánto cuesta alquilar a un amigo?',
            answer: 'El costo de alquilar a un amigo varía según la duración del tiempo y las actividades que desees realizar juntos. Te recomendamos revisar los perfiles de los amigos para conocer sus tarifas y condiciones específicas.".',
        },
        {
            question: '¿Qué actividades puedo realizar con un amigo alquilado?',
            answer: 'Puedes realizar una amplia variedad de actividades con tu amigo alquilado, como salir a tomar un café, ir al cine, hacer ejercicio juntos, recibir apoyo emocional, entre otros. ¡La elección es tuya!".',
        },
        {
            question: '¿Cómo puedo asegurarme de que mi amigo alquilado sea confiable y seguro?',
            answer: 'Todos nuestros amigos alquilados pasan por un riguroso proceso de selección que incluye verificación de antecedentes y evaluaciones de confiabilidad. Además, puedes leer las reseñas y calificaciones de otros usuarios para tomar una decisión informada.".',
        },
        {
            question: '¿Qué sucede si surge un problema durante la experiencia con mi amigo alquilado?',
            answer: 'En caso de cualquier problema durante tu experiencia con un amigo alquilado, contamos con un equipo de atención al cliente disponible para ayudarte. Puedes comunicarte con nosotros a través de nuestro numero de contacto o por correo electrónico, y haremos todo lo posible para resolver la situación de manera satisfactoria.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(-1);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className='preguntas-FAQ'>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleAccordion(index)}>
                        <div>{faq.question}</div>
                        <div className={`faq-icon ${openIndex === index ? 'open' : 'closed'}`}>{openIndex === index ? '-' : '+'}</div>
                    </div>
                    {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                </div>
            ))}
        </div>
    );
};

export default FAQItem;
