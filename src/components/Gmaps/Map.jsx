import React from "react";
import GoogleMapReact from "google-map-react";
// import LocationPin from "./LocationPin.jsx";
import "./Map.css";

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS;
const Map = () => {
  const location = {
    lat: 40.371237729677446,
    lng: -4.338948950094672,
  };
  return (
    <div class="wrapper-google-map">
      <div className="google-map">
        <GoogleMapReact
          mapId="be82578e9233c612"
          yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={location}
          defaultZoom={10}
        >
          {/* <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.add
            ress}
        /> */}
          {/* <Marker position={{ lat: 9.761927, lng: 79.95244 }} /> */}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
