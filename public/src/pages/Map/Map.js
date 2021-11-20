import { useState } from 'react'
import { Map, Navigation, Button, Tag, TagContainer } from 'components'

import { AcceptsContainer, Container, PinDetails } from './mapStyle'

let defaultCenter = {
  // lat: -37.80811940260482, // RMIT
  // lng: 144.96263556935406,
  lat: -33.8888062036364, // Sydney
  lng: 151.18408587486766,
}

const siteTypes = [
  'Transfer Station',
  'Drop Off Point',
  'Recycling Plant',
  'Other',
]

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
  const [location, setLocation] = useState(defaultCenter)

  const getDirections = (site) => {
    let currentLocation = `${location.lat}+${location.lng}`
    let destination = `${site.name}+${site.address}`
    destination = destination.replace(/\s/g, '+')
    window.open(
      `https://www.google.com.au/maps/dir/${currentLocation}/${destination}`,
      '_blank'
    )
  }

  return (
    <Container>
      <Map
        defaultCenter={defaultCenter}
        zoom={11}
        pins={sites}
        activePin={activePin}
        onClick={() => setActivePin(null)}
        onPinClick={(pin) => setActivePin(pin)}
        locationCallback={(location) => setLocation(location)}
      />

      {activePin && (
        <PinDetails>
          <h1>{activePin.name}</h1>
          <span>{activePin.address}</span>
          <Tag tag={siteTypes[activePin.type]} />
          <AcceptsContainer>
            <span>Accepts:</span>
            <TagContainer justify="flex-start">
              {activePin.accepts.map((waste, index) => (
                <Tag
                  key={index}
                  tag={waste}
                  onClick={() => console.log('tag clicked', waste)}
                />
              ))}
            </TagContainer>
          </AcceptsContainer>
          <Button onClick={() => getDirections(activePin)}>Directions</Button>
        </PinDetails>
      )}

      <Navigation />
    </Container>
  )
}

export default MapView
