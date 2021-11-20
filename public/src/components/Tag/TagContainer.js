import { TagWrapper } from './tagContainerStyle'

const TagContainer = ({ children, justify = 'flex-end' }) => (
  <TagWrapper justify={justify}>{children}</TagWrapper>
)

export default TagContainer
