import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import chatbotBanner from "../img/chatbot.png";
import Lottie from "lottie-react";
import arrow from "../img/animations/arrow.json";

function Preguntas() {
  return (
    <section className="layout">
      {/* CONTENEDOR DEL CHATBOT */}
      <div className="questionsMainContainer">
        <img src={chatbotBanner} alt="banner de chatbot" />
        <div>
          <h3>
            ¡Verifique sus síntomas con nuestro{" "}
            <span className="pink">ChatBot</span>!
          </h3>
          <p>
            Realice una breve (3 min) evaluación de sus síntomas. La información
            que proporcione está segura y no será compartida.
          </p>
          <p>Sus resultados incluirán:</p>
          <ul>
            <li>
              <i className="fas fa-check"></i> Posibles causas de sus síntomas.
            </li>
            <li>
              <i className="fas fa-check"></i> Recomendaciones sobre qué hacer a
              continuación.
            </li>
          </ul>
        </div>
      </div>

      {/* INDICADOR CHATBOT */}
      <div className="indicadorChatbotContainer">
        <div className="indicadorChatbot">
          <Lottie animationData={arrow} loop={true} />
        </div>
      </div>

      {/* CHATBOT */}
      <Chatbot />

      {/* FOOTER DEL SITIO */}
      <Footer />
    </section>
  );
}

export default Preguntas;
