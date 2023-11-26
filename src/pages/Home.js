import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import logo from "../img/MediScan-logo.png";
import icono1 from "../img/icons/icono-1.png";
import icono2 from "../img/icons/icono-2.png";
import icono3 from "../img/icons/icono-3.png";
import icono4 from "../img/icons/icono-4.png";
import newsBanner from "../img/news-image.jpeg";
import coupleBannerAnimation from "../img/animations/couple.json";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
  return (
    <section className="layout">
      {/* CABECERA DEL SITIO */}
      <Header />
      <div className="HomeContainer">
        {/* SLIDER DEL HOME */}
        <div className="sliderHomerContainer">
          <div className="banneHomeContainer">
            <Lottie animationData={coupleBannerAnimation} loop={true} />
          </div>
          <div className="textHomeContainer">
            <img src={logo} alt="logo empresa" />
            <h2 className="blue">¡Realiza tu consulta ahora!</h2>
            <h3>
              Con nuestro <span className="pink">ChatBot</span>
            </h3>
            <Link to="/preguntas">
              <button className="botonTest">Iniciar Test</button>
            </Link>
          </div>
        </div>

        {/* ICONOS CON TEXTO HOME */}
        <div className="iconsHomeContainer">
          <h2 className="pink">Nuestros Tests</h2>
          <div className="iconsContainer">
            <div className="itemIcon">
              <div>
                <img src={icono1} alt="icono" />
              </div>
              <p>
                Un test para el Éxito en el Tratamiento (ETS) es una prueba
                médica que se realiza para detectar la presencia de enfermedades
                de transmisión sexual, como el VIH, la sífilis, la gonorrea, la
                clamidia y otras infecciones.
              </p>
            </div>
            <div className="itemIcon">
              <div>
                <img src={icono2} alt="icono" />
              </div>
              <p>
                Estas pruebas son cruciales para el diagnóstico temprano y el
                tratamiento de ETS, lo que contribuye a la prevención de la
                propagación de estas infecciones.
              </p>
            </div>
            <div className="itemIcon">
              <div>
                <img src={icono3} alt="icono" />
              </div>
              <p>
                Los tests para ETS pueden involucrar la toma de muestras de
                sangre, orina, secreciones genitales u otros tipos de muestras
                biológicas, dependiendo de la infección específica que se esté
                buscando.
              </p>
            </div>
            <div className="itemIcon">
              <div>
                <img src={icono4} alt="icono" />
              </div>
              <p>
                Las pruebas son confidenciales y generalmente se llevan a cabo
                en entornos médicos o clínicas especializadas, y los resultados
                son compartidos con el paciente de manera privada y
                confidencial.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECCION NOTICIAS HOME */}
      <div className="newsHomeContainer">
        <div className="newsContainer">
          <div className="contentNewsContainer">
            <div>
              <h3>¿Quieres aprender más sobre las <span className="blue">ETS</span>?</h3>
              <p className="blue">Visita nuestra seccion de noticias</p>
              <Link to="/noticias">
                <button>Ver noticias</button>
              </Link>
            </div>
          </div>
          <img src={newsBanner} alt="imagen de noticias" />
        </div>
      </div>

      {/* FOOTER DEL SITIO */}
      <Footer />
    </section>
  );
}

export default Home;
