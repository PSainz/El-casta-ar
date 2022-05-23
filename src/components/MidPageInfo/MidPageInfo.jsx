import React from "react";
import "./MidPageInfo.scss";

function MidPageInfo() {
  const user = "./images/users.svg";
  const mountain = "./images/mountain.svg";
  return (
    <div className="container-MidPageInfo">
      <div className="container-users">
        <img className="users" src={user} alt="user" />
        <h1>CAPACIDAD MÁXIMA DE 150 PERSONAS</h1>
      </div>
      <div className="container-mountain">
        <img className="mountain" src={mountain} alt="moutain" />
        <h1>8.800 M2 DE TERRENO</h1>
      </div>
    </div>
  );
}

export default MidPageInfo;
