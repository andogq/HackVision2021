import { useEffect, useState } from 'react'
import Pin from './Pin'
import { MapContainer } from './mapStyle'

import GoogleMapReact from 'google-map-react'
// https://www.npmjs.com/package/google-map-react

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const Map = ({
  defaultCenter,
  zoom,
  pins,
  onClick,
  onPinClick,
  activePin,
  locationCallback,
}) => {
  const [center, setCenter] = useState(defaultCenter)

  const successfulLocate = (position) => {
    const { latitude, longitude } = position.coords
    const location = { lat: latitude, lng: longitude }
    setCenter(location)
    locationCallback(location) // passes current user position up to parent for getDirection button
  }

  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      successfulLocate,
      console.error
    )
  }

  useEffect(() => {
    if (activePin) {
      setCenter({
        lat: activePin.lat,
        lng: activePin.lng,
      })
    }
  }, [activePin])

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultCenter}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onClick={onClick}
        center={center}
      >
        {pins.map((pin) => (
          <Pin
            {...pin}
            key={pin.address}
            active={activePin?.address === pin.address}
            onClick={(e) => {
              e.stopPropagation()
              onPinClick(pin)
            }}
          />
        ))}
      </GoogleMapReact>
    </MapContainer>
  )
}

export default Map
