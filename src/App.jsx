import React, { useState } from 'react'
import {
  Route, Routes, BrowserRouter as Router
} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Homepage from './components/home/Homepage'
import Projects from './components/projects/Projects'
import Workexp from './components/workexp/Workexp'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'

function App() {
  return (
    <div className="bg-[#122334] h-screen w-screen flex flex-col justify-center items-center">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Workexp />} />
          <Route path='/education' element={<Education />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
