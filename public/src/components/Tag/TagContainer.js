import { TagWrapper } from './tagContainerStyle'

const TagContainer = ({ children, justify }) => (
  <TagWrapper justify={justify || 'flex-end'}>{children}</TagWrapper>
)

export default TagContainer
