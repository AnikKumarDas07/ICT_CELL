import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // To handle custom icons (optional)

import 'leaflet/dist/leaflet.css'; // Leaflet's default styling

const Map = () => {
  const position = [23.726616, 90.388994]; // Coordinates for the center of the map
  const zoom = 13; // Default zoom level

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <MapContainer center={position} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        {/* TileLayer - defines how the map tiles are displayed */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Marker - defines the marker position */}
        <Marker position={position}>
          <Popup>ECE Building <br /> 6th Floor</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;