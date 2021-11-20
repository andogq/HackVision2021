import Pin from "./Pin"

import GoogleMapReact from "google-map-react"
// https://www.npmjs.com/package/google-map-react

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const Map = ({ defaultCenter, zoom, pins }) => (
  <div style={{ height: "100vh", width: "100%" }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: API_KEY }}
      defaultCenter={defaultCenter}
      defaultZoom={zoom}
    >
      <Pins pins={pins} />
    </GoogleMapReact>
  </div>
)

const Pins = ({ pins }) => {
  return pins
    ? pins.map((pin) => <Pin lat={pin.lat} lng={pin.lng} text={pin.address} />)
    : null
}

export default Map
