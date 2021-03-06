import React from 'react'
import NavMenu from './components/NavMenu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

const App = () => {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route index path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
