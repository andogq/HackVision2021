import { Link } from 'react-router-dom'
import { Bookmark } from 'react-feather'
import {
  Wrapper,
  UserDetails,
  Title,
  Image,
} from './postStyle'
import { Tag, TagContainer, Challenge } from 'components'

const Post = ({ author, details, saved }) => {
  return (
    <Wrapper>
      <Link to={`/profile/${author.id}`}>
        <UserDetails>
          <img src={author.image_url} alt={author.name} />
          <span>{author.name}</span>
          <button
            type="button"
            title="Save"
            onClick={(e) => {
              e.preventDefault()
              console.log('bookmark')
            }}
            data-saved={saved}
          >
            {saved && 'Saved'}
            <Bookmark />
          </button>
        </UserDetails>
      </Link>

      {details.type === 'challenge' ? (
        <Challenge image={details.image_url} name={details.title} to={`/post/${details.id}`} />
      ) : (
        <Link to={`/post/${details.id}`}>
          <Title>{details.title}</Title>
          {details.image_url && <Image src={details.image_url} alt="" />}
        </Link>
      )}

      {details.tags?.length > 0 && (
        <TagContainer>
          {details.tags.map((tag) => (
            <Tag onClick={() => console.log('tag clicked', tag)} key={tag} tag={tag} />
          ))}
        </TagContainer>
      )}
    </Wrapper>
  )
}

export default Post