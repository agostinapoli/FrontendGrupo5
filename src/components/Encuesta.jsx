import React from "react";
import datosEncuesta from "../data/encuesta.json";

const Encuesta = () => {
    

  return (
    <section className="seccion-encuesta">
      <h2 className="titulo-encuesta">Encuesta del equipo</h2>
      <div className="contenedor-encuesta">
        {datosEncuesta.map((item, index) => (
          <div key={index} className="tarjeta-encuesta">
            <h3>{item.nombre}</h3>
            <p><strong>{item.pregunta}</strong></p>
            <p>{item.respuesta}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Encuesta;
