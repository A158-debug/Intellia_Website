import React from 'react'
import { Footer,Navbar, About,Events, Home,Contact,BDS,IntelliaTeam} from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Team" element={<IntelliaTeam />} />
              <Route path="/BDS" element={<BDS />} />
              <Route path="/Events" element={<Events />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App