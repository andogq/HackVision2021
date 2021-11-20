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
  },
  {
    name: "Moonee Valley Transfer Station",
    address: "188 Holmes Rd, Aberfeldie VIC 3040",
    lat: -37.75813999854208,
    lng: 144.90188040581572,
  },
]

const MapView = () => {
  return (
    <Container>
      <Map defaultCenter={defaultCenter} zoom={11} pins={pins} />

      <Navigation />
    </Container>
  )
}

export default MapView
