import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AnotherHome from './components/AnotherHome'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/another' element={<AnotherHome/>}/>
    </Routes>
    </Router>
  )
}

export default App
