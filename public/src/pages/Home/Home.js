import { Navigation, Map } from "components"

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
}

const Home = () => (
  <div>
    <h1>Home page</h1>

    <Navigation />
    <Map location={location} zoom={4} />
  </div>
)

export default Home
