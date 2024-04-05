import { Route, Routes } from "react-router-dom";
import "./App.css";
import AlquilarAmigo from "./components/AlquilarAmigo";
import { Navbar } from "./components/Navbar";
import { About, RegistroCliente, Home, Services,RegistroAmigo } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<AlquilarAmigo />} />
        <Route path="/services" element={<Services />} />
        <Route path="/RegistroCliente" element={<RegistroCliente />} />
        <Route path="/RegistroAmigo" element={<RegistroAmigo />} />
      </Routes>
    </div>
  );
}

export default App;