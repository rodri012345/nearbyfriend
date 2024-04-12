import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, RegistroCliente, Home, Services,RegistroAmigo,SubirFotos, Perfil } from "./components/pages";

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
        <Route path="/SubirFotos" element={<SubirFotos />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
    </div>
  );
}

export default App;