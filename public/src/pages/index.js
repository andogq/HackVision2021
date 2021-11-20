import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, Global, css } from '@emotion/react'

import Home from './Home/Home'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import Feed from './Feed/Feed'
import Profile from './Profile/Profile'

const globalStyles = css`
  body {
    margin: 0;
    font-family: 'IBM Plex Mono', monospace;
    background: #FFFFFF;
    color: #222222;
  }
  body, #root {
    min-height: 100vh;
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 100px;
    box-sizing: border-box;
  }
  a {
    color: #68751A;
  }
`

const Pages = () => (
  <ThemeProvider theme={{
    background: '#FFFFFF',
    text: '#222222',
    primary: '#68751A',
    primaryLight: '#AEC78F',
    primaryBackground: '#F0FFF0',
    secondary: '#FFE978',
    error: '#D32F2F',
  }}>
    <Global styles={globalStyles} />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/feed" element={<Feed />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </ThemeProvider>
)

export default Pages