import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapView({ selectedSpill }) {
  return (
    <MapContainer
      center={selectedSpill ? selectedSpill.location : [20, 0]}
      zoom={selectedSpill ? 6 : 2}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectedSpill && (
        <Marker position={selectedSpill.location}>
          <Popup>
            <strong>{selectedSpill.name}</strong><br />
            {selectedSpill.description}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
