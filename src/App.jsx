import { Route, Routes, Router } from "react-router-dom";
import "./App.css";
import Footer from './components/Fotter'
import ScrollToTop from '../src/components/ScrollToTop'
import {
  About, RegistroCliente, Home, MenuPerfil, RegistroAmigo, SubirFotos, Perfil, Inicio,
  Solicitudes, Ayuda, Galeria, Modificar, SeePerfil, ConoceMas,
  SeAmigo, Soporte
} from "./components/pages";

function App() {
  return (
    <div className="App">
      <div className="content">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
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
        </Routes>
      </div>

      
      <Footer />
    </div>
  );
}

export default App;