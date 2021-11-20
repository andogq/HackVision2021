import { useState } from 'react'
import { Map, Navigation, Button, Tag, TagContainer } from 'components'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import app from 'fire'

import { AcceptsContainer, Container, PinDetails } from './mapStyle'

let defaultCenter = {
  lat: -37.80811940260482, // RMIT Building 80
  lng: 144.96263556935406,
  // lat: -33.8888062036364, // Sydney
  // lng: 151.18408587486766,
}

const siteTypes = [
  'Transfer Station',
  'Drop Off Point',
  'Recycling Plant',
  'Other',
]
const db = getFirestore(app)

async function getSites() {
  const querySnapshot = await getDocs(collection(db, 'sites'))
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data())
  })
}

getSites()

const sites = [
  {
    name: 'Darebin Resource Recovery Center',
    address: 'Kurnai Avenue, Reservoir VIC 3073',
    lat: -37.715784512691286,
    lng: 144.98359122149628,
    accepts: [
      'Cans',
      'Clothing',
      'Batteries',
      'eWaste',
      'Glass',
      'Paint',
      'Cardboard',
      'Scrap Metal',
      'Mattresses',
      'Whitegoods',
    ],
    type: 2,
  },
  {
    name: 'Moonee Valley Transfer Station',
    address: '188 Holmes Rd, Aberfeldie VIC 3040',
    lat: -37.75813999854208,
    lng: 144.90188040581572,
    accepts: [
      'Car Parts',
      'Pallets',
      'eWaste',
      'Batteries',
      'Cardboard',
      'Plastic',
      'Scrap Metal',
    ],
    type: 0,
  },
  {
    name: 'Yarra Recycling Centre',
    address: '168 Roseneath St, Clifton Hill VIC 3068',
    lat: -37.793861,
    lng: 145.000839,
    type: 2,
    accepts: [
      'eWaste',
      'Batteries',
      'Cardboard',
      'Plastic',
      'Scrap Metal',
      'Glass',
    ],
  },
  {
    name: 'Brooklyn Transfer Station',
    address: '174 Old Geelong Rd, Brooklyn VIC 3012',
    lat: -37.81844751923739,
    lng: 144.82881649431795,
    type: 0,
    accepts: [
      'Bricks',
      'Batteries',
      'Concrete',
      'Gas Bottles',
      'Sand',
      'Soil',
      'Tyres',
      'Whitegoods',
    ],
  },
  {
    name: 'Citywide Transfer Station',
    address: '437 Dynon Rd, West Melbourne VIC 3003',
    lat: -37.802628368485024,
    lng: 144.91380508928273,
    type: 0,
    accepts: [
      'Aerosol Cans',
      'Batteries',
      'eWaste',
      'Green Waste',
      'Glass',
      'Paper',
      'Oil',
      'Whitegoods',
    ],
  },
  {
    name: 'Visy Recycling',
    address: '46-48 Dohertys Rd, Laverton VIC 3025',
    lat: -37.82907954967732,
    lng: 144.80586777579185,
    type: 2,
    accepts: ['Paper', 'Cardboard'],
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

  const sorter = (inputA, inputB) => {
    let a = inputA.toLowerCase()
    let b = inputB.toLowerCase()
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else if (a === b) {
      return 0
    }
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
          <TagContainer  justify="flex-start">
            <Tag tag={siteTypes[activePin.type]} />
          </TagContainer>

          <AcceptsContainer>
            <span>Accepts:</span>
            <TagContainer justify="flex-start">
              {activePin.accepts
                .sort((a, b) => sorter(a, b))
                .map((waste, index) => (
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
