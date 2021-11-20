import { useState, useEffect } from 'react'
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
  'Resource Recovery',
  'Recycling Plant',
  'Other',
]
const db = getFirestore(app)

const MapView = () => {
  const [activePin, setActivePin] = useState()
  const [location, setLocation] = useState(defaultCenter)
  const [sites, setSites] = useState([])

  const getSites = async () => {
    let sites = []
    const querySnapshot = await getDocs(collection(db, 'sites'))
    querySnapshot.forEach((doc) => {
      sites.push(doc.data())
    })
    setSites(sites)
  }

  useEffect(() => {
    getSites()
  }, [])

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
          <TagContainer justify="flex-start">
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
