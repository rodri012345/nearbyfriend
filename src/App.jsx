import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from '../src/components/ScrollToTop'
import { Navbar } from "./components/Navbar";
import NavbarRegistro1 from "./components/NavbarRegistro1";
import { auth, db } from "./firebase/firebase-conf";
import Footer from "./components/Fotter";
import { doc, getDoc } from 'firebase/firestore';
//import { About, RegistroCliente, Home, Services,RegistroAmigo,SubirFotos, Perfil} from "./components/pages";
import {
    About,
    RegistroCliente,
    Home,
    Services,
    RegistroAmigo,
    SubirFotos,
    Perfil,
    Solicitud,
    EditarPerfil,
} from "./components/pages";
import { ToastContainer } from 'react-toastify';
import SubirFotosA from "./components/pages/SubirFotosA";

function App() {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userID, setUserID] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                await fetchUserData(user.uid);
            } else {
                setUser(null);
                setUserDetails(null);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const fetchUserData = async (uid) => {
        try {
            console.log("Fetching data for UID:", uid);
            const docRef = doc(db, "clientes", uid);
            const docSnap = await getDoc(docRef);
            setUserID(uid);
            if (docSnap.exists()) {
                console.log("User data found:", docSnap.data());
                setUserDetails(docSnap.data());
            } else {
                console.log("No user data found for UID:", uid);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    console.log("userDetails fuera de useEffect:", userID);

    return (
        <div className="App">
            <div className="content">
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home user={user} userID={userID} />} />
                    <Route path="/services" element={<Services />} />
                    <Route
                        path="/RegistroCliente"
                        element={<RegistroCliente />}
                    />
                    <Route path="/RegistroAmigo" element={<RegistroAmigo />} />
                    <Route path="/SubirFotos" element={<SubirFotos />} />
                    <Route path="/Perfil/:amigoId" element={<Perfil />} />
                    <Route path="/SubirFotosA" element={<SubirFotosA />} />
                    <Route
                        path="/EditarPerfil/:idAmigo"
                        element={<EditarPerfil />}
                    />
                    <Route path="/Solicitud " element={<Solicitud />} />
                </Routes>
            </div>
            <ToastContainer />
            {!loading &&
                (user ? (
                    <NavbarRegistro1 userData={userDetails} userID={userID} />
                ) : (
                    <Navbar />
                ))}
            <Footer />
        </div>
    );
}

export default App;
