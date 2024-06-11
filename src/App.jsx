import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "../src/components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import NavbarRegistro2 from "./components/NavbarRegistro2";
import NavbarRegistro1 from "./components/NavbarRegistro1";
import { auth, db } from "./firebase/firebase-conf";
import Footer from "./components/Fotter";
import { doc, getDoc } from "firebase/firestore";
//import { About, RegistroCliente, Home, Services,RegistroAmigo,SubirFotos, Perfil} from "./components/pages";


import {
    About,
    RegistroCliente,
    Home,
    RegistroAmigo,
    SubirFotos,
    Perfil,
    Solicitudes,
    EditarPerfil,
    ConoceMas,
    Soporte,
    PerfilUsuario,
    PerfilAmg,
    SeAmigo
} from "./components/pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubirFotosA from "./components/pages/SubirFotosA";

function App() {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userID, setUserID] = useState(null);
    const [amigo, setAmigo] = useState(false);

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
                const docRefAmg = doc(db, "amigos", uid);
                const docSnapAmg = await getDoc(docRefAmg);
                if (docSnapAmg.exists()) {
                    setAmigo(true);
                    console.log("User data found:", docSnapAmg.data());
                    setUserDetails(docSnapAmg.data());
                } else {
                    console.log("No user data found for UID:", uid);
                }
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
                    <Route
                        path="/"
                        element={<Home user={user} userID={userID} amigo={amigo} />}
                    />
                    
                    <Route
                        path="/RegistroCliente"
                        element={<RegistroCliente />}
                    />
                    <Route path="/RegistroAmigo" element={<RegistroAmigo />} />
                    <Route path="/SeAmigo" element={<SeAmigo />} />
                    <Route path="/SubirFotos" element={<SubirFotos />} />
                    <Route path="/Perfil/" element={<Perfil amigoId={userID}/>} />
                    <Route path="/Soporte" element={<Soporte />} />
                    <Route path="/Solicitudes" element={<Solicitudes amigoId={userID} />} />
                    <Route path="/PerfilAmg/:amigoId" element={<PerfilAmg clienteId={userID}/>} />
                    <Route
                        path="/ConoceMas"
                        element={<ConoceMas userID={userID} />}
                    />
                    <Route path="/SubirFotosA" element={<SubirFotosA />} />
                    <Route
                        path="/PerfilUsuario"
                        element={<PerfilUsuario userID={userID} />}
                    />
                    <Route
                        path="/EditarPerfil"
                        element={<EditarPerfil idAmigo={userID} />}
                    />
                </Routes>
            </div>
            <ToastContainer />
            {!loading && (
                <>
                    {user && amigo ? (
                        <NavbarRegistro2
                            userData={userDetails}
                            userID={userID}
                            
                        />
                    ) : user ? (
                        <NavbarRegistro1
                            userData={userDetails}
                            userID={userID}
                            
                        />
                    ) : (
                        <Navbar />
                    )}
                </>
            )}
            <Footer />
        </div>
    );
}

export default App;













