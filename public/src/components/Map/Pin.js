import { Container, MapPin } from './pinStyle'

const TYPES = {
  0: '#E53935',
  1: '#FF9800',
  2: '#4CAF50',
  3: '#757575',
}

const Pin = ({ type, onClick, active }) => (
  <Container onClick={onClick} data-active={active}>
    <MapPin style={{
      '--pin-color': TYPES[type],
    }} />
  </Container>
)

export default Pin
