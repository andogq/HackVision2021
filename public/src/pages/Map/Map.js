import { useState } from 'react'
import { Map, Navigation, Button } from 'components'

import { Container, PinDetails } from './mapStyle'

const defaultCenter = {
  name: 'RMIT Building 80',
  address: '445 Swanston Street Melbourne',
  lat: -37.80811940260482,
  lng: 144.96263556935406,
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
          <span>Accepts:</span>
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

const getDirections = (site) => {
  // TODO get geo location
  const currentLocation =
    'RMIT+University+-+Building+80,+Swanston+Street,+Melbourne+VIC'
  let destination = `${site.name}+${site.address}`
  destination = destination.replace(/\s/g, '+')
  window.open(
    `https://www.google.com.au/maps/dir/${currentLocation}/${destination}`,
    '_blank'
  )
}

export default MapView
