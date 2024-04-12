import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, RegistroCliente, Home, Services, RegistroAmigo, Perfil } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/RegistroCliente" element={<RegistroCliente />} />
        <Route path="/RegistroAmigo" element={<RegistroAmigo />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SubirFotos" element={<SubirFotos />} />
      </Routes>
    </div>
  );
}

export default App;