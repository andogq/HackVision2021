import { Link } from 'react-router-dom'
import { Wrapper } from './challengeStyle'

const Challenge = ({ image, name, to = '#' }) => (
  <Link to={to} style={{
    color: 'inherit',
    textDecoration: 'none',
  }}>
    <Wrapper>
      {image && <img src={image} alt="" />}
      <span>{name}</span>
    </Wrapper>
  </Link>
)

export default Challenge