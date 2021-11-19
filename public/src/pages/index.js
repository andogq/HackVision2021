import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, Global, css } from '@emotion/react'

import Home from './Home/Home'

const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
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
    padding: 5px 0;
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
    secondary: '#FFE978',
  }}>
    <Global styles={globalStyles} />

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </ThemeProvider>
)

export default Pages