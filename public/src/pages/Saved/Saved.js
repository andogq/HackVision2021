import {
  Navigation,
  Post,
} from 'components'

import {
  Container,
} from './savedStyle'

import test from 'res/test.jpeg'

const Saved = () => (
  <Container>
    <Post author={{
      id: 0,
      name: 'John Deere',
      image_url: test,
    }} details={{
      id: 0,
      title: 'Test post',
      image_url: test,
      tags: ['test', 'recycle', 'challenge']
    }} saved />
    <Post author={{
      id: 0,
      name: 'John Deere',
      image_url: test,
    }} details={{
      id: 0,
      title: 'Test post',
      tags: ['test', 'recycle', 'challenge']
    }} saved />
    <Post author={{
      id: 0,
      name: 'John Deere',
      image_url: test,
    }} details={{
      id: 0,
      title: 'Test post',
      type: 'challenge',
      tags: ['test', 'recycle', 'challenge', 'with', 'lots', 'of', 'tags', 'lol', 'hackathon']
    }} saved />
    <Post author={{
      id: 0,
      name: 'John Deere',
      image_url: test,
    }} details={{
      id: 0,
      title: 'Test post',
      image_url: test,
      type: 'challenge',
      tags: ['test', 'recycle']
    }} saved />

    <Navigation />
  </Container>
)

export default Saved