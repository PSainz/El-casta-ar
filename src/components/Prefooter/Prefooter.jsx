import React from "react";
import "./Prefooter.scss";

function Preefoter() {
  const src = "./images/logo-footer.png";
  return (
    <div className="full-container-prefooter">
      <div className="container-prefooter">
        <div className="col1">
          <img src={src} alt="logo" />
          <ul className="texts-col1">
            <li>
              <p>El Castañar</p>
            </li>
            <li>
              <p>Avda Washington , S/N Parcelas 10-11</p>
            </li>
            <li>
              <p>Pelayos de la Presa Urbanizacion San Ramon 28680</p>
            </li>
            <li>
              <p>Madrid</p>
            </li>
            <li>
              <p>Spain</p>
            </li>
          </ul>
        </div>
        <div className="col2">
          <ul className="texts-col2">
            <li>
              <a href="/nuestro-espacio">NUESTRO ESPACIO</a>
            </li>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <p>jsainzd@gmail.com</p>
            </li>
            <li>
              <p>+34 609 113 212</p>
            </li>
          </ul>
        </div>
        <div className="col3">
          <ul className="texts-col3">
            <li>
              <p>AVISO LEGAL</p>
            </li>
            <li>
              <p>POLITICA DE COOKIES</p>
            </li>
            <li>
              <p>POLITICA DE PRIVACIDAD</p>
            </li>
            <li>
              <p>CUMPLIMIENTO</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Preefoter;
