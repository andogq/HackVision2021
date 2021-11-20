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

import john from 'res/avatars/john.jpg'
import bottles from 'res/posts/bottles2.jpg'
import cardboard from 'res/posts/cardboard.jpg'
import light from 'res/posts/light.jpg'
import plants from 'res/posts/plants.jpg'
import eWaste from 'res/posts/eWaste.jpg'
import milk from 'res/posts/milk.jpg'
import newspaper from 'res/posts/newspaper.jpg'

const user = {
  name: 'John Deere',
  image_url: john,
}

const Profile = () => {
  const signOut = useProfileStore((state) => state.signOut)
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
        >
          <LogOut />
        </button>
        <button
          type="button"
          title="Settings"
          onClick={() => {
            console.log('settings')
          }}
        >
          <Settings />
        </button>
      </ActionBar>

      <UserInfo>
        <img src={user?.image_url} alt={user?.name} />
        <h1>{user?.name}</h1>
      </UserInfo>

      <Tabs>
        <button
          type="button"
          onClick={() => setTab('stats')}
          data-active={tab === 'stats'}
        >
          Statistics
        </button>
        <button
          type="button"
          onClick={() => setTab('badges')}
          data-active={tab === 'badges'}
        >
          Badges
        </button>
      </Tabs>

      {tab === 'stats' ? (
        <Content>
          <h2>Recycled</h2>
          <Recycled>
            <div>
              <img src={milk} alt="" />
              <span>56 milk cartons</span>
            </div>
            <div>
              <img src={bottles} alt="" />
              <span>23 plastic bottles</span>
            </div>
            <div>
              <img src={cardboard} alt="" />
              <span>12 cardboard boxes</span>
            </div>
          </Recycled>

          <h2>Active Challenges</h2>
          <Challenge image={light} name="Recycle Your Glass Jars" />
          <Challenge image={newspaper} name="Recycle Your Newspapers" />
        </Content>
      ) : (
        <Content>
          <h2>Badges</h2>
          <Badges>
            <div>
              <img src={milk} alt="" />
              <span>Recycled 50 milk cartons</span>
            </div>
            <div>
              <img src={cardboard} alt="" />
              <span>Recycled 10 boxes</span>
            </div>
            <div>
              <img src={bottles} alt="" />
              <span>Recycled 20 plastic bottles</span>
            </div>
            <div>
              <img src={plants} alt="" />
              <span>Master of DIY</span>
            </div>
            <div>
              <img src={eWaste} alt="" />
              <span>Donated eWaste</span>
            </div>
          </Badges>
        </Content>
      )}

      <Navigation />
    </Container>
  )
}

export default Profile