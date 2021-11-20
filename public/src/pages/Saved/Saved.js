import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import app from 'fire'

import {
  Navigation,
  Post,
} from 'components'

import {
  Container,
} from './savedStyle'

const db = getFirestore(app)

const Saved = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      let posts = []
      const querySnapshot = await getDocs(collection(db, 'posts'))
      querySnapshot.forEach((doc) => {
        posts.push(doc.data())
      })
      setPosts(posts.filter(post => post.saved))
    }

    getPosts()
  }, [])

  return (
    <Container>
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

export default Saved