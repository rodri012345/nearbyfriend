import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Footer from './components/Fotter'
import { About, RegistroCliente, Home, MenuPerfil, RegistroAmigo, SubirFotos, Perfil, Inicio, 
  Solicitudes, Ayuda, Galeria, Modificar, SeePerfil  } from "./components/pages";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/MenuPerfil" element={<MenuPerfil />} />
          <Route path="/registro-cliente" element={<RegistroCliente />} />
          <Route path="/registro-amigo" element={<RegistroAmigo />} />
          <Route path="/subir-fotos" element={<SubirFotos />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Solicitudes" element={<Solicitudes />} />
          <Route path="/Modificar" element={<Modificar />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/SeePerfil" element={<SeePerfil />} />
          <Route path="/Ayuda" element={<Ayuda />} /> 
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;