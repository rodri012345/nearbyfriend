import React from "react";
import Footer from '../Fotter'
import SubirFoto from "../SubirFoto";
import Navbar1 from "../Navbar1"
import Titulo from "../Titulo";

export const SubirFotos = () => {
    return (
        <>
            <Navbar1 />
            <Titulo subTitulo="Queremos conocerte mas" titulo="Cuentanos mas de ti"/>
            <div className="bar">
                <SubirFoto />
            </div>
            <Footer />

        </>
    );
};