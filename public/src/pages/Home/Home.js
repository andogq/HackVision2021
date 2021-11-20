import { Link } from 'react-router-dom'
import { Button } from 'components'

import { Container, Logo, Buttons } from './homeStyle'

import logo from 'res/logo.svg'

const Home = () => (
  <Container>
    <Link to="/feed"><Logo src={logo} alt="" /></Link>
    <h1>GreenSnap</h1>

    <p>GreenSnap is an eco-conscious app that helps you do your part for the environment.</p>
    <p>Snap a photo of your waste and GreenSnap will tell you where to recycle it.</p>
    <p>See local recycling tips from the community and participate in challenges to earn badges.</p>
    <p>Get started today:</p>

    <Buttons>
      <Link to="/login"><Button>Login</Button></Link>
      <Link to="/signup"><Button>Signup</Button></Link>
    </Buttons>
  </Container>
)

export default Home
