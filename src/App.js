import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Composant1 from './Comp1';
import Composant2 from './Comp2';
import Composant3 from './Comp3';
import './App.css'; // Fichier contenant le style pur CSS

const App = () => {
  return (
    <div className="app-container">
      {/* Conteneur de boutons stylisés */}
      <div className="button-container">
        <Link to="/composant1">
          <button className="component-button">Gestion des Voitures</button>
        </Link>
        <Link to="/composant2">
          <button className="component-button">Liste des Salariés</button>
        </Link>
        <Link to="/composant3">
          <button className="component-button">Recherche par Service</button>
        </Link>
      </div>

      {/* Conteneur pour les routes */}
      <div className="content-container">
        <Routes>
          <Route path="/composant1" element={<Composant1 />} />
          <Route path="/composant2" element={<Composant2 />} />
          <Route path="/composant3" element={<Composant3 />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
