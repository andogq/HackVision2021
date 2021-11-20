import { Button } from 'components'
const SiteCard = ({ site }) => {
  // TODO turn li in badges
  return (
    <div>
      <h2>{site.name}</h2>
      <h3>{site.address}</h3>
      <p>Accepts:</p>
      <ul>
        {site.accepts.map((waste) => (
          <li>{waste}</li>
        ))}
      </ul>
      <Button onClick={() => getDirections(site)}>Directions</Button>
    </div>
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

export default SiteCard
