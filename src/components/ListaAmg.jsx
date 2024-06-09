import { doc,collection,getDoc,getDocs,query,limit} from "firebase/firestore";
import { db } from "../firebase/firebase-conf";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrusel.css";
import Tarjeta from "./Tarjeta";

function ListaAmg() {
    const [lista,setLista] = useState([]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,

        
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
            const limitedQuery = query(queryRef, limit(15));
            const querySnapshot = await getDocs(limitedQuery);
            const docs = [];
            querySnapshot.forEach((doc) => {
                const amigoData = doc.data();
                if(amigoData.activo === true) {
                    docs.push({ ...doc.data(), id: doc.id });
                }
                
            });
            setLista(docs);
            
        } catch (error) {
            console.log('este es el error: ',error);
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
export default ListaAmg;