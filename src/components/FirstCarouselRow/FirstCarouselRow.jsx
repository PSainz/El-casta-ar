import React from "react";
import { Carousel } from "react-carousel-minimal";
import "./FirstCarouselRow.scss";
import { dataImagesEspacio } from "../../utils/dataImagesEspacio";

function FirstCarouselRow() {
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="FirstCarouselRow-wrapper">
      <div className="carousel">
        <Carousel
          data={dataImagesEspacio}
          time={2000}
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="25px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </div>
      <div className="FirstCarouselRow-info">
        <h1>El espacio</h1>
        <p>
          Ideal para eventos, de todo tipo debido a la amplitud y versatilidad
          que posee.
        </p>
        <p>
          Podrás celebrar gran cantidad de eventos corporativos, tales como:
          conferencias, coaching, seminarios, formaciones, entregas de premios,
          ruedas de prensa, team building, juntas de accionistas, reuniones,
          exposiciones…
        </p>
        <p>
          Del mismo modo, es un lugar perfecto para eventos sociales y otro tipo
          de actividades: bautizos, comuniones, homenajes, bodas de plata y oro,
          cenas de gala, rodajes de cine y televisión, sesiones fotográficas,
          etc.
        </p>
        <p>
          Es un espacio muy versátil y con diferentes áreas por lo que el éxito
          del evento está garantizado.
        </p>
      </div>
    </div>
  );
}

export default FirstCarouselRow;
