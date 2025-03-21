"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: "100%",
  height: "16.75rem",
};

const center = {
  lat: 35.66680824442341,
  lng: 139.7421143576228,
};

interface MyMapProps extends React.HTMLProps<HTMLDivElement> {
  customProp?: string;
}

export default function MyMap(props: MyMapProps) {
  return (
    <div {...props}>
      <LoadScript googleMapsApiKey={apiKey} language="ja">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          mapTypeId="roadmap"
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            rotateControl: false,
          }}
        >
          <Marker position={center} aria-label="Map center marker" />
          {/* Assuming zoom controls are exposed, you can add aria-labels */}
          <div role="button" aria-label="Zoom in" className="zoom-in-button">
            {/* Your Zoom In button code */}
          </div>
          <div role="button" aria-label="Zoom out" className="zoom-out-button">
            {/* Your Zoom Out button code */}
          </div>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
