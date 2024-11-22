import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GestionFabricantes from './pages/GestionFabricantes';
import GestionMotos from './pages/GestionMotos';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fabricantes" element={<GestionFabricantes />} />
        <Route path="/motos" element={<GestionMotos />} />
      </Routes>
    </Router>
  );
};

export default App;
