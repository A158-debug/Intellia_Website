import React from 'react'
import { Footer,Navbar, About,Speakers,Events ,Team, Home,Contact} from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App