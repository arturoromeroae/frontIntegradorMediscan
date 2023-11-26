import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import post2 from "../img/post2.jpeg";

function Ets() {
  return (
    <section className="layout">
      {/* CABECERA DEL SITIO */}
      <Header />
      <div className="main">
        <h1 className="postTitle">
          ¿Qué son las enfermedades de transmisión sexual (ETS)?
        </h1>
        <div className="postImageContainer">
          <img className="postImage" src={post2} alt="imagen de post" />
        </div>
        <p className="postContent">
          Las enfermedades de transmisión sexual (ETS) o infecciones de
          transmisión sexual (ITS) son infecciones que se transmiten de una
          persona a otra a través del contacto sexual. El contacto suele ser
          vaginal, oral y anal. Pero a veces pueden transmitirse a través de
          otro contacto físico íntimo involucrando el pene, vagina, boca o ano.
          Esto se debe a que algunas ETS, como el herpes y el VPH, se transmiten
          por contacto de piel a piel.
          <br />
          <br />
          Algunas ETS pueden transmitirse de una persona embarazada al bebé, ya
          sea durante el embarazo o al dar a luz. Otras formas en que las ETS
          pueden propagarse incluyen durante la lactancia, a través de
          transfusiones de sangre o al compartir agujas.
          <br />
          <br />
          Hay más de 20 tipos de ETS, incluyendo:
          <ul>
            <li>Clamidia</li>
            <li>Herpes genital</li>
            <li>Gonorrea</li>
            <li>VIH y sida</li>
            <li>VPH</li>
            <li>Ladillas</li>
            <li>Sífilis</li>
            <li>Tricomoniasis</li>
          </ul>
          <h3>¿Qué causa las enfermedades de transmisión sexual?</h3>
          Las causas de las ETS pueden ser bacterias, virus y parásitos.
          <h3>
            ¿Quiénes se ven afectados por las enfermedades de transmisión
            sexual?
          </h3>
          La mayoría de las ETS afectan a hombres y a mujeres, pero en muchos
          casos los problemas de salud que causan pueden ser más graves en
          mujeres. Si una ETS pasa al bebé, puede causarle graves problemas de
          salud.
          <h3>
            ¿Cuáles son los síntomas de las enfermedades de transmisión sexual?
          </h3>
          Las ETS no siempre presentan síntomas, o solo pueden causar síntomas
          leves. Por lo mismo, es posible tener una infección y no saberlo. E
          incluso sin síntomas, las ETS pueden ser dañinas y se pueden
          transmitir a través de las relaciones sexuales.
          <br />
          <br />
          Si tiene síntomas, estos pueden incluir:
          <ul>
            <li>Secreción inusual del pene o la vagina</li>
            <li>Llagas o verrugas en el área genital</li>
            <li>Micción frecuente o dolorosa</li>
            <li>Picazón y enrojecimiento en el área genital</li>
            <li>Ampollas o llagas en o alrededor de la boca</li>
            <li>Olor vaginal anormal</li>
            <li>Picazón, dolor o sangrado anal</li>
            <li>Dolor abdominal</li>
            <li>Fiebre</li>
          </ul>
          <h3>¿Cómo se diagnostican las enfermedades de transmisión sexual?</h3>
          Si es sexualmente activo, hable con su profesional de la salud sobre
          su riesgo de contraer enfermedades de transmisión sexual y si necesita
          hacerse la prueba. Esto es especialmente importante, ya que muchas ETS
          no suelen causar síntomas.
          <br />
          <br />
          Algunas ETS pueden diagnosticarse durante un examen físico o mediante
          el examen microscópico de una llaga o líquido extraído de la vagina,
          el pene o el ano. Los análisis de sangre pueden diagnosticar otros
          tipos de ETS.
          <h3>
            ¿Cuáles son los tratamientos para las enfermedades de transmisión
            sexual?
          </h3>
          Los antibióticos pueden tratar las ETS causadas por bacterias o
          parásitos. No existe cura para las ETS causadas por un virus, pero a
          menudo los medicamentos pueden ayudar con los síntomas y reducir su
          riesgo de propagar la infección.
          <h3>
            ¿Se pueden prevenir las enfermedades de transmisión sexual (ETS)?
          </h3>
          El uso correcto de condones de látex reduce en gran medida, pero no
          elimina por completo, el riesgo de contraer o contagiar una ETS. Si
          usted o su pareja es alérgica al látex, puede usar condones de
          poliuretano. La forma más confiable de evitar una infección es no
          tener sexo anal, vaginal u oral.
          <br />
          <br />
          Existen vacunas para prevenir el VPH y la hepatitis B.
        </p>
      </div>

      {/* FOOTER DEL SITIO */}
      <Footer />
    </section>
  );
}

export default Ets;
