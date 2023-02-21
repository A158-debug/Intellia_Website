import React from 'react'
import { Footer,Navbar, About,Speakers,Events ,Team, Home,Contact,BDS} from './components'
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
              <Route path="/Team" element={<Team />} />
              <Route path="/BDS" element={<BDS />} />
              <Route path="/Speakers" element={<Speakers />} />
              <Route path="/Events" element={<Events />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App