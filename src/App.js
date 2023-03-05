import React from 'react'
import { Footer,Navbar,Events, Home,BDS,IntelliaTeam} from './components'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home"  element={ <Navigate to="/" />} />
              <Route path="/Team" element={<IntelliaTeam />} />
              <Route path="/BDS" element={<BDS />} />
              <Route path="/Events" element={<Events />} />
            </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App