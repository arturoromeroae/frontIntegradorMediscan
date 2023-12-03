import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import loginBanner from "../img/login.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Login = ({onLogin}) => {

  const [loginData, setLoginData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = () => {
    fetch('https://authproject-406922.wl.r.appspot.com/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
      credentials: 'include',
    })
      .then(response => {
        if (response.ok) {
          console.log("Usuario inició sesión correctamente");
          window.alert("Inicio de sesión exitoso. ¡Bienvenido!");
          onLogin(loginData);
          navigate("/");
        } else if (response.status === 403) {
          console.error("Error al iniciar sesión: Permiso denegado");
        } else {
          console.error('Error al iniciar sesión:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
      });
  };

  return (
    <section className="layout">
      {/* CABECERA DEL SITIO */}
      <Header />

      {/* CONTENEDOR DEL INICIO DE SESION */}
      <div className="loginContainer">
        <div className="loginBanner">
          <img src={loginBanner} alt="login banner" />
        </div>
        <div className="loginForm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignIn();
            }}
          >
            <h3>Iniciar Sesión</h3>
            <p>
              Inicia sesión para disfrutar de beneficios exclusivos y contenido
              premium. Conéctate con nuestra activa comunidad, participa en
              eventos especiales y personaliza tu experiencia. Olvidaste tu
              contraseña, no hay problema; tenemos un proceso de recuperación.
              Iniciar sesión es tu acceso a una experiencia única. <br />
              <br />
              <strong>¡Únete y descubre más!</strong>
            </p>
            <input type="text" name="usernameOrEmail" placeholder="Ingresa tu usuario o correo electrónico" onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Ingresa tu contraseña" onChange={handleInputChange} />
            <button type="button" onClick={handleSignIn}>Iniciar Sesion</button>
            <Link to="/registrarse">Crearme una cuenta</Link>
          </form>
        </div>
      </div>

      {/* FOOTER DEL SITIO */}
      <Footer />
    </section>
  );
}

export default Login;
