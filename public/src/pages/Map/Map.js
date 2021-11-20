import { useState } from 'react'

import { Map, Navigation } from 'components'

import {
  Container,
} from './mapStyle'

const defaultCenter = {
  name: "RMIT Building 80",
  address: "445 Swanston Street Melbourne",
  lat: -37.80811940260482,
  lng: 144.96263556935406,
}
const pins = [
  {
    name: "Darebin Resource Recovery Center",
    address: "Kurnai Avenue, Reservoir VIC 3073",
    lat: -37.715784512691286,
    lng: 144.98359122149628,
    type: 2,
  },
  {
    name: "Moonee Valley Transfer Station",
    address: "188 Holmes Rd, Aberfeldie VIC 3040",
    lat: -37.75813999854208,
    lng: 144.90188040581572,
    type: 0,
  },
  {
    name: "Yarra Recycling Centre",
    address: "168 Roseneath St, Clifton Hill VIC 3068",
    lat: -37.793861,
    lng: 145.000839,
    type: 2,
  },
]

const MapView = () => {
  const [activePin, setActivePin] = useState()

  return (
    <Container>
      <Map
        defaultCenter={defaultCenter}
        zoom={11}
        pins={pins}
        activePin={activePin}
        onClick={() => setActivePin(null)}
        onPinClick={pin => setActivePin(pin)}
      />

      <Navigation />
    </Container>
  )
}

export default MapView
