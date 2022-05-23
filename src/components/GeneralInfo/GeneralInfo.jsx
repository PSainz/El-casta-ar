import React from "react";
import "./GeneralInfo.scss";

function GeneralInfo() {
  return (
    <div className="container-GeneralInfo">
      <div className="texts-generalInfo">
        <p>
          Situado en una urbanización privada en el Pantano de San Juan a 40
          minutos de Madrid capital se encuentra El Castañar, un amplio espacio
          que se adaptará a todo tipo de eventos.{" "}
        </p>
        <p>
          Envuelto en un entorno tranquilo, acogedor y rodeado de naturaleza.
        </p>
        <p>
          Sus 8.800 m2 de terreno podrán dar cabida a unos 150 invitados,
          destacando su impresionante jardín, piscina climatizada, terraza y
          acceso directo privado al pantano de San Juan.
        </p>
        <p>
          Un enclave único, dispuesto a abrir sus puertas para que puedas
          disfrutar de ese día tan especia.
        </p>
        <p>Solo nos faltas tú …</p>
      </div>
      <a href="/nuestro-espacio">VISITANOS</a>
    </div>
  );
}

export default GeneralInfo;
