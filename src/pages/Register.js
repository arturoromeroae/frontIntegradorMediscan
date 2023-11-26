import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import registerBanner from "../img/register.png";
import { v4 as uuidv4 } from 'uuid';
import { format } from "date-fns";

function Register() {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // OBTENER LA FECHA ACTUAL DE PAGO
  const getFormattedCurrentDate = () => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, "MM/yyyy");
    return formattedDate;
  };

  // OBTENER LA FECHA DEL SIGUIENTE MES DE PAGO
  const getFormattedNextDate = () => {
    const currentDate = new Date();
    const nextMonthDate = new Date(currentDate);
    const formattedDate = format(nextMonthDate.setMonth(currentDate.getMonth() + 1), "dd/MM/yyyy");
    return formattedDate;
  };

  // SE DEFINE TODA LA DATA QUE SE ENVIARA AL API
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo_electronico: "",
    contrasenia: "",
    repetirContrasena: "",
    fecha_pago: getFormattedCurrentDate(),
    nextPaymentDate: getFormattedNextDate(),
    nroTarjeta: "",
    cvvTarjeta: "",
    id_compra: uuidv4().slice(0, 6),
  });

  // OBTENER LA DATA DE LOS INPUTS
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // FECHA DE EXPIRACION DE LA TARJETA
  const handleExpirationChange = (e) => {
    let { value } = e.target;

    // Eliminar caracteres no numéricos
    value = value.replace(/\D/g, '');

    // Agregar automáticamente el '/' después de los dos primeros dígitos
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    // Actualizar el estado correspondiente
    setFormData({
      ...formData,
      expiracionTarjeta: value,
    });
  };

  // FUNCION PARA ENVIAR TODA LA DATA AL API
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Realiza la petición a tu API
    try {
      const response = await axios.post("http://apimediscan.biz/v1/api/users/", {
        nombre: formData.nombre,
        apellido: formData.apellido,
        correo_electronico: formData.correo_electronico,
        contrasenia: formData.contrasenia,
        fecha_pago: formData.fecha_pago,
        id_compra: formData.id_compra,
        cvvTarjeta: formData.cvvTarjeta,
        nextPaymentDate: formData.nextPaymentDate,
        expiracionTarjeta: formData.expiracionTarjeta,
        activo: true,
      });

      let estado = response.status;

      if (estado === 201) {
        setModalOpen(false);
        document.body.classList.remove("modal-open");
        navigate("/registro-completado")
      }
    } catch (error) {
      console.error("Error al enviar la solicitud a la API:", error);
    }
  };

  // FUNCION PARA CERRAR EL MODAL
  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <section className="layout">
      {/* CABECERA DEL SITIO */}
      <Header />

      {/* CONTENEDOR DEL INICIO DE SESION */}
      <div className="registerContainer">
        <div className="registerBanner">
          <img src={registerBanner} alt="register banner" />
        </div>
        <div className="registerForm">
          <form>
            <h3>Registro</h3>
            <p>
              Regístrate ahora para desbloquear beneficios exclusivos y acceder
              a contenido premium. Conviértete en parte de nuestra comunidad
              activa, participa en eventos especiales y adapta tu experiencia a
              tus preferencias. Olvidaste tu contraseña? No te preocupes,
              nuestro proceso de recuperación es fácil y rápido. El registro es
              el primer paso hacia una experiencia única. <br />
              <br />
              <strong>¡Únete y descubre un mundo de posibilidades!</strong>
            </p>
            <input
              type="text"
              name="nombre"
              placeholder="Ingresa tu nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="apellido"
              placeholder="Ingresa tu apellido"
              value={formData.apellido}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="correo_electronico"
              placeholder="Ingresa tu correo electrónico"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="contrasenia"
              id="contrasenia"
              placeholder="Ingresa tu contraseña"
              value={formData.contrasenia}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="repetirContrasena"
              id="repetirContrasena"
              placeholder="Ingresa nuevamente tu contraseña"
              value={formData.repetirContrasena}
              onChange={handleInputChange}
            />
            <button onClick={(e) => {
              e.preventDefault();
              if (formData.contrasenia === formData.repetirContrasena) {
                setModalOpen(true);
              } else {
                // Obtener referencias a los elementos con los IDs proporcionados
                const contraseniaInput = document.getElementById("contrasenia");
                const repetirContrasenaInput = document.getElementById("repetirContrasena");

                // Agregar borde rojo
                contraseniaInput.style.border = "1px solid #ec2c7f";
                repetirContrasenaInput.style.border = "1px solid #ec2c7f";

                // Crear un elemento de texto para el mensaje
                const mensajeError = document.createElement("p");
                mensajeError.style.color = "#ec2c7f";
                mensajeError.innerHTML = "Las contraseñas no son iguales";

                // Insertar el elemento de texto debajo de los inputs
                contraseniaInput.parentNode.insertBefore(mensajeError.cloneNode(true), contraseniaInput.nextSibling);
                repetirContrasenaInput.parentNode.insertBefore(mensajeError, repetirContrasenaInput.nextSibling);
              }
            }}>Realizar pago</button>
            <Link to="/iniciar-sesion">Ya tengo una cuenta</Link>
          </form>
        </div>
      </div>

      {/* MODAL */}
      <Modal
        isOpen={isModalOpen}
        onAfterOpen={() => {
          setFormData((prevData) => ({
            ...prevData,
            fecha_pago: getFormattedCurrentDate(),
          }));
        }}
        onRequestClose={() => setModalOpen(false)}
        className="modalCard"
      >
        {/* Inputs adicionales dentro del modal */}
        <p className="close" onClick={handleCloseModal}>
          x
        </p>
        <div className="priceContainer">
          <h3>$10,00</h3>
          <div className="priceContainerComision">
            <p>Comision</p>
            <h4>$1,00</h4>
          </div>
          <div className="priceContainerTotal">
            <p>Total</p>
            <h4>$11,00</h4>
          </div>
          <hr />
          <div className="ContainerIdCompra">
            <div className="priceContainerIdCompra">
              <i className="fa-regular fa-money-bill-1"></i>
              <h4>ID de compra:</h4>
            </div>
            <h3>{formData.id_compra}</h3>
          </div>
          <div className="ContainerIdCompra">
            <div className="priceContainerIdCompra">
              <i className="fa-regular fa-calendar-days"></i>
              <h4>Siguente fecha de pago:</h4>
            </div>
            <h3>{formData.nextPaymentDate}</h3>
          </div>
        </div>
        <div className="payContainer">
          <h3>Datos de la Tarjeta</h3>
          <form>
            <input
              type="text"
              name="nroTarjeta"
              maxLength="16"
              placeholder="Número de tarjeta"
              value={formData.nroTarjeta}
              onChange={handleInputChange}
            />
            <div className="cardCvv">
              <div>
                <input
                  type="text"
                  name="expiracion"
                  placeholder="MM/YY"
                  maxLength="5"
                  value={formData.expiracion}
                  onChange={(e) => handleExpirationChange(e)}
                />
              </div>
              <div>
                <input
                  type="password"
                  maxLength="3"
                  placeholder="CVV"
                  name="cvvTarjeta"
                  value={formData.cvvTarjeta}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <input type="text" placeholder="Nombre" />
            <button onClick={handleFormSubmit}>Pagar $11,00</button>
          </form>
        </div>
      </Modal>

      {/* FOOTER DEL SITIO */}
      <Footer />
    </section>
  );
}

export default Register;
