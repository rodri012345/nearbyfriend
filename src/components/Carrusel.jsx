import { doc,collection,getDoc,getDocs,query,where} from "firebase/firestore";
import { db } from "../firebase/firebase-conf";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrusel.css";
import Tarjeta from "./Tarjeta";

function Carrusel({idCliente}) {
    const [lista,setLista] = useState([]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,

        // prevArrow: <div />, // Quitamos la flecha de retroceso
        // nextArrow: <div/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        const getLista = async () => {
        try {

            let queryRef = collection(db, "amigos");
            console.log(idCliente);         
            const queryRefCli = doc(db,"clientes",idCliente)
            const docSnapCli = await getDoc(queryRefCli)
            const cliente = {id:docSnapCli.id,...docSnapCli.data()}
            queryRef = query(queryRef, where("hobbies", "array-contains-any",cliente.hobbies));
            
            const querySnapshot = await getDocs(queryRef);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setLista(docs);
            
        } catch (error) {
            console.log(error);
        }
        };
        getLista();
    }, []);
    
    return (
        <div
            className="slider-container style-carrusel"
            
        >
            <Slider {...settings}>
                { lista.map((list,index) => (
                <div key={list.id}>
                    <Tarjeta
                        nombre= {list.nombre + " "+ list.apellido}
                        ciudad= {list.departamento}
                        urlImage= {list.imageURL}
                        idAmigo= {list.id}
                        
                    />
                </div>
                ))}
            </Slider>
        </div>
    );
}
export default Carrusel;
