import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from './components/Fotter'
import ScrollToTop from '../src/components/ScrollToTop'
import {
  About, RegistroCliente, Home, MenuPerfil, RegistroAmigo, SubirFotos, Perfil, Inicio,
  Solicitudes, Ayuda, Galeria, Modificar, SeePerfil, ConoceMas,
  SeAmigo, Soporte, PerfilUsuario
} from "./components/pages";
import { auth, db } from "./firebase/firebase-conf";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import NavbarRegistro1 from "./components/NavbarRegistro1";
import { doc, getDoc } from 'firebase/firestore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        setLoading(false); // Set loading to false if no user is signed in
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
      setLoading(false); // Always set loading to false after the fetch is done
    }
  };

  console.log("userDetails fuera de useEffect:", userID);

  return (
    <div className="App">
      <div className="content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home user={user} userID={userID} />} />
          <Route path="/about" element={<About />} />
          <Route path="/MenuPerfil" element={<MenuPerfil />} />
          <Route path="/RegistroCliente" element={<RegistroCliente />} />
          <Route path="/RegistroAmigo" element={<RegistroAmigo />} />
          <Route path="/SubirFotos" element={<SubirFotos />} />
          <Route path="/Perfil/:amigoId" element={<Perfil />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Solicitudes" element={<Solicitudes />} />
          <Route path="/Modificar" element={<Modificar />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/SeePerfil" element={<SeePerfil />} />
          <Route path="/Ayuda" element={<Ayuda />} />
          <Route path="/ConoceMas" element={<ConoceMas />} />
          <Route path="/SeAmigo" element={<SeAmigo />} />
          <Route path="/Soporte" element={<Soporte />} />
          <Route path="/PerfilUsuario" element={<PerfilUsuario />} />
        </Routes>
      </div>
      <ToastContainer />
      {!loading && (
        user ? <NavbarRegistro1 userData={userDetails} userID={userID} /> : <Navbar />
      )}
      <Footer />
    </div>
  );
}

export default App;
