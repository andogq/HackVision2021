import { useLocation, useNavigate, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import app from "fire"

import { Button, Navigation } from 'components'

import {
  Container,
  Location,
} from './resultsStyle'

const materials = {
  'Plastic': [
    'Plastic',
  ],
  'Glass': [
    'Glass',
    'Picture frame',
    'Painting',
  ],
  'Paper': [
    'Paper',
    'Book',
    'Painting',
    'Art',
  ],
  'Cardboard': [
    'Box',
    'Cardboard',
    'Package',
  ],
  'Green Waste': [
    'Wood',
    'Vegetable',
    'Plant',
  ],
  'Oil': [
    'Oil',
  ],
  'Car Parts': [
    'Motor vehicle',
    'Auto part',
    'Automotive exhaust',
    'Automotive design',
  ],
  'Pallets': [
    'Wood',
  ],
  'eWaste': [
    'Audio equipment',
    'Technology',
    'Wire',
    'Gadget',
    'Electronic device',
  ],
  'Batteries': [
    'Technology',
    'Gadget',
    'Electronic device',
  ],
  'Scrap Metal': [
    'Motor vehicle',
    'Auto part',
    'Metal',
    'Nickel',
  ],
  'Clothing': [
    'Textile',
    'Pillow',
  ],
  'Bricks': [
    'Property',
  ],
  'Concrete': [
    'Concrete',
    'Asphalt',
  ],
  'Gas Bottles': [
    'Gas Bottle',
    'Gas',
  ],
  'Sand': [
    'Sand',
  ],
  'Soil': [
    'Soil',
    'Dirt',
  ],
  'Tyres': [
    'Automotive design',
    'Motor vehicle',
    'Automotive tire'
  ],
  'Cans': [
    'Can',
  ],
  'Paint': [
    'Paint',
  ],
  'Mattresses': [
    'Furniture',
    'Comfort',
    'Pillow',
  ],
}

const db = getFirestore(app)

const Results = () => {
  const { state: tags } = useLocation()
  const [sites, setSites] = useState([])
  const [validTags, setValidTags] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function loadSites() {
      let snapshot = await getDocs(collection(db, "sites"))

      setSites(snapshot.docs.map(doc => doc.data()))
    }

    loadSites()
  }, [])

  useEffect(() => {
    if (!tags) navigate("/camera")
    if (sites.length > 0) {
      // Iterate through each tag
      const matchedMaterials = Object.keys(materials)
        .filter(material => tags.some(tag => materials[material].includes(tag)))

      setValidTags(matchedMaterials.map(material => ({
        name: material,
        sites: sites.filter(site => site.accepts.includes(material))
      })))
    }
  }, [tags, sites, navigate])

  return (
    <Container>
      <h1>Results</h1>

      {validTags.length > 0 ? (
        <>
          <p>The following materials were detected in your image. If they don't match what you were expecting, take a <Link to="/camera">new photo</Link>.</p>
          {validTags.map(tag => (
            <div key={tag.name}>
              <h2>{tag.name}</h2>
              {tag.sites.map(site => (
                <Location key={site.name}>
                  <span>{site.name}</span>
                  <Button onClick={() => navigate("/map", { state: site })} small>View details</Button>
                </Location>
              ))}
            </div>
          ))}
        </>
      ) : (
        <div>We couldn't find anything in that image! Try taking a <Link to="/camera">new photo</Link>.</div>
      )}

      <Navigation />
    </Container>
  )
}

export default Results
