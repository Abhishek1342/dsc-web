import React from "react"
import CustomNavbar from "./components/navbar/navbar.jsx"
import MiddleComponent from "./components/middlecomponent.jsx"
import AboutUs from "./components/aboutUs.jsx"
import Events from "./components/events.jsx"

function App() {
  return (
    <div>
      <CustomNavbar />
      <MiddleComponent />
      <AboutUs />
      <Events />

    </div>
  )
}

export default App;
