import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../img/MediScan-logo.png";

const Header = ({ username, handleLogoutClick }) => {
  return (
    <header>
      <div className="HeaderContainer">
        <img className="HeaderLogo" src={Logo} alt="logo de empresa" />
        <ul className="HeaderPages">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/preguntas">Preguntas</NavLink>
          </li>
          <li>
            <NavLink to="/noticias">Noticias</NavLink>
          </li>
        </ul>
        {username ? (
          <>
            <span className="Username">{username}</span>
            <button className="btnSesion" onClick={handleLogoutClick}>
              Cerrar Sesión
            </button>
          </>
        ) : (
          <Link to="/iniciar-sesion">
            <button className="btnSesion">Iniciar Sesión</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
