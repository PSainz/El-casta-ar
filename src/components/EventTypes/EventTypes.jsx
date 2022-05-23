import React from "react";
import "./EventTypes.scss";

function EventTypes() {
  return (
    <div className="full-container-EventTypes">
      <h1>Tipos de eventos</h1>
      <div className="container-EventTypes">
        <div className="left">
          <h2>Particulares</h2>
          <ul>
            <li>Bodas / Bodas de oro</li>
            <li>Bautizos y comuniones</li>
            <li>Cenas de gala</li>
            <li>Homenajes</li>
            <li>Graduaciones</li>
          </ul>
        </div>
        <div className="margin"></div>
        <div className="right">
          <h2>Empresas</h2>
          <ul>
            <li>Reuniones y exposiciones</li>
            <li>Juntas de accionistas</li>
            <li>Team Building</li>
            <li>Sesiones fotográficas</li>
            <li>Rodajes</li>
          </ul>
        </div>
      </div>
      <a href="/contact">RESERVA TU CITA</a>
    </div>
  );
}

export default EventTypes;
