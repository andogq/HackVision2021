import { useState, useEffect } from 'react'
import { Filter, Search } from 'react-feather'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import app from 'fire'
import {
  Navigation,
  Post,
} from 'components'

import {
  Container,
  SearchWrapper,
} from './feedStyle'

const db = getFirestore(app)


const Feed = () => {
  const [q, setQ] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      let posts = []
      const querySnapshot = await getDocs(collection(db, 'posts'))
      querySnapshot.forEach((doc) => {
        posts.push(doc.data())
      })
      setPosts(posts)
      console.log('posts', posts)
    }

    getPosts()
  }, [])


  return (
    <Container>
      <SearchWrapper onSubmit={e => {
          e.preventDefault()
          console.log(q)
        }}>
        <input
          type="search"
          onChange={e => setQ(e.currentTarget.value)}
          value={q}
          placeholder="Search..."
        />
        <button type="submit" title="Search"><Search /></button>
        <button type="button" title="Filter"><Filter /></button>
      </SearchWrapper>


      {posts.map((post, index) => (
        <Post
          key={index}
          author={post.author}
          details={post.details}
          saved={post.saved}
        />
      ))}

      <Navigation />
    </Container>
  )
}

export default Feed