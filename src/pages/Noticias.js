import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import news from "../img/news.png";
import post1 from "../img/post1.jpeg";
import post2 from "../img/post2.jpeg";
import post3 from "../img/post3.jpeg";

function Noticias() {
  return (
    <section className="layout">
      {/* CABECERA DEL SITIO */}
      <Header />
      <div className="main">
        <div className="titleContainer">
          <img src={news} alt="banner noticias" />
          <h1>Noticias</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer t
          </p>
        </div>
        <div className="postsContainer">
          <div className="post">
            <img src={post1} alt="post 1" />
            <p className="postDate">10 Nov 2023</p>
            <h3>Infecciones de transmisión sexual</h3>
            <p>
              Cada día, más de un millón de personas contraen una infección de
              transmisión sexual (ITS); la mayoría de los casos son
              asintomáticos...
            </p>
            <Link to="/infecciones">
              <button>Leer Noticia</button>
            </Link>
          </div>
          <div className="post">
            <img src={post2} alt="post 2" />
            <p className="postDate">10 Nov 2023</p>
            <h3>¿Qué son las enfermedades de transmisión sexual (ETS)?</h3>
            <p>
              Las enfermedades de transmisión sexual (ETS) o infecciones de
              transmisión sexual (ITS) son infecciones que se transmiten de una
              persona a otra a través del contacto sexual...
            </p>
            <Link to="/que-son-ets">
              <button>Leer Noticia</button>
            </Link>
          </div>
          <div className="post">
            <img src={post3} alt="post 3" />
            <p className="postDate">10 Nov 2023</p>
            <h3>Vacuna contra el VPH</h3>
            <p>
              Hay una vacuna disponible para prevenir los tipos de virus del
              papiloma humano (VPH) que causan tanto la mayoría de los cánceres
              de cuello uterino, como algunos de los cánceres de ano, vulva...
            </p>
            <Link to="/vph">
              <button>Leer Noticia</button>
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER DEL SITIO */}
      <Footer />
    </section>
  );
}

export default Noticias;
