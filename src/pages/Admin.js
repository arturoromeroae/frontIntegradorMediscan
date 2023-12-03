import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import ban from "../img/admin.jpg"

const Admin = ({ username }) => {

    const [consultaData, setConsultaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://proyecto-web-331805.wl.r.appspot.com/api/consulta/findByEmail/${username}`
                );

                if (!response.ok) {
                    throw new Error("Error al obtener datos");
                }

                const result = await response.json();

                // Verifica que result sea un array antes de actualizar el estado
                setConsultaData(result);

            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="layout">
            {/* CONTENEDOR DEL INICIO DE SESION */}
            <div className="adminContainer">
                <img src={ban} alt="banner" />
                <h2>Bienvenido, {username} esta es tu consulta!</h2>

                {/* Tabla para mostrar la data */}
                <div className="tableContainer">
                    <table className="dataUserTable">
                        <thead>
                            <tr>
                                <th>Resultado de la Consulta</th>
                                <th>Email del Usuario</th>
                                <th>Fecha de Creación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{consultaData.resultadoConsulta}</td>
                                <td>{consultaData.usuarioEmail}</td>
                                <td>{consultaData.createAt}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* FOOTER DEL SITIO */}
            <Footer />
        </section>
    );
}

export default Admin;
