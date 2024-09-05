import { useState } from 'react'
import Timer from './componenets/Timer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Timer />} />
    {/* <Route path="/custom" element={<CustomTimer />} /> */}
    </Routes>
  )
}

export default App
