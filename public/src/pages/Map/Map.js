import { useState } from 'react'
import { Map, Navigation, Button } from 'components'

import { Container, PinDetails } from './mapStyle'

let defaultCenter = {
  // lat: -37.80811940260482, // RMIT
  // lng: 144.96263556935406,
  lat: -33.8888062036364, // Sydney
  lng: 151.18408587486766,
}

const successfulLocate = (position) => {
  const { latitude, longitude } = position.coords
  defaultCenter = { lat: latitude, lng: longitude }
  console.log('defaultCenter', defaultCenter)
  // TODO this is working but not updating correctly
}

if (window.navigator.geolocation) {
  window.navigator.geolocation.getCurrentPosition(
    successfulLocate,
    console.error
  )
}

const getDirections = (site) => {
  let currentLocation = `${defaultCenter.lat}+${defaultCenter.lng}+`
  let destination = `${site.name}+${site.address}`
  destination = destination.replace(/\s/g, '+')
  window.open(
    `https://www.google.com.au/maps/dir/${currentLocation}/${destination}`,
    '_blank'
  )
}

const sites = [
  {
    name: 'Darebin Resource Recovery Center',
    address: 'Kurnai Avenue, Reservoir VIC 3073',
    lat: -37.715784512691286,
    lng: 144.98359122149628,
    accepts: ['eWaste', 'Batteries', 'Cardboard', 'Plastic', 'Scrap Metal'],
    type: 2,
  },
  {
    name: 'Moonee Valley Transfer Station',
    address: '188 Holmes Rd, Aberfeldie VIC 3040',
    lat: -37.75813999854208,
    lng: 144.90188040581572,
    phone: '03 8325 1730',
    accepts: ['eWaste', 'Batteries', 'Cardboard', 'Plastic', 'Scrap Metal'],
    type: 0,
  },
  {
    name: 'Yarra Recycling Centre',
    address: '168 Roseneath St, Clifton Hill VIC 3068',
    lat: -37.793861,
    lng: 145.000839,
    type: 2,
    accepts: ['eWaste', 'Batteries', 'Cardboard', 'Plastic', 'Scrap Metal'],
  },
]

const MapView = () => {
  const [activePin, setActivePin] = useState()

  return (
    <Container>
      <Map
        defaultCenter={defaultCenter}
        zoom={11}
        pins={sites}
        activePin={activePin}
        onClick={() => setActivePin(null)}
        onPinClick={(pin) => setActivePin(pin)}
      />

      {activePin && (
        <PinDetails>
          <h1>{activePin.name}</h1>
          <span>{activePin.address}</span>
          <p>Accepts:</p>
          <ul>
            {activePin.accepts.map((waste) => (
              <li>{waste}</li>
            ))}
          </ul>
          <Button onClick={() => getDirections(activePin)}>Directions</Button>
        </PinDetails>
      )}

      <Navigation />
    </Container>
  )
}

export default MapView
