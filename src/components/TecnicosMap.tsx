"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Removendo MapContainerProps e TileLayerProps
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue with Leaflet and Webpack/Vite
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface Tecnico {
  id: string;
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  social_media: string;
  specialty: string;
  latitude?: number;
  longitude?: number;
}

interface TecnicosMapProps {
  tecnicos: Tecnico[];
}

const TecnicosMap: React.FC<TecnicosMapProps> = ({ tecnicos }) => {
  const defaultCenter: [number, number] = [-14.235, -53.1328]; // Center of Brazil
  const defaultZoom = 4;

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-border">
      <MapContainer center={defaultCenter} zoom={defaultZoom} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {tecnicos.map((tecnico) => (
          tecnico.latitude && tecnico.longitude ? (
            <Marker key={tecnico.id} position={[tecnico.latitude, tecnico.longitude]}>
              <Popup>
                <div className="font-semibold">{tecnico.name}</div>
                <div>{tecnico.title}</div>
                {tecnico.location && <div>{tecnico.location}</div>}
                {tecnico.specialty && <div className="text-sm text-muted-foreground">{tecnico.specialty}</div>}
                {tecnico.email && <a href={`mailto:${tecnico.email}`} className="text-blue-500 hover:underline block mt-1">{tecnico.email}</a>}
                {tecnico.phone && <a href={`tel:${tecnico.phone}`} className="text-blue-500 hover:underline block">{tecnico.phone}</a>}
              </Popup>
            </Marker>
          ) : null
        ))}
      </MapContainer>
    </div>
  );
};

export default TecnicosMap;