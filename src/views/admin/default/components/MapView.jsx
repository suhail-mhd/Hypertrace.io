import React, { useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

export default function MapView() {
  const [coords, setCoords] = useState({});
  const [distance, setDistance] = useState(0);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude, accuracy } = position.coords;
      setCoords({ lat: latitude, lng: longitude });
      setDistance(accuracy);
    });
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCRjxvetIo04UN5kgxWs7g1EzcIj24wSo0",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps ...</div>;
  }

  return isLoaded ? (
    <GoogleMap
    mapContainerStyle={mapContainerStyle}
    center={coords}
    zoom={10}
  >
    <Marker position={coords} />
  </GoogleMap>
  ) : <></>
}