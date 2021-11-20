import { Map, SiteCard } from 'components'
import { SiteContainer } from './mapStyle'

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
  },
  {
    name: 'Moonee Valley Transfer Station',
    address: '188 Holmes Rd, Aberfeldie VIC 3040',
    lat: -37.75813999854208,
    lng: 144.90188040581572,
    phone: '03 8325 1730',
    type: 'Transfer Station',
    accepts: ['eWaste', 'Batteries', 'Cardboard', 'Plastic', 'Scrap Metal'],
  },
]

const MapView = () => {
  return (
    <div>
      <Map defaultCenter={defaultCenter} zoom={14} pins={sites} />
      <SiteContainer>
        {sites.map((site) => (
          <SiteCard site={site} />
        ))}
      </SiteContainer>
    </div>
  )
}

export default MapView
