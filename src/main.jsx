import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../Components/About'
import Resume from '../Components/Resume'
import Skills from '../Components/Skills'
import Home from '../Components/Home'
import Portfolio from '../Components/Portfolio'
import Nav from '../Components/Nav'




createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/myprofile'>
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
      </BrowserRouter>
)
