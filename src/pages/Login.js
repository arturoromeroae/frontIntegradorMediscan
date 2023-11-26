import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import loginBanner from "../img/login.png";

function Login() {
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
          <form method="POST">
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
            <input type="email" name="email" placeholder="Ingresa tu correo electrónico" />
            <input type="password" name="password" placeholder="Ingresa tu contraseña" />
            <button>Iniciar Sesion</button>
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
