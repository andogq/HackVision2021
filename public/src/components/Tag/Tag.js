import { Tag as TagButton } from './tagStyle'

const Tag = ({ tag, onClick }) => {
  return (
    <TagButton type="button" onClick={onClick}>
      {tag}
    </TagButton>
  )
}

export default Tag
