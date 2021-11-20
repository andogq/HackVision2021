import { useState } from 'react'
import { Filter, Search } from 'react-feather'

import {
  Navigation,
  Post,
} from 'components'

import {
  Container,
  SearchWrapper,
} from './feedStyle'

import test from 'res/test.jpeg'

const Feed = () => {
  const [q, setQ] = useState('')

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

      <Post author={{
        id: 0,
        name: 'John Deere',
        image_url: test,
      }} details={{
        id: 0,
        title: 'Test post',
        image_url: test,
        tags: ['test', 'recycle', 'challenge']
      }} />
      <Post author={{
        id: 0,
        name: 'John Deere',
        image_url: test,
      }} details={{
        id: 0,
        title: 'Test post',
        tags: ['test', 'recycle', 'challenge']
      }} />
      <Post author={{
        id: 0,
        name: 'John Deere',
        image_url: test,
      }} details={{
        id: 0,
        title: 'Test post',
        type: 'challenge',
        tags: ['test', 'recycle', 'challenge', 'with', 'lots', 'of', 'tags', 'lol', 'hackathon']
      }} />
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
}

export default Feed