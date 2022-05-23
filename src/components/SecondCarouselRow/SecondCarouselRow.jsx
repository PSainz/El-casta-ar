import React from "react";
import "./SecondCarouselRow.scss";
import { dataImagesEspacio } from "../../utils/dataImagesEspacio";

function SecondCarouselRow() {
  return (
    <div className="SecondCarouselRow-wrapper">
      <div className="SecondCarouselRow-info">
        <h1>Eventos realizados</h1>
        <p>
          Sus 8.800 m2 de terreno son aptos para todos los eventos que puedas
          imaginar. Destacando su impresionante jardín,piscina climatizada,
          terraza y acceso directo privado al pantano de San Juan.
        </p>
        <p>
          Solicita presupuesto para más información sobre el espacio y el equipo
          de eventos de El Castañar se pondrá en contacto contigo en las
          próximas 24 horas.
        </p>
        <a href="/contact">CONTACTANOS</a>
      </div>
      <div className="carousel-second-row"></div>
    </div>
  );
}

export default SecondCarouselRow;
