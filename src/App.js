import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Preguntas from './pages/Preguntas';
import Noticias from './pages/Noticias';
import Infecciones from './pages/Infecciones';
import Ets from './pages/Ets';
import Vph from './pages/Vph';
import Login from './pages/Login';
import Register from './pages/Register';
import Gracias from './pages/Gracias';

// variable global del chatbot inicializado
window.chatbotInitialized = false;

function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/preguntas" element={<Preguntas />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/infecciones" element={<Infecciones />} />
            <Route path="/que-son-ets" element={<Ets />} />
            <Route path="/vph" element={<Vph />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/registrarse" element={<Register />} />
            <Route path="/registro-completado" element={<Gracias />} />
          </Routes>
        </Router>
      );
}

export default App;
