import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, Settings } from 'react-feather'
import { useProfileStore } from 'stores'

import {
  Navigation,
  Challenge,
} from 'components'

import {
  Container,
  ActionBar,
  UserInfo,
  Recycled,
  Content,
  Badges,
  Tabs,
} from './profileStyle'

import test from 'res/avatars/john.jpg'

const user = {
  name: 'John Deere',
  image_url: test,
}

const Profile = () => {
  const signOut = useProfileStore(state => state.signOut)
  const navigate = useNavigate()
  const [tab, setTab] = useState('stats')

  return (
    <Container>
      <ActionBar>
        <button
          type="button"
          title="Log out"
          onClick={async () => {
            await signOut()
            navigate('/')
          }}
        ><LogOut /></button>
        <button
          type="button"
          title="Settings"
          onClick={() => {
            console.log('settings')
          }}
        ><Settings /></button>
      </ActionBar>

      <UserInfo>
        <img src={user?.image_url} alt={user?.name} />
        <h1>{user?.name}</h1>
      </UserInfo>

      <Tabs>
        <button type="button" onClick={() => setTab('stats')} data-active={tab === 'stats'}>Statistics</button>
        <button type="button" onClick={() => setTab('badges')} data-active={tab === 'badges'}>Badges</button>
      </Tabs>

      {tab === 'stats' ? (
        <Content>
          <h2>Recycled</h2>
          <Recycled>
            <div>
              <img src={test} alt="" />
              <span>56 milk cartons</span>
            </div>
            <div>
              <img src={test} alt="" />
              <span>23 plastic bottles</span>
            </div>
            <div>
              <img src={test} alt="" />
              <span>12 cardboard boxes</span>
            </div>
          </Recycled>

          <h2>Active Challenges</h2>
          <Challenge image={test} name="Recycle Your Glass Jars" />
          <Challenge image={test} name="Recycle Your Newspapers" />
        </Content>
      ) : (
        <Content>
          <h2>Badges</h2>
          <Badges>
            <div>
              <img src={test} alt="" />
              <span>Recycled 50 milk cartons</span>
            </div>
            <div>
              <img src={test} alt="" />
              <span>Recycled 10 boxes</span>
            </div>
            <div>
              <img src={test} alt="" />
              <span>Recycled 20 plastic bottles</span>
            </div>
            <div>
              <img src={test} alt="" />
              <span>Master of DIY</span>
            </div>
            <div>
              <img src={test} alt="" />
              <span>Donated old clothes</span>
            </div>
          </Badges>
        </Content>
      )}

      <Navigation />
    </Container>
  )
}

export default Profile