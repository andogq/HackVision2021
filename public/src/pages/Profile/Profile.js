import { useNavigate } from 'react-router-dom'
import { LogOut, Settings } from 'react-feather'
import { useProfileStore } from 'stores'

import {
  Navigation,
} from 'components'

import {
  Container,
  ActionBar,
  UserInfo,
} from './profileStyle'

const user = {
  name: 'John Deere',
  image_url: '#',
}

const Profile = () => {
  const signOut = useProfileStore(state => state.signOut)
  const navigate = useNavigate()

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

      <Navigation />
    </Container>
  )
}

export default Profile