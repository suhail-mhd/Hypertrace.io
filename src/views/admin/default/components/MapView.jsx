import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapView = () => {
  const position = [51.505, -0.09];  // Latitude and Longitude for the initial position of the map

  const customIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    shadowSize: [41, 41],
  });

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      style={{ height: "500px", width: "100%" }}  // Set the size of the map
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          A simple popup on the marker.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;
