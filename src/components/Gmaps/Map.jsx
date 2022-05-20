import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin.jsx";
import "./Map.css";

const Map = () => {
  const location = {
    lat: 40.371237729677446,
    lng: -4.338948950094672,
  };
  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={10}
      >
        {/* <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        /> */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
