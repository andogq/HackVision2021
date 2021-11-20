import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import {
  Compass,
  MapPin,
  Camera,
  Bookmark,
  User,
} from 'react-feather'

import {
  Wrapper,
  StyledItem,
} from './navigationStyle'

const Item = ({
  icon,
  label,
  to,
  primary,
}) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link to={to} title={label}>
      <StyledItem data-primary={primary} data-active={!!match}>
        <div>{icon}</div>
        <span>{label}</span>
      </StyledItem>
    </Link>
  )
}

const Navigation = () => (
  <Wrapper>
    <Item
      icon={<Compass />}
      to="/feed"
      label="Feed"
    />
    <Item
      icon={<MapPin />}
      to="/map"
      label="Map"
    />
    <Item
      icon={<Camera />}
      to="/camera"
      label="Camera"
      primary
    />
    <Item
      icon={<Bookmark />}
      to="/saved"
      label="Saved"
    />
    <Item
      icon={<User />}
      to="/profile"
      label="Profile"
    />
  </Wrapper>
)

export default Navigation