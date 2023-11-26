import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/MediScan-logo.png";
import ig from "../../img/icons/ig.png";
import fb from "../../img/icons/fb.png";
import tw from "../../img/icons/tw.png";

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="menuFooterContainer">
          <ul className="footerPages">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/noticias">Noticias</Link>
            </li>
            <li>
              <Link to="/preguntas">Preguntas</Link>
            </li>
          </ul>
        </div>
        <div className="addressFooterContainer">
          <div>
            <img className="footerLogo" src={Logo} alt="logo de empresa" />
            <p>
              Ven a nuestra sede en Jr Carabaya 2198,
              <br />
              Centro de lima, Lima
            </p>
          </div>
        </div>
        <div className="socialFooterContainer">
          <div>
            <img src={fb} alt="icono" />
            <img src={ig} alt="icono" />
            <img src={tw} alt="icono" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
