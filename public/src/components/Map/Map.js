import Pin from "./Pin"
import { MapContainer } from "./mapStyle"

import GoogleMapReact from "google-map-react"
// https://www.npmjs.com/package/google-map-react

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const Map = ({ defaultCenter, zoom, pins }) => {
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultCenter}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        {pins.map((pin) => (
          <Pin {...pin} />
        ))}
      </GoogleMapReact>
    </MapContainer>
  )
}

export default Map
