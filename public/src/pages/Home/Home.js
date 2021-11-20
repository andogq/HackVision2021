import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>GreenSnap</h1>

    <p>How it works</p>
    <p>Some info</p>

    <p>
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
    </p>
  </div>
)

export default Home
