import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Preguntas from './pages/Preguntas';
import Noticias from './pages/Noticias';
import Infecciones from './pages/Infecciones';
import Ets from './pages/Ets';
import Vph from './pages/Vph';
import Login from './pages/Login';
import Register from './pages/Register';
import Gracias from './pages/Gracias';
import Header from './pages/components/Header';
import Admin from './pages/Admin';

// variable global del chatbot inicializado
window.chatbotInitialized = false;

function AuthenticatedApp({ username }) {
  const [logoutMessage, setLogoutMessage] = useState("");

  const handleLogoutClick = async () => {
    try {
      const response = await fetch("https://authproject-406922.wl.r.appspot.com/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        setLogoutMessage("Sesión cerrada exitosamente");
        setTimeout(() => {
          setLogoutMessage('');
          window.location.href = "/";
        }, 2000);
      } else {
        console.error("Error al cerrar sesión");
        setLogoutMessage("Error al cerrar sesión");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      setLogoutMessage("Error al cerrar sesión");
    }
  };

  return (
    <>
      {username && (
        <Header username={username} handleLogoutClick={handleLogoutClick} />
      )}

      <div className="container mt-4">
        {logoutMessage && (
          <div className="alert alert-info" role="alert">
            {logoutMessage}
          </div>
        )}

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
          <Route path="/administrador" element={<Admin username={username} />} />
        </Routes>
      </div>
    </>
  );
}

function UnauthenticatedApp({ onLogin }) {
  return (
    <div className="container mt-4">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/infecciones" element={<Infecciones />} />
        <Route path="/que-son-ets" element={<Ets />} />
        <Route path="/vph" element={<Vph />} />
        <Route path="/iniciar-sesion" element={<Login onLogin={onLogin} />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/registro-completado" element={<Gracias />} />
      </Routes>
    </div>
  );
}

function App() {
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    setUsername(user.usernameOrEmail);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/iniciar-sesion"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/*"
          element={
            username ? (
              <AuthenticatedApp username={username} />
            ) : (
              <UnauthenticatedApp onLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
