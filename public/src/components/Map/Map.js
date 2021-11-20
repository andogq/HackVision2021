import GoogleMapReact from "google-map-react"
import Pin from "./Pin"

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const Map = ({ location, zoom }) => (
  <div style={{ height: "100vh", width: "100%" }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: API_KEY }}
      defaultCenter={location}
      defaultZoom={zoom}
    >
      <Pin lat={location.lat} lng={location.lng} text={location.address} />
    </GoogleMapReact>
  </div>
)

export default Map
