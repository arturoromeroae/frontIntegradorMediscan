import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import thanksBannerAnimation from "../img/animations/thanks.json";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
  return (
    <section className="layout">
      <div className="ThanksContainer">
        {/* SLIDER DEL HOME */}
        <div className="sliderThanksContainer">
          <div className="bannerThanksContainer">
            <Lottie animationData={thanksBannerAnimation} loop={true} />
          </div>
          <div className="textThanksContainer">
            <Link to="/iniciar-sesion">
              <button className="botonTest">Iniciar Sesión</button>
            </Link>
          </div>
        </div>
        </div>

      {/* FOOTER DEL SITIO */}
      <Footer />
    </section>
  );
}

export default Home;
