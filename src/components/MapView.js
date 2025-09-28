import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapView() {
  const spillCoordinates = [29.9305, -90.0560];

  return (
    <MapContainer
      center={spillCoordinates}
      zoom={10}
      style={{ height: "100vh", width: "100%", borderRadius: "20px" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={spillCoordinates}>
        <Popup>
          Mississippi River Nurdle Spill <br />
          August 2, 2020
        </Popup>
      </Marker>
    </MapContainer>
  );
}
