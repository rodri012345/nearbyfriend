// MainApp.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Inicio from './pages/Inicio';
import Solicitudes from './pages/Solicitudes';
import ModificarPerfil from './pages/ModificarPerfil';
import Galeria from './pages/Galeria';
import VerPerfil from './pages/VerPerfil';
import Ayuda from './pages/Ayuda';
import './MainApp.css';

const MainApp = () => {
  return (
    <Router>
      <div className="App">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="content">
          <Switch>
            <Route path="/inicio" component={Inicio} />
            <Route path="/solicitudes" component={Solicitudes} />
            <Route path="/modificar-perfil" component={ModificarPerfil} />
            <Route path="/galeria" component={Galeria} />
            <Route path="/ver-perfil" component={VerPerfil} />
            <Route path="/ayuda" component={Ayuda} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default MainApp;
