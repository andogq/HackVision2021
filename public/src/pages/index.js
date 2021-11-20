import { Routes, Route } from "react-router-dom"
import { ThemeProvider, Global, css } from "@emotion/react"

import Home from "./Home/Home"
import Login from "./Login/Login"
import Signup from "./Signup/Signup"
import MapView from "./Map/Map"
const globalStyles = css`
  body {
    margin: 0;
    font-family: "Fira Code", monospace;
    background: #ffffff;
    color: #222222;
  }
  body,
  #root {
    min-height: 100vh;
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
    box-sizing: border-box;
  }
  a {
    color: #68751a;
  }
`

const Pages = () => (
  <ThemeProvider
    theme={{
      background: "#FFFFFF",
      text: "#222222",
      primary: "#68751A",
      primaryLight: "#AEC78F",
      secondary: "#FFE978",
      error: "#D32F2F",
    }}
  >
    <Global styles={globalStyles} />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/map" element={<MapView />} />
    </Routes>
  </ThemeProvider>
)

export default Pages
