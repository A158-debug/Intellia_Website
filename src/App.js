import React, { Suspense } from 'react'
import { Footer, Navbar, Events, Home, BDS, IntelliaTeam } from './components'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const Loader = () => {
  <>
    <button type="button" class="bg-indigo-500 ..." disabled>
      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
      </svg>
      Loading...
    </button>
  </>
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Navigate to="/" />} />
            <Route path="/Team" element={<IntelliaTeam />} />
            <Route path="/BDS" element={<BDS />} />
            <Route path="/Events" element={<Events />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App