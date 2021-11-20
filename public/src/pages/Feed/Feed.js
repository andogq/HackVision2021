import { useState } from 'react'
import { Filter, Search } from 'react-feather'

import {
  Navigation,
} from 'components'

import {
  Container,
  SearchWrapper,
} from './feedStyle'

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

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi architecto. Tempore sapiente corrupti illum architecto tenetur deserunt fugiat impedit ex! Quos officiis quo, quisquam vero dolores perferendis consequuntur nihil.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi architecto. Tempore sapiente corrupti illum architecto tenetur deserunt fugiat impedit ex! Quos officiis quo, quisquam vero dolores perferendis consequuntur nihil.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi architecto. Tempore sapiente corrupti illum architecto tenetur deserunt fugiat impedit ex! Quos officiis quo, quisquam vero dolores perferendis consequuntur nihil.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi architecto. Tempore sapiente corrupti illum architecto tenetur deserunt fugiat impedit ex! Quos officiis quo, quisquam vero dolores perferendis consequuntur nihil.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi architecto. Tempore sapiente corrupti illum architecto tenetur deserunt fugiat impedit ex! Quos officiis quo, quisquam vero dolores perferendis consequuntur nihil.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi architecto. Tempore sapiente corrupti illum architecto tenetur deserunt fugiat impedit ex! Quos officiis quo, quisquam vero dolores perferendis consequuntur nihil.</p>

      <Navigation />
    </Container>
  )
}

export default Feed