import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Footer from "./components/Footer";
import registerBanner from "../img/register.png";
import { v4 as uuidv4 } from 'uuid';
//import { format } from "date-fns";

function Register() {

  // OBTENER LA FECHA ACTUAL DE PAGO
  const getFormattedCurrentDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    return formattedDate;
  };

  // OBTENER LA FECHA DEL SIGUIENTE MES DE PAGO
  const getFormattedNextDate = () => {
    const currentDate = new Date();
    const nextMonthDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    const formattedDate = nextMonthDate.toISOString();
    return formattedDate;
  };

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

  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // SE DEFINE TODA LA DATA QUE SE ENVIARA AL API
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    fechaPago: getFormattedCurrentDate(),
    nextPaymentDate: getFormattedNextDate(),
    numTarjeta: "",
    cvvTarjeta: "",
    idCompra: uuidv4().slice(0, 6),
    expiracionTarjeta: "",
    activo: true,
    roles: [
      {
        id: 1,
        name: "ROLE_USER"
      }
    ]
  });

  // FUNCION PARA ENVIAR TODA LA DATA AL API
  const handleFormSubmit = async (e) => {
    e.preventDefault();


    // Realiza la petición a tu API
    try {
      const response = await fetch('https://authproject-406922.wl.r.appspot.com/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalOpen(false);
        document.body.classList.remove("modal-open");
        console.log('Usuario registrado exitosamente');
        navigate("/iniciar-sesion");
      } else {
        console.error('Error al registrar usuario');
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        console.error("Error: Acceso prohibido. Verifica tus credenciales.");
      } else {
        console.error('Error en la llamada a la API:', error);
      }
    }
  };

  // FUNCION PARA CERRAR EL MODAL
  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
      <section className="layout">

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
                  name="name"
                  placeholder="Ingresa tu nombre"
                  value={formData.name}
                  onChange={handleInputChange} required
              />
              <input
                  type="text"
                  name="username"
                  placeholder="Ingresa tu usuario"
                  value={formData.username}
                  onChange={handleInputChange} required
              />
              <input
                  type="email"
                  name="email"
                  placeholder="Ingresa tu correo electrónico"
                  value={formData.email}
                  onChange={handleInputChange} required
              />
              <input
                  type="password"
                  name="password"
                  id="contrasenia"
                  placeholder="Ingresa tu contraseña"
                  value={formData.password}
                  onChange={handleInputChange} required
              />
              <button onClick={(e) => {
                e.preventDefault(); setModalOpen(true);
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
              <h3>{formData.idCompra}</h3>
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
                  name="numTarjeta"
                  maxLength="16"
                  placeholder="Número de tarjeta"
                  value={formData.numTarjeta}
                  onChange={handleInputChange} required
              />
              <div className="cardCvv">
                <div>
                  <input
                      type="text"
                      name="expiracionTarjeta"
                      placeholder="MM/YY"
                      maxLength="7"
                      value={formData.expiracionTarjeta}
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
                      onChange={handleInputChange} required
                  />
                </div>
              </div>
              <button type="button" onClick={handleFormSubmit}>Pagar $11,00</button>
            </form>
          </div>
        </Modal>

        {/* FOOTER DEL SITIO */}
        <Footer />
      </section>
  );
}

export default Register;
