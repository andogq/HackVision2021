import { Link } from 'react-router-dom'
import { Bookmark } from 'react-feather'
import {
  Wrapper,
  UserDetails,
  Title,
  Image,
  Tags,
  Challenge,
} from './postStyle'

const Post = ({
  author,
  details,
}) => {
  return (
    <Wrapper>
      <Link to={`/profile/${author.id}`}>
        <UserDetails>
          <img src={author.image_url} alt={author.name} />
          <span>{author.name}</span>
          <button type="button" title="Save" onClick={e => {
            e.preventDefault()
            console.log('bookmark')
          }}>
            <Bookmark />
          </button>
        </UserDetails>
      </Link>

      {details.type === 'challenge' ? (
        <Link to={`/post/${details.id}`}>
          <Challenge>
            {details.image_url && <img src={details.image_url} alt="" />}
            <span>{details.title}</span>
          </Challenge>
        </Link>
      ) : (
        <Link to={`/post/${details.id}`}>
          <Title>{details.title}</Title>
          {details.image_url && <Image src={details.image_url} alt="" />}
        </Link>
      )}

      {details.tags?.length > 0 && (
        <Tags>
          {details.tags.map(tag => (
            <button
              type="button"
              onClick={() => console.log('tag clicked', tag)}
              key={tag}
            >
              {tag}
            </button>
          ))}
        </Tags>
      )}
    </Wrapper>
  )
}

export default Post